import styled from "styled-components";
import { useState } from "react";
import React from "react";
import ComplexTitle from "./ComplexTitle";
import { HipsterButton, DefaultButton } from "./Buttons";
import RightComponent from "./RightComponent";
import BottomInfo from "./BottomInfo";
import getForumData from "../API/getForumData";

const AnimeCardComponent = ({ animeData }) => {
	const [showSummary, setShowSummary] = useState(false);

	const title = animeData.title_english || animeData.title;
	const animeImg = animeData.images.jpg.image_url;
	const score = animeData.score;
	const scoredBy = animeData.scored_by;
	const tvType = animeData.type;
	const ReleasedYear = animeData.year;
	const rating = animeData.rating;
	const episodes =
		animeData.episodes !== null ? animeData.episodes : "Movie/NoEpisodes";
	const YtVideoUrl = animeData.trailer.embed_url;

	return (
		<>
			<CardWrapper
				key={animeData.mal_id + 222}
				showSummary={showSummary}>
				<div
					className={"card"}
					key={animeData.mal_id + 32}>
					<h3 id='creative'> {title}</h3>
					<div
						key={animeData.mal_id + 2322}
						className={"card-content"}>
						<LeftHeader key={animeData.mal_id + 12223}>
							<img
								src={animeImg}
								alt={"animeImg"}
							/>
							{showSummary ? (
								<DefaultButton
									key={animeData.mal_id + 443}
									onClick={() => {
										setShowSummary(false);
									}}>
									Hide summary
								</DefaultButton>
							) : (
								<HipsterButton
									key={animeData.mal_id + 940}
									id={animeData.synopsis === null ? "disabled" : ""}
									onClick={() => setShowSummary(true)}>
									Read Summary
								</HipsterButton>
							)}
						</LeftHeader>
						<RightComponent
							key={animeData.mal_id + 323}
							YtVideoUrl={YtVideoUrl}
							episodes={episodes}
							score={score}
							scoredBy={scoredBy}></RightComponent>

						<div
							key={animeData.mal_id + 34322}
							className={
								showSummary ? "dropDownElement" : "dropDownElement drop"
							}>
							<>
								<h3>Synopsis</h3>
								<article showSummary>
									{animeData.synopsis !== null
										? animeData.synopsis
										: "Synopsis not available for this title."}
								</article>
							</>
						</div>
					</div>
				</div>

				<BottomInfo
					key={animeData.mal_id}
					tvType={tvType}
					ReleasedYear={ReleasedYear}
					rating={rating}>
					{" "}
				</BottomInfo>
				<DefaultButton onClick={() => getForumData(animeData.mal_id)}>
					View Forum
				</DefaultButton>
			</CardWrapper>
		</>
	);
};

export default AnimeCardComponent;

const CardWrapper = styled.div`
	position: relative;
	display: flex;
	background-color: black;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin: 1rem auto;
	background: transparent;
	width: 63vw;
	height: ${({ showSummary }) => showSummary && "fit-content"};
	z-index: 1;

	#creative {
		position: relative;
		width: fit-content;
		justify-self: flex-end;
		color: white;
		font-size: 32px;
		background-color: black;
		border-radius: 17px;
		padding: 1rem;
	}
	.card {
		position: relative;
		display: flex;
		align-items: center;
		background-color: black;
		min-height: 426px;
		min-width: 351px;
		flex-direction: column;
		background: rgba(0, 0, 0, 0.87);
		gap: 1rem;
		width: 55vw;
		color: white;
		justify-content: center;
		padding: 1rem;
		text-align: center;
		border-radius: 17px;
		z-index: 1;
	}
	.card-content {
		display: flex;
		flex-direction: row;
		width: 100%;
		align-items: center;
		justify-content: space-around;
	}

	.dropDownElement {
		position: absolute;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		left: 37%;
		top: 32%;
		bottom: 8%;
		max-width: 59%;
		max-height: 66%;
		background-color: rgba(0, 0, 0, 0.8);
		height: 66%;
		padding-bottom: 10px;
		text-align: center;
		overflow-y: scroll !important;
		text-overflow: clip;
		border-radius: 17px;
		overflow: hidden;
		animation: slideDown 0.6s forwards;
		z-index: 4;
		h3 {
			color: white;
			align-self: center;
		}
	}
	.dropDownElement::-webkit-scrollbar {
		display: none;
		background-color: rgba(0, 0, 0, 0.87);
		z-index: -2;
	}
	.dropDownElement.drop {
		position: absolute;
		animation: slideUp 2s forwards;
	}

	article {
		position: relative;
		display: flex;
		border-radius: 17px;
		padding: 2rem 1rem;
		font-family: "Archivo", sans-serif;
		background-color: snow;
		line-height: 1.5rem;

		color: whitesmoke;
		max-width: 80%;
		background-color: rgba(0, 0, 0, 0.4);
		overflow: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		transition: height 0.2s ease-out;
		animation: ${({ showSummary }) => showSummary && "slideDown .8s forwards"};
		z-index: -2;
	}

	article::-webkit-scrollbar {
		display: none;
	}

	@keyframes slideDown {
		from {
			transform: translateX(-300%);

			width: 100%;
		}
		to {
			transform: translateX(0);

			width: 100%;
		}
	}

	@keyframes slideUp {
		0% {
			transform: translateX(0);
			z-index: -2;
		}

		100% {
			transform: translateX(-1000%);
			z-index: -2;
		}
	}
	@media screen and (max-width: 980px) {
		.card-content {
			flex-direction: column;
			gap: 5%;
			height: fit-content;
			padding-bottom: 10px;
		}
		.dropDownElement {
			position: absolute;
			top: unset;
			left: 1px;
			min-width: 380px;
			max-width: 98%;
			height: 300px;
			bottom: 1px;
		}
	}
`;
const LeftHeader = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	gap: 25px;
	width: fit-content;
	z-index: 1;
	img {
		position: relative;
		width: 12rem;
		border-radius: 17px;
		transition: transform 0.3s ease-in-out;
		cursor: pointer;

		z-index: -3;
	}
	img:hover {
		transform: scale(1.2);
	}
	#defaultButton {
		z-index: 5;
	}

	@media screen and (max-width: 980px) {
		img {
			width: 7.5rem;
		}
	}
`;
