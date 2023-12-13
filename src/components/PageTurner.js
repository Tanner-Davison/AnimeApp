import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
const PageTurner = ({
	pageData,
	searchQuery,
	onNextPage,
	onPrevPage,
	handleSearch,
	setScrollFunc,
}) => {
	const [pageQuery, setPageQuery] = useState(null);
	const [pages, setPages] = useState([]);
	const currentPage = pageData.current_page;
	const nextPage = pageData.has_next_page;
	const lastPage = pageData.last_visible_page;
	const [openNav, setOpenNav] = useState(false);

	const getAllPageNums = () => {
		if (lastPage > 2) {
			for (let i = 0; i < lastPage; i++) {
				setPages((prev) => [...prev, i]);
			}
			console.log(pages);
		}
		return pages;
	};
	useEffect(() => {
		setPages([]);
		getAllPageNums();
	}, [pageData]);
	return (
		<Wrapper>
			<>
				{currentPage > 1 && (
					<div id={"flex-row"}>
						<NavigateBeforeIcon
							id={"iconId"}
							onClick={onPrevPage}
						/>
						<p>Page {currentPage - 1} </p>
					</div>
				)}
				{currentPage === 1 && <div></div>}
				{lastPage > 2 && (
					<div className={"pages"}>
						{pages.map((page) => {
							return (
								<button
									id={"page-button"}
									key={page}
									value={page}
									onClick={() => handleSearch(page)}>
									{page += 1}
								</button>
							);
						})}
					</div>
				)}
				{lastPage <= 2 && (
					<div className={"pages"}>
						<button
							key={currentPage}
							id={"page-button"}>
							<p>
								Page {currentPage} of {lastPage}{" "}
							</p>{" "}
						</button>
						;
					</div>
				)}
				{nextPage && (
					<div id={"flex-row"}>
						<p>Next</p>
						<NavigateNextIcon
							id={"iconId"}
							onClick={onNextPage}
						/>
					</div>
				)}
			</>
		</Wrapper>
	);
};

export default PageTurner;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	align-self: center;
	width: 50vw;
	gap: 15%;
	overflow-y: visible;
	#flex-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: snow;
		font-family: Archivo;
		box-sizing: border-box;
		padding: 0.25rem;
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.9);
		transition: transform 0.3s ease-in-out;
	}
	.pages {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 50%;
		width: 100%;
		height: 100%;
		padding: 1rem auto;
		gap: 15px;
		overflow-x: scroll;
		overflow-y: visible;
	}
	#page-button {
		box-sizing: border-box;
		border: 2px solid white;
		font-family: Archivo;
		border-radius: 18px;
		width: auto;
		height: 52%;
		font-size: 1.5em;
		background-color: #645cff;
		color: white;
		cursor: pointer;
		transition: transform 0.2s ease-in-out;
	}
	#page-button:hover {
		transform: scale(1.1);
	}
	p {
		font-family: Archivo;
		text-wrap: nowrap;
		color: white;
		margin: 0;
		text-align: center;
		font-size: 1.3rem;
	}
	#flex-row:hover {
		transform: scale(1.2);
		color: snow;
	}
	#iconId {
		color: white;
		height: 2.3em;
		width: 2.3em;
	}
`;
