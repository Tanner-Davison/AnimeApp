import { useEffect } from "react";
import styled from "styled-components";

const CharacterModal = ({ data }) => {
  const content = data.data;
  const title = content.name;
  const characterImg = content.images.webp.image_url;
  const kanjiName = content.name_kanji;
  const about = content.about;
  const nickNames = content.nicknames;
 
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SecondaryTitle>{kanjiName}</SecondaryTitle>
      <StyledImg src={characterImg} alt={"Character"} />
      <ContentWrapper>
        <Heading>About {title}</Heading>
        <StyledParagraph>{about}</StyledParagraph>
      </ContentWrapper>

      <NickNameWrapper>
        <Heading>- Nicknames -</Heading>
        <NickNameRow>
          {nickNames &&
            nickNames.map((nickname) => {
              return (
                <StyledNickName id={"nickname"}>{nickname},</StyledNickName>
              );
            })}
        </NickNameRow>
      </NickNameWrapper>
    </Wrapper>
  );
};

export default CharacterModal;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  height: auto;
  background-color: black;
  text-align: center;
  border-radius: 15px;
  padding: 50px 50px 0px 50px;
`;
const Title = styled.h1`
  font-family: Archivo;
  color: white;
  margin-bottom: unset;
`;
const SecondaryTitle = styled.h3`
  font-family: Archivo;
  color: gold;
  margin-top: 3px;
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  box-shadow: 0px -50px 220px gainsboro;
`;
const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  padding:25px;
`;
const StyledParagraph = styled.p`
  font-family: Archivo;
  color: #cccccc;
  line-height: 1.3em;
  word-spacing: .2em;
  margin-bottom:unset;
 
`;
const StyledNickName = styled.p`
  font-family: Archivo;
  color: lightsalmon;
  line-height: 1.3em;
  word-spacing: 0.2em;
  margin-bottom: unset;
`;
const Heading = styled.h3`
font-family:Archivo;
color:white;
margin-bottom:5px;
margin-top:25px;
`;
const NickNameWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: auto;
  
`;
const NickNameRow = styled.div`
display:flex;
flex-direction: row;
gap:5px;
`