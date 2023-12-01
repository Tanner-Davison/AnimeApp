import styled from "styled-components";
import { useState } from "react";
import React from "react";
import ComplexTitle from "./components/ComplexTitle";
import { HipsterButton, DefaultButton } from "./components/Buttons";

const AnimeCardComponent = ({ animeData }) => {
  console.log(animeData);
  const [showSummary, setShowSummary] = useState(false);
  const title = animeData.title;
  const animeImg = animeData.images.jpg.image_url;

  return (
    <CardWrapper showSummary={showSummary}>
      <ComplexTitle title={title} />
      <div className={"card"}>
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
              Show Summary
            </HipsterButton>
          )}
            <div className="dropDownElement" >
            {showSummary &&
              <article showSummary>{animeData.synopsis}</article>
            }
              </div>
        
      </div>
      <div></div>
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
  background: transparent;
  width: 100vw;

  height: auto;
  z-index: 150;

  img {
    width: 8rem;
  }

  .card {
    position: relative;
    display: flex;
    align-items: flex-start;
    background-color: black;
    flex-direction: column;
    gap: 1rem;
    width: 55vw;
    max-height: ${({ showSummary }) => (showSummary ? "fit-content" : "500px")};
    padding: 1rem;
    text-align: center;
    border-radius:17px;
    transition: max-height 1s ease-in-out;
    animation: slideDown 1s 1;
  }

  .dropDownElement {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: scroll;
    width: 100%;
    background: snow;
    margin-top: 10px;
    text-overflow: clip;
    border-radius: 17px;
    transition: max-height 1s ease-in-out;
    overflow: hidden;
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
    transition: height 0.4s ease-out;
    animation: ${({ showSummary }) =>
      showSummary ? "slideDown .5s forwards" : "slideUp 1s forwards"};
  }
  article::-webkit-scrollbar {
    display: none;
  }

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;
