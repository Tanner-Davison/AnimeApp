import React, { lazy } from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const TruncatedText = React.lazy(() =>
	import("../components/helpers/TruncatedText")
);
const StyledStars = React.lazy(() =>
	import("../components/helpers/StyledStars")
);
const Reviews = ({ data }) => {
	const [reviewOpen, setReviewOpen] = useState(false);
	const photoImg = data.user.images.webp.image_url;
	const regPhoto = data.user.images.jpg.image_url;
	useEffect(() => {
		if (data) {
			console.log(data);
		}
	}, [data]);
	return (
		<Wrapper>
			<Header>
				<NameDiv>
					<a
						href={data.user.url}
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={photoImg || regPhoto}
							alt={"profilePhoto"}
							id={"profileImage"}
						/>
					</a>
					<StyledName>{data.user.username}</StyledName>
				</NameDiv>
				<StyledStars number={data.score}></StyledStars>
			</Header>

			<StyledReview>
				{reviewOpen && (
					<Button onClick={() => setReviewOpen(!reviewOpen)}>
						<em> ( . . . Show Less )</em>
					</Button>
				)}

				<TruncatedText
					text={data.review}
					maxLength={reviewOpen ? data.review.length : 150}
					reviewOpen={reviewOpen}
					handleReviewOpen={() => setReviewOpen(!reviewOpen)}
				/>
				<ButtonRight onClick={() => setReviewOpen(!reviewOpen)}>
					<em> {reviewOpen ? "( . . . Show Less )" : "( . . . Read More )"}</em>
				</ButtonRight> 
			</StyledReview>
		</Wrapper>
	);
};

export default Reviews;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	text-align: center;
	flex-direction: column;
	align-items: left;
	max-width: 600px;
	width: 100%;
	border-radius: 15px;
	border: 1px solid white;
    margin-top:10px;
`;
const Header = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const StyledName = styled.h3`
	position: relative;
	font-family: Archivo;
	color: white;
	margin: unset;
	padding-left: 10px;
`;
const StyledReview = styled.p`
	position: relative;
	display: flex;
	flex-direction: column;
	font-family: Archivo;
	margin: unset;
	color: snow;
	text-align: left;
	text-indent: 50px;
	padding: 0px 22px 22px 22px;
	line-height: 1.5rem;
`;
const NameDiv = styled.div`
	position: relative;
	display: flex;
	border: none;
	width: fit-content;
	align-items: center;
	width: 50%;
	padding: 15px;
	#profileImage {
		border-radius: 50%;
		width: 50px;
		height: 50px;
	}
`;
const Button = styled.button`
	position: relative;
	display: flex;
	border: none;
	color: red;
	font-family: Archivo;
	background-color: transparent;
	justify-content: flex-end;
	align-items: flex-end;
	cursor: pointer;
`;
const ButtonRight = styled.button`
	position: relative;
	display: flex;
	border: none;
	color: red;
	font-family: Archivo;
	background-color: transparent;
	cursor: pointer;
	justify-content: flex-end;
	align-items: flex-end;
`;
