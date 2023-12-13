import React from "react";
import styled from "styled-components";

const BottomInfo = ({ tvType, episodes, rating }) => {
	return (
		<Wrapper>
			<Item
				className={"bottom-info-elements"}
				id={"tvType"}>
				<h2> Type </h2>
				<p>{tvType}</p>
			</Item>
			<Item
				className={"bottom-info-elements"}
				id={"episodes"}>
				<h2> Episodes </h2>
				<p id={"episodeNumWrapper"}>{episodes}</p>
			</Item>
			<Item
				className={"bottom-info-elements"}
				id={"rating"}>
				<h2>Rated </h2>
				<p id={'ratingP'}>{rating}</p>
			</Item>
		</Wrapper>
	);
};

export default BottomInfo;
const Wrapper = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: 100px;
	color: white;
	align-items: center;
	justify-content: center;
	gap: 10%;
	font-family: Archivo;
	text-align: center;
	margin-bottom: 20px;
	padding:.5em 1em;

	h2,
	p {
		margin: 0.25em;
	}
	h2 {
		font-size: 1.4rem;
	}
	p {
		font-size: 0.9rem;
		color: white;
	}
	#episodeNumWrapper {
		border-radius: 7px;
		box-sizing: border-box;
		border: 2px solid white;
		padding: 0.2rem 0.5rem;
	}
	@media screen and (max-width: 980px) {
		h2 {
			font-size: 0.8rem;
			margin: 0.25em;
		}
		p {
			font-size: 0.9rem;
			margin: 0.25em;
		}
		#episodeNumWrapper {
			border-radius: 50px;
			box-sizing: border-box;
			border: 2px solid white;
			padding: 0rem 0.2rem;
		}
	}
`;
const Item = styled.div`
	position: relative;
	display: flex;
	width: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: 0.44rem 1em;
	gap: 0.25rem;
	box-sizing: border-box;
	border: 1px solid white;
	border-radius: 12px;
	margin-top: 5%;
	#ratingP{
		font-size:.9rem;
	}
	@media screen and (max-width: 980px) {
		flex-direction: column;
		height: 60px;
		width: 100px;
		margin-top: 100px;
		#ratingP{
			font-size:.55rem ;
		}
	}
`;
