import React from 'react';
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from "@mui/icons-material/StarHalf";
const StyledStars = ({ number }) => {
  const stars = number / 2;
  const filledStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;

   const renderFilledStars = () => {
			const filled = [];
			for (let i = 0; i < filledStars; i++) {
				filled.push(<StarIcon key={`star-filled-${i}`} />);
			}
			return filled;
   };
  
  const renderHalfStar = () => {
		if (hasHalfStar) {
			return <StarHalfIcon key='star-half' />;
		}
		return null;
	};
  return (
		<Wrapper>
			<StyledReview>
				Rating: <span id='spanId'> {number / 2} / 5</span>
				<StarsContainer>
					{renderFilledStars()}
					{renderHalfStar()}
				</StarsContainer>
			</StyledReview>
		</Wrapper>
	);
}

export default StyledStars

const Wrapper = styled.div`
	position: relative;
	display: flex;
  width:50%;
`;

const StyledReview = styled.h3`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: Archivo;
	color: #fbdc82;
	gap: 10px;
	#spanId {
		color: white;
	}
`;

const StarsContainer = styled.span`
	position:relative;
  display: inline-flex;
  color:gold;
`;