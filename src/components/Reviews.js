import React from 'react'
import styled from 'styled-components';
import { useEffect,useState } from 'react';

const Reviews = ({ data }) => {
    const [reviewOpen, setReviewOpen]=useState(false)
    useEffect(() => {
        if (data) {
          console.log(data)
      } 
   },[data])
  return (
		<Wrapper>
			<NameButton>
				<StyledName onClick={() => setReviewOpen(!reviewOpen)}>
					{data.user.username} 
				</StyledName>
			</NameButton>
			{reviewOpen && <StyledReview>{data.review}</StyledReview>}
		</Wrapper>
	);
}

export default Reviews;

const Wrapper = styled.div`
position: relative;
display:flex;
text-align: center;
flex-direction: column;
align-items: left;
max-width: 600px;
width:100%;
border:1px solid white;
`
const StyledName = styled.h3`
position: relative;
font-family: Archivo;
color:white;
margin:unset;

`
const StyledReview = styled.p`
position: relative;
display: flex;
font-family: Archivo;
margin:unset;
color:white;
`
const NameButton = styled.div`
position: relative;
display: flex;
border:none;
cursor: pointer;
width:fit-content;

`