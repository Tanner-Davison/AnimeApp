import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import BasicTitle from "./components/BasicTitle";
import ComplexComponent from "./components/ComplexTitle";
import getSearchData from "./API/getSearchData";
import SearchContainer from "./SearchContainer";
import AnimeCardComponent from "./AnimeCardComponent";
import AnimeFinal from "./components/imgs/AnimeFinal.png";
import clouds1 from './components/imgs/clouds1.jpeg';
import clouds2 from './components/imgs/clouds2.avif';

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
  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);
  return (
    <Wrapper>
      <Header className={"header"}>
        <BasicTitle> Find Your Favorite Anime </BasicTitle>
      <SearchContainer
        searchQuery={searchQuery}
        onSearch={() => handleSearch()}
          onQueryChange={(query) => setSearchQuery(query)}
          
        loading={loading}
      />
      </Header>

    
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
height: fit-content;
display:flex;
flex-direction: column;
border: 5px solid red;
width: 100vw;
background-image:url(${clouds2});
background-repeat:repeat;
background-position:contain;
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
  background-repeat: repeat-y;
  padding: 1rem;
  z-index: 100;
`;
