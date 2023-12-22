import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import SettingsTool from "./SettingsTool";
import FilteredPicker from "./FilteredPicker";

const SearchContainer = ({
  searchQuery,
  onSearch,
  onQueryChange,
  loading,
  onSettingsClick,
  colorToolOpen,
  pageData,
  handleSelection,
  currentSelection,
}) => {
  return (
    <>
      <SearchDiv>
        <FilteredPicker 
        pageData={pageData}
        currentSelection={currentSelection}
        handleSelection={handleSelection} />
        <StyledInput
          type="text"
          value={searchQuery}
          placeholder={searchQuery}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        <Button color="primary" variant="contained" onClick={onSearch}>
          Search
        </Button>
        <SettingsTool
          id={"settingsTool "}
          onSettingsClick={onSettingsClick}
          colorToolOpen={colorToolOpen}
        />
      </SearchDiv>
    </>
  );
};

export default SearchContainer;

const SearchDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 35px;
`;

const StyledInput = styled.input`
  border-radius: 10px;
  width: 100px;
  margin: 0 0.5rem;
  padding-left: 10px;
  transition: width 0.3s ease-in-out;
  font-family: Archivo;
  color: white;
  background-color: black;
  border: 2px solid snow;
  &:focus {
    width: 200px;
    outline: none;
  }

  @media screen and (max-width: 980px) {
    width: 100px;

    &:focus {
      width: 150px;
    }
  }
`;
