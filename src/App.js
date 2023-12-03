import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import BasicTitle from "./components/BasicTitle";
import getSearchData from "./API/getSearchData";
import SearchContainer from "./components/SearchContainer";
import AnimeCardComponent from "./components/AnimeCardComponent";
import AnimeFinal from "./components/imgs/AnimeFinal.png";
import OnePunchMan from "./components/imgs/OnePunchMan.jpg";
import PageTurner from "./components/PageTurner";
function App() {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResult, setSearchResult] = useState("");
  const [pageData, setPageData] = useState("");
  const [scrollFunc,setScrollFunc]=useState(false)

	const [loading, setLoading] = useState(false);
	useEffect(() => {
    console.log(pageData);
    if (scrollFunc) {
      console.log('this is running working')
      handleScroll()
    }
  }, [pageData]);
  const handleScroll = () => {
    console.log('running')
    const element = document.getElementById('headerId')
      element.scrollIntoView({
				behavior: "smooth",
				block: "start", 
			});
    
  }
  const handleSearch = async (pageOption) => {
    setScrollFunc(true)
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

	return (
		<>
			<Wrapper>
				<HeaderWrapper>
					<Header id={'headerId'} className={"header"}>
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
				<PageTurner
					pageData={pageData}
					handleSearch={handleSearch}
					searchQuery={searchQuery}
					onNextPage={() => {
						handleSearch(pageData.current_page + 1);
          }}
          setScrollFunc={setScrollFunc}
					onPrevPage={() => {
						handleSearch(pageData.current_page - 1);
					}}></PageTurner>
			</Wrapper>
		</>
	);
}

export default App;
const Wrapper = styled.div`
	position: sticky;
	top: 0px;
	height: 99vh;
	overflow-y: scroll;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	border: 5px solid red;
	width: 99vw;
	background-image: url(${OnePunchMan});
	background-repeat: no-repeat;
	background-size: cover;
	z-index: 139;
	&::-webkit-scrollbar {
		display: none;
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
