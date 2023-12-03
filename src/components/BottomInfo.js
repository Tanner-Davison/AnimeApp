import React from 'react'
import styled from 'styled-components';

const BottomInfo = ({tvType, episodes, rating}) => {
  return (
		<Wrapper>
			<div
				className={"bottom-info-elements"}
				id={"tvType"}>
				<h2> Type </h2>
				<p>{tvType}</p>
			</div>
			<div
				className={"bottom-info-elements"}
				id={"episodes"}>
        	<h2> Episodes </h2>
				<p id={'episodeNumWrapper'}>{episodes}</p>
			</div>
			<div
				className={"bottom-info-elements"}
				id={"rating"}>
				<h2>Rated </h2>
				<p>{rating}</p>
			</div>
		</Wrapper>
	);
}

export default BottomInfo
const Wrapper = styled.div`
position: relative;
display:flex;
width:100%;
color:white;
align-items: center;
justify-content:space-between;
font-family: Archivo;
text-align: center;
margin-bottom:20px;
.bottom-info-elements{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding:0.44rem 1em;
  gap:0.25rem;
  box-sizing: border-box;
  border:1px solid white;
  border-radius:12px;
  margin-top:5%;

}
h2,p{
	margin:.25em;
}
h2{
  font-size: 1.8rem;
}
p{
  font-size:1.3rem;
  color:white;
}
#episodeNumWrapper{
	border-radius: 50px;
	box-sizing: border-box;
	border:2px solid white;
	padding:.2rem .5rem;
}
@media screen and (max-width: 980px) {
  
  
.bottom-info-elements{
  flex-direction:column;
}
h2{
  font-size: 1rem;
  margin: .25em;
}
p{
  font-size:.8rem;
  margin: .25em;
}
}
`;