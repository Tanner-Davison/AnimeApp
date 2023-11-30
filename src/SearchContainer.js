import React from 'react'
import styled from 'styled-components';
import { Button } from '@mui/material';

const SearchContainer = ({searchQuery,onSearch,onQueryChange, loading }) => {
  return (
    <SearchDiv>
        <input 
        type='text'
        value={searchQuery}
        placeholder={searchQuery}
        onChange={(e)=> onQueryChange(e.target.value)}
        className={'searchInput'}/>
      <Button
        color="primary"
        variant={"contained"}
        onClick={onSearch}>
        Search
      </Button>
    </SearchDiv>
  );
}

export default SearchContainer

const SearchDiv = styled.div`
position: relative;
display:flex;
justify-content: center;

.searchInput{
    border-radius: 10px;
    width: 200px;
    margin:0 .5rem;
    padding-left:10px;
}


`