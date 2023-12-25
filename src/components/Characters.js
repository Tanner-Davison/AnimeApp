import {useState, useEffect} from 'react'
import styled from 'styled-components';
const Characters = ({ charData }) => {
    useEffect(() => {
        if (charData) {
            console.log(charData)
     }
    },[charData])
  return (
      <Wrapper>
          {charData.map((img) => {
              const charName = img.character.name;
              const imgUrl = img.character.images.webp.image_url;
              const backUpImg = img.character.images.jpg.small_image_url;
              const role = img.role;
            
              return (
								<ImageWrapper>
									<StyledImg
										key={img.character.mal_id}
										src={imgUrl}
										alt={"character face"}
									/>
									<StyledName>{imgUrl || backUpImg ? charName : ""}</StyledName>
									<StyledRole>
										<em> {role} </em>
									</StyledRole>
								</ImageWrapper>
							);
          })}
         
              
        
    </Wrapper>
  )
}

export default Characters

const Wrapper = styled.div`
position: relative;
display:flex;
text-align: center;
flex-direction: row;
width:80vw;
flex-wrap:wrap;
overflow-x:wrap;
justify-content: center;
gap:20px;
background-color: rgba(0,0,0,0.9);
padding:15px;
border-radius: 15px;
`;
const ImageWrapper = styled.div`
position: relative;
align-items: center;
justify-content: center;
text-align: center;
`
const StyledName = styled.h3`
font-family: Archivo;
color:white;
margin-bottom:unset;

`
const StyledImg = styled.img`
height: 100px;
width:100px;
transition:transform .4s ease-in-out;
&:hover{
    transform:scale(1.1);
    cursor: pointer;
}
`
const StyledRole = styled.p`
font-family:Archivo;
margin:unset;
color:white;
font-size: .5em;
`