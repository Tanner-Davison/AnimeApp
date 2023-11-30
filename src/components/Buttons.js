import styled from "styled-components";


export const DefaultButton = styled.button`
  background-color: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width:150px;
 
`
export const HipsterButton = styled(DefaultButton)`

background:transparent;
color:#645cff;
border: 1px solid #645cff;
`
