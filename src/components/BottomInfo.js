import React from 'react'
import styled from 'styled-components';

const BottomInfo = ({tvType, episodes, rating}) => {
  return (
		<Wrapper>
			<div
				className={"bottom-info-elements"}
				id={"tvType"}>
				<h2> Type : </h2>
				<p>{tvType}</p>
			</div>
			<div
				className={"bottom-info-elements"}
				id={"episodes"}>
        <h2> Episodes : </h2>
				<p>{episodes}</p>
			</div>
			<div
				className={"bottom-info-elements"}
				id={"rating"}>
				<h2>Rated: </h2>
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
.bottom-info-elements{
  display:flex;
  align-items: center;
  justify-content:center;
  padding:0.25rem;
  gap:0.25rem;
}
h2{
  font-size: 1.5rem;
}
p{
  font-size:1rem;
  color:white;
}
@media screen and (max-width: 980px) {
  
  padding-top:30px;
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