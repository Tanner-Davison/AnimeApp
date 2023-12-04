import React from "react";
import { useState } from "react";
import styled from "styled-components";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
const PageTurner = ({
	pageData,
	searchQuery,
	onNextPage,
	onPrevPage,
	setScrollFunc,
}) => {
	const [pageQuery, setPageQuery] = useState(null);
	const [pages, setPages]= useState([]);
	const currentPage = pageData.current_page;
	const nextPage = pageData.has_next_page;
	const lastPage = pageData.last_visible_page;
	const getAllPageNums = () =>{
		if(lastPage >2){
			for(let i=0; i<lastPage; i++){
				setPages(i);
			}
			console.log(pages)
		}
	}
	return (
    <Wrapper id={"bottomElement"}>
      <>
        {currentPage > 1 && (
          <div id={"flex-row"}>
            <NavigateBeforeIcon id={"iconId"} onClick={onPrevPage} />
            <p>Last Page</p>
          </div>
        )}
        {nextPage && (
          <div id={"flex-row"}>
            <p>Next Page</p>
            <NavigateNextIcon id={"iconId"} onClick={onNextPage} />
          </div>
        )}
        <button onClick={getAllPageNums}>Click me</button>
      </>
    </Wrapper>
  );
};

export default PageTurner;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	gap: 15%;
	#flex-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: snow;
		font-family: Archivo;
		box-sizing: border-box;
		cursor: pointer;
		transition: transform 0.3s ease-in-out;
	}
	#flex-row:hover {
		transform: scale(1.2);
		color: snow;
	}
	#iconId {
		color: white;
		height: 3.4em;
		width: 3.4em;
	}
`;
