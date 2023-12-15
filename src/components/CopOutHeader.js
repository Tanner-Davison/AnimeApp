import React from 'react'
import styled from 'styled-components'
const CopOutHeader = ({ pageData }) => {
const currentPage = pageData.current_page;
	const lastPage = pageData.last_visible_page;
  return (
		<Wrapper>
			<h3>Showing Pages</h3>
			<em>
				<div id='numSelector'>
					<span>{currentPage} </span>
					<span>of </span>
					<span>{lastPage} </span>
				</div>
			</em>
		</Wrapper>
	);
}

export default CopOutHeader


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 150px;

	h3 {
		font-family: Archivo;
		font-size: 1.4rem;
		color: white;
	}
	#numSelector {
		display:flex;
		flex-direction: row;
		gap:20px;
		font-family: Archivo;
		font-size: 1.2rem;
		color: white;
		text-align: center;
		border:2px solid white;
		border-radius:10px;
		padding:.4em .6em;
	}
`;