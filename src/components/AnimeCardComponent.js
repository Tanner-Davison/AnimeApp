import styled from "styled-components";
import { useState } from "react";
import React from "react";
import ComplexTitle from "./ComplexTitle";
import { HipsterButton, DefaultButton } from "./Buttons";
import RightComponent from "./RightComponent";
import BottomInfo from "./BottomInfo";
import getForumData from "../API/getForumData";
import saitamaFaceOnly from "./imgs/saitamaFaceOnly.png";
import CloseIcon from "@mui/icons-material/Close";


const AnimeCardComponent = ({ animeData,scrollToTop, setScrollFunc,scrollFunc }) => {
	const [showSummary, setShowSummary] = useState(false);
	
	const title = animeData.title_english || animeData.title;
	const animeImg = animeData.images.jpg.image_url;
	const score = animeData.score;
	const scoredBy = animeData.scored_by;
	const tvType = animeData.type;
	const releasedYear = animeData.year;
	const rating = animeData.rating;
	const episodes =
		tvType === 'TV' || 'Special'  && tvType !== null  ?  animeData.episodes : "N/A";
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
								<div className={"flex"}>
									<img
										id={"synopsisImg"}
										src={saitamaFaceOnly}
										alt={"saitamaface"}
									/>
									<h3>Synopsis</h3>
								</div>
								<article showSummary>
									{animeData.synopsis !== null
										? animeData.synopsis
										: "Synopsis not available for this title."}
								</article>
							</>
							<CloseIcon
								id={'close-icon'}
								onClick={()=>setShowSummary(false) } />
						</div>
					</div>
					<BottomInfo
						key={animeData.mal_id}
						tvType={tvType}
						releasedYear={releasedYear}
						rating={rating}
						episodes={episodes}>
						{" "}
					</BottomInfo>
				</div>

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
	flex-direction: column;
	min-width: fit-content;
	align-items: center;
	justify-content: center;
	gap: 0.25rem;
	margin: 1rem auto;
	background: transparent;
	width: 63vw;

	z-index: 1;
	.flex {
		display: flex;
		flex-direction: row;
		padding: 5px;
		align-items: center;
		justify-content: center;
	}
	#synopsisImg {
		width: 112px;
		margin-right: -20px;
		height: 86px;
	}
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
		justify-content: center;
		background-color: black;
		min-height: 426px;
		min-width: fit-content;
		flex-direction: column;
		background: rgba(0, 0, 0, 0.87);
		gap: 0.025rem;
		width: 55vw;
		color: white;
		padding: 1rem 2rem;
		text-align: center;
		border-radius: 17px;
		z-index: 1;
	}
	.card-content {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin: 10px;
		gap: 10px;
		align-items: center;
		justify-content: space-around;
	}

	.dropDownElement {
		position: absolute;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		right: 0px;
		font-size: 1.5rem;
		bottom: 1px;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.9);
		height: 75%;
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
		#close-icon {
			position: absolute;
			top: 5px;
			right: 15px;
			border-radius: 50px;
			box-sizing: border-box;
			border: 2px solid red;
			color: red;
			transition: transform 0.2s ease-in-out;
			cursor: pointer;
		}
		#close-icon:hover {
			transform: scale(1.1);
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
		line-height: 1.9rem;

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
		}

		100% {
			transform: translateX(-1000%);
		}
	}
	@media screen and (max-width: 980px) {
		min-width: 84vw;
		.card {
			padding-bottom: 2.3rem;
			min-width: 100%;
		}
		.card-content {
			flex-direction: column;
			align-items: center;
			justify-content: center;
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
			height: 422px;
			bottom: 1px;
		}
	}
`;
const LeftHeader = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
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
			width: 12.5rem;
			margin-top: 1.2rem;
		}
	}
`;
