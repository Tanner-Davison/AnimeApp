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
background:transparent;
color:#645cff;
outline: 1px solid #645cff;
&:hover{
  transform: scale(1.1)
}
transition: transform .4s ease;

`
