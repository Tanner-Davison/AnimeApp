import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import BasicTitle from './components/BasicTitle';
import ComplexComponent from './components/ComplexComponent';
import getSearchData from './API/getSearchData';
import SearchContainer from './SearchContainer';

function App() {
   const [searchQuery, setSearchQuery] = useState('');
   const [searchResult, setSearchResult] = useState('');
   const [loading, setLoading] = useState('');

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
    <>
      <BasicTitle> Find Your Favorite Anime </BasicTitle>

      <SearchContainer
        searchQuery={searchQuery}
        onSearch={()=> handleSearch()}
        onQueryChange={(query)=> setSearchQuery(query)}
        loading={loading}/>
      <ComplexComponent title='more complex title'/>
    </>
  );
};

export default App;

