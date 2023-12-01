import styled from "styled-components";
import { useState } from "react";
import React from "react";
import ComplexTitle from "./components/ComplexTitle";
import { HipsterButton, DefaultButton } from "./components/Buttons";

const AnimeCardComponent = ({ animeData}) => {
  console.log(animeData);
  const [showSummary, setShowSummary] = useState(false);
  const title = animeData.title;
  const animeImg = animeData.images.jpg.image_url;

  
  return (
    <CardWrapper showSummary={showSummary}>
      <div className={"card"}>
        <LeftHeader>
      <ComplexTitle title={title} />
        <img src={animeImg} alt={"animeImg"} />
        
          {showSummary ? (
            <DefaultButton
              onClick={() => {
                setShowSummary(false);
              }}>
              Hide summary
            </DefaultButton>
          ) : (
            <HipsterButton onClick={() => setShowSummary(true)}>
             Read Summary
            </HipsterButton>
          )}
         </LeftHeader>
        
          </div>
            <div className={showSummary ? "dropDownElement" : "dropDownElement drop"} >
            
            
              <article showSummary>{animeData.synopsis}</article>
              </div>
         <div>
      </div>
    </CardWrapper>
  );
};

export default AnimeCardComponent;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  background-color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem auto;
  background: transparent;
  width: 63vw;
  height: ${({ showSummary }) => showSummary && "fit-content"};
  z-index: 150;

  img {
    width: 8rem;
    border-radius: 17px;
  }

  .card {
    position: relative;
    display: flex;
    align-items: flex-start;
    background-color: black;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.87);
    gap: 1rem;
    width: 55vw;
    padding: 1rem;
    text-align: center;
    border-radius: 17px;
  }

  .dropDownElement {
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    left: 49%;
    top:4%;
    bottom:15%;
    max-width: 30%;
    max-height: 85%;
    height: fit-content;
    text-align: center;
    overflow-y: scroll !important;
    background: snow;
    text-overflow: clip;
    border-radius: 17px;
    overflow: hidden;
    animation:  slideDown 0.2s forwards;
  }
  .dropDownElement::-webkit-scrollbar {
    display: none;
  }
  .dropDownElement.drop {
    position: absolute;
    animation: slideUp 2s forwards;
  }

  article {
    position: relative;
    display: flex;
    padding: 2rem 0;
    font-family: "Archivo", sans-serif;
    background-color: snow;
    line-height: 1.3rem;
    color: black;
    max-width: 80%;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    transition: height 0.2s ease-out;
    animation: ${({ showSummary }) => showSummary && "slideDown .5s forwards"};
  }
  article::-webkit-scrollbar {
    display: none;
  }

  @keyframes slideDown {
    from {
      transform: translateX(-150%);

      width: 100%;
    }
    to {
      transform: translateX(0);

      width: 100%;
    }
  }

  @keyframes slideUp {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-1000%);
    }
  }
`;
const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  width: 45%;
`;
