import React from "react";
import { useState, useEffect } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import BasicTitle from "./components/BasicTitle";
import getSearchData from "./API/getSearchData";
import SearchContainer from "./components/SearchContainer";
import AnimeCardComponent from "./components/AnimeCardComponent";
import AnimeFinal from "./components/imgs/AnimeFinal.png";
import OnePunchMan from "./components/imgs/OnePunchMan.jpg";
import PageTurner from "./components/PageTurner";
import FinalSaitama from "./components/imgs/FinalSaitama.png";
import onePunchManPointingUp from "./components/imgs/onePunchManPointingUp.jpg";
import onePunchPointingDown from "./components/imgs/onePunchPointingDown.png";
import saitamaHanging from "./components/imgs/saitamaHanging.png";
import { ArrowButton } from "./components/Buttons";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const DarkTheme = {
	color: "white",
};

function App() {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResult, setSearchResult] = useState("");
	const [pageData, setPageData] = useState("");
	const [scrollFunc, setScrollFunc] = useState(false);
	const [openNav, setOpenNav] = useState(false);
	const [scrollText, setScrollText] = useState("");
	const [loading, setLoading] = useState(false);

	const handleScroll = () => {
		console.log("running");
		const element = document.getElementById("headerId");
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};
	const handleOpenNav = () => {
		return setOpenNav((prev) => !prev);
	};
	const scrollToBottom = () => {
		const bottom = document.getElementById("bottomElement");
		bottom.scrollIntoView({
			behavior: "smooth",
			block: "end",
			inline: 'nearest',
		});
	};
	const handleOnMouseOver = () => {
		setScrollText("scroll");
		return setOpenNav(true);
	}
	const handleClose = () => setOpenNav(false);
	const handleOnMouseLeave = () => {
		setOpenNav(false)
		setScrollText("");
}
	
	const handleSearch = async (pageOption) => {
		setScrollFunc(true);
		let pageQuery = null;
		if (pageOption) {
			pageQuery = pageOption;
		}
		if (searchQuery.trim() !== "") {
			setLoading(true);
			try {
				const searchData = await getSearchData({ searchQuery, pageQuery });
				setSearchResult(searchData.response);
				setPageData(searchData.pageData);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		} else {
			console.error("Search query is empty");
		}
	};

	useEffect(() => {
		console.log(pageData);
		if (scrollFunc === true) {
			console.log("this is running working");
			handleScroll();
			setScrollFunc(false);
		}
		//eslint-disable-next-line
	}, [pageData, scrollFunc]);
	return (
		<>
			<ThemeProvider theme={DarkTheme}>
				<Wrapper>
					<HeaderWrapper>
						<Header
							id={"headerId"}
							className={"header"}>
							<BasicTitle>Search For Any Anime </BasicTitle>
							<SearchContainer
								searchQuery={searchQuery}
								onSearch={() => handleSearch()}
								onQueryChange={(query) => setSearchQuery(query)}
								loading={loading}
							/>
						</Header>
					</HeaderWrapper>

					{searchResult !== "" &&
						searchResult.map((result) => {
							return (
								<AnimeCardComponent
									key={result.mal_id}
									animeData={result}
									scrollToTop={handleScroll}
									setScrollFunc={setScrollFunc}
									scrollFunc={scrollFunc}
								/>
							);
						})}
					<div id={'bottomElement'}></div>
					<PageTurner
						pageData={pageData}
						handleSearch={handleSearch}
						searchQuery={searchQuery}
						onNextPage={() => {
							handleSearch(pageData.current_page + 1);
						}}
						setScrollFunc={setScrollFunc}
						onPageClick={handleSearch}
						onPrevPage={() => {
							handleSearch(pageData.current_page - 1);
						}}></PageTurner>

					<ArrowButton
						type='button'
						id={"arrow"}
						onMouseOver={() => handleOnMouseOver()}
						onMouseLeave={() => handleOnMouseLeave()}>
						{
							<>
								{}
								<span id={"scrollText"}>{scrollText}</span>
								<NavigateNextIcon />
								{openNav && (
									<NavPage>
										<button
											className={"pageGuides up"}
											onClick={() => {
												setScrollFunc(true);
											}}>
											<p>Scroll</p>
											<img
												id={"pointing-up"}
												src={onePunchManPointingUp}
												alt={"saitama anime pointing up"}
											/>
											<p> Up</p>
										</button>
										<button
											className={"pageGuides down"}
											onClick={() => {
												scrollToBottom();
											}}>
											<p>Scroll</p>
											<img
												id={"pointing-down"}
												src={onePunchPointingDown}
												alt={"saitama anime pointing down"}
											/>
											<p> Down</p>
										</button>
									</NavPage>
								)}
							</>
						}
					</ArrowButton>
				</Wrapper>
			</ThemeProvider>
		</>
	);
}

export default App;
const Wrapper = styled.div`
	position: relative;

	height: 99vh;
	overflow: scroll;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content:space-between;
	width: 99vw;
	background-image: url(${OnePunchMan});
	background-repeat: no-repeat;
	background-size: cover;
	z-index: 139;
	#bottom-element{
		position: absolute;
		bottom:5%;
	}
	#scrollText {
		font-family: Archivo;
		font-size: 1.3em;
		transform: rotate(270deg);
		margin: 0px;
	}
	
	&::-webkit-scrollbar {
		position: relative;
		width: 60px;
		overflow: visible;
	}

	&::-webkit-scrollbar-track {
		background-color: transparent;
		height: 100px;
	}

	/* scrollbar itself */
	&::-webkit-scrollbar-thumb {
		height: 100px;
		background-color: transparent;
		background-image: url(${saitamaHanging}) !important;
		background-size: contain;
		background-position: end;
		background-size: 100%;
		background-repeat: no-repeat;
		border-radius: 16px;
	}

	@media screen and (max-width: 980px) {
		&::-webkit-scrollbar {
			position: absolute;
			width: 30px;
		}
	}
`;
const Header = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	top: 0px;
	width: 50vw;
	min-width: 400px;
	height: auto;
	border-radius: 18px;
	margin: 1rem auto;
	background-image: url(${AnimeFinal});
	background-size: cover;
	background-repeat: no-repeat;
	padding: 1rem;

	z-index: 100;
`;
const HeaderWrapper = styled.div`
	position: relative;
	display: flex;
	width: 60vw;
	margin: 1rem auto;
	align-items: center;
	justify-content: center;
	border-radius: 17px;
	min-width: fit-content;
	background-color: rgba(1111, 1111, 1111, 0.3);
	z-index: 1;
`;

const NavPage = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100px;
	align-items: center;
	justify-content: space-evenly;
	
	bottom: 0px;
	left: 0px;
	background: transparent;
	z-index: 150;
	gap: 10px;

	p {
		font-family: Archivo;
		font-size: 1em;
		margin: 0px;
	}
	.pageGuides {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		border: none;
		color: white;
		width: 100px;
		padding: 10px;
		border-radius: 18px;
		background-color: rgba(0, 0, 0, 0.7);
		box-sizing: border-box;
		border: 3px solid snow;
		cursor: pointer;
		transition: transform 0.2s ease-in-out;
		overflow: hidden;
	}

	.pageGuides:hover {
		transform: scale(1.1);
	}

	#pointing-down {
		position: relative;
		height: 80px;
		width: 110px;
	}
	#pointing-up {
		position: relative;
		height: 80px;
		width: 80px;
	}
	@media screen and (max-width: 980px) {
		width: unset;
		
		#pointing-down {
	
			height: 40px;
			width: 50px;
		}
		#pointing-up {
			
			height: 40px;
			width: 40px;
		}
	}
`;
