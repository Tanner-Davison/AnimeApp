import styled from "styled-components";
import { useState } from "react";
import React from "react";
import ComplexTitle from "./ComplexTitle";
import { HipsterButton, DefaultButton } from "./Buttons";

const AnimeCardComponent = ({ animeData }) => {
	console.log(animeData);
	const [showSummary, setShowSummary] = useState(false);
	const title = animeData.title_english || animeData.title;
	const animeImg = animeData.images.jpg.image_url;

	return (
		<CardWrapper showSummary={showSummary}>
			<div className={"card"}>
				<LeftHeader>
					<ComplexTitle title={title} />
					<img
						src={animeImg}
						alt={"animeImg"}
					/>
					{showSummary ? (
						<DefaultButton
							onClick={() => {
								setShowSummary(false);
							}}>
							Hide summary
						</DefaultButton>
					) : (
						<HipsterButton
							id={animeData.synopsis === null ? "disabled" : ""}
							onClick={() => setShowSummary(true)}>
							Read Summary
						</HipsterButton>
					)}
				</LeftHeader>

				<div
					className={showSummary ? "dropDownElement" : "dropDownElement drop"}>
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
			<div></div>
		</CardWrapper>
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

	.card {
		position: relative;
		display: flex;
		align-items: flex-start;
		background-color: black;
		min-height: 300px;
		flex-direction: column;
		background: rgba(0, 0, 0, 0.87);
		gap: 1rem;
		width: 55vw;
		padding: 1rem;
		text-align: center;
		border-radius: 17px;
		z-index: 1;
	}

	.dropDownElement {
		position: absolute;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		left: 49%;
		top: 9%;
		bottom: 10%;
		max-width: 50%;
		max-height: 85%;
		background-color: rgba(0, 0, 0, 0.4);
		height: fit-content;
		text-align: center;
		overflow-y: scroll !important;
		text-overflow: clip;
		border-radius: 17px;
		overflow: hidden;
		animation: slideDown 0.6s forwards;
		z-index: -2;
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
`;
const LeftHeader = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	gap: 5px;
	height: 100%;
	width: 45%;
	z-index: 1;
	img {
		position: relative;
		width: 8rem;
		border-radius: 17px;
		transition: transform 0.3s ease-in-out;
		cursor: pointer;
		margin-bottom: 5%;
		z-index: -3;
	}
	img:hover {
		transform: scale(1.2);
	}
	#defaultButton {
		z-index: 5;
	}
`;
