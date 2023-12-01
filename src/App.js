import React from "react";
import { useState} from "react";
import styled from "styled-components";
import BasicTitle from "./components/BasicTitle";
import getSearchData from "./API/getSearchData";
import SearchContainer from "./SearchContainer";
import AnimeCardComponent from "./AnimeCardComponent";
import AnimeFinal from "./components/imgs/AnimeFinal.png";
import OnePunchMan from './components/imgs/OnePunchMan.jpg'

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [loading, setLoading] = useState(false);

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
          return <AnimeCardComponent animeData={result} />;
        })}
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
position: sticky;;
top:0px;
height: 100vw;
overflow-y:scroll;
display:flex;
flex-direction: column;
border: 5px solid red;
width: 100vw;
background-image:url(${OnePunchMan});
background-repeat:no-repeat;
background-size:cover;
z-index: 139;

`
const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top:0px;
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
  width: 80vw;
  margin: 1rem auto;
  align-items: center;
  justify-content: center;
  border-radius:17px;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); 
  z-index: 1;
`;
