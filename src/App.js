import React from "react";
import { useState } from "react";
import styled from "styled-components";
import BasicTitle from "./components/BasicTitle";
import getSearchData from "./API/getSearchData";
import SearchContainer from "./components/SearchContainer";
import AnimeCardComponent from "./components/AnimeCardComponent";
import AnimeFinal from "./components/imgs/AnimeFinal.png";
import OnePunchMan from "./components/imgs/OnePunchMan.jpg";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const handleSearch = async () => {
    if (searchQuery.trim() !== "") {
      setLoading(true);
      try {
        const searchData = await getSearchData(searchQuery);
        setSearchResult(searchData);
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
    <Wrapper>
      <HeaderWrapper>
        <Header className={"header"}>
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
          return <AnimeCardComponent animeData={result} showSummary={showSummary} setShowSummary={setShowSummary} />;
        })}
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  height: 99vh;
  overflow-y: scroll;
  overflow-x:hidden;
  display: flex;
  flex-direction: column;
  border: 5px solid red;
  width: 99vw;
  background-image: url(${OnePunchMan});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 139;
  &::-webkit-scrollbar{
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
  background-color: rgba(1111,1111, 1111, 0.3);
  z-index: 1;
`;
