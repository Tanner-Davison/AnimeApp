import styled from "styled-components";

export const DefaultButton = styled.button`
	background-color: #645cff;
	color: #fff;
	font-weight: 700;
	border: none;
	border-radius: 0.25rem;
	text-transform: capitalize;
	padding: 0.25rem;
	display: block;
	width: 150px;
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
	}
	transition: transform 0.4s ease;
`;
export const HipsterButton = styled(DefaultButton)`
	background: transparent;
	color: #645cff;
	outline: 1px solid #645cff;
	&:hover {
		transform: scale(1.1);
	}
	transition: transform 0.4s ease;
`;
export const ArrowButton = styled.div`
	position: sticky;
  display: flex;
	justify-self:flex-start;
  align-self:flex-start;
  align-items: center;
  justify-content: center;
	width: 24px;
  min-height: 300px;
  bottom:50%;
  left:0px;
  color:white;
  border:none;
  border-radius:25px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
	background-color: rgba(0,0,0,0.4);
  z-index: 150;
  cursor: pointer;
  transition:  .4s ease-out;
  &:hover{
    cursor: unset;
    position: sticky;
    width: 190px;
  
  }

`;
