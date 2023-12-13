import React from 'react'
import styled from 'styled-components'
const CopOutHeader = ({ pageData }) => {
const currentPage = pageData.current_page;
	const nextPage = pageData.has_next_page;
	const lastPage = pageData.last_visible_page;
  return (
		<Wrapper>
			<h3>Pages {currentPage} of {lastPage} </h3>
		</Wrapper>
	);
}

export default CopOutHeader


const Wrapper = styled.div`
display:flex;
flex-direction:row;
align-items: center;
justify-content: center;

h3{
    font-family: Archivo;
    font-size: 2rem;
    color:white;
}
`