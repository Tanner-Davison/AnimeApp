import styled from "styled-components";
import { useState, useEffect } from "react";
import React from "react";
import { HipsterButton, DefaultButton } from "./Buttons";
import RightComponent from "./RightComponent";
import BottomInfo from "./BottomInfo";
import getForumData from "../API/getForumData";
import saitamaFaceOnly from "./imgs/saitamaFaceOnly.png";
import CloseIcon from "@mui/icons-material/Close";
import Reviews from "./Reviews";
import FinalSaitama from "./imgs/FinalSaitama.png";
import { getChars } from "../API/getChars";
import Characters from "./Characters";
import { getFullChars } from "../API/getChars";
  const CharacterModal = React.lazy(()=>import('./CharacterModal'));
const AnimeCardComponent = ({ animeData }) => {
  const [showsummary, setShowSummary] = useState(false);
  const title = animeData.title_english || animeData.title;
  const animeImg = animeData.images.jpg.image_url;
  const [loading, setLoading] = useState(false);
  const score = animeData.score;
  const scoredBy = animeData.scored_by;
  const tvType = animeData.type;
  const releasedYear = animeData.year;
  const rating = animeData.rating;
  const [allReviews, setAllReviews] = useState([]);
  const [charsOpen, setCharsOpen] = useState(false);
  const [characterData, setCharacterData] = useState([]);
  const [openReviews, setOpenReviews] = useState(false);
  const [isCharOpen, setIsCharOpen] = useState(false);
  const [fullCharData, setFullCharData] = useState([]);

  const episodes =
    tvType === "TV" || ("Special" && tvType !== null)
      ? animeData.episodes
      : "N/A";
  const YtVideoUrl = animeData.trailer.youtube_id;
  const handleReviews = async () => {
    if (allReviews < 1) {
      setLoading(true);
    }
    if (allReviews < 1) {
      let dataInfo = await getForumData(animeData.mal_id);
      setAllReviews(dataInfo);

      setOpenReviews(!openReviews);
      return setLoading(false);
    } else {
      setOpenReviews(!openReviews);
      setLoading(false);
    }
  };
   const handleGetCharFull = async (animeId) => {
     let response = await getFullChars(animeId);
	 setIsCharOpen(true)
	 setCharsOpen(false)
     if (response) {
       setFullCharData(response);
     } else {
       return console.log("no data on chars given. in Characters component.");
     }
   };
  const handleGetChars = async (animeId) => {
    setLoading(true);

    if (characterData < 1) {
      const response = await getChars(animeId);
      if (response) {
        console.log("working");
        setCharacterData(response);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
    setCharsOpen(!charsOpen);
  };
  return (
    <>
      <CardWrapper
        key={animeData.mal_id + 222}
        showsummary={showsummary ? "true" : "false"}>
        <div className={"card"} key={animeData.mal_id + 32}>
          <h3 id="creative"> {title}</h3>
          <div key={animeData.mal_id + 2322} className={"card-content"}>
            <LeftHeader key={animeData.mal_id + 12223}>
              <img
                src={animeImg}
                alt={"animeImg"}
                loading="lazy"
                onClick={() => setShowSummary(!showsummary)}
              />
              {showsummary ? (
                <DefaultButton
                  key={animeData.mal_id + 443}
                  onClick={() => {
                    setShowSummary(false);
                  }}>
                  Hide summary
                </DefaultButton>
              ) : (
                <HipsterButton
                  key={animeData.mal_id + 940}
                  id={animeData.synopsis === null ? "disabled" : ""}
                  onClick={() => setShowSummary(true)}>
                  Read Summary
                </HipsterButton>
              )}
            </LeftHeader>
            <RightComponent
              key={animeData.mal_id + 323}
              YtVideoUrl={YtVideoUrl}
              episodes={episodes}
              score={score}
              scoredBy={scoredBy}></RightComponent>
            {showsummary && (
              <div
                key={animeData.mal_id + 34322}
                className={
                  showsummary ? "dropDownElement" : "dropDownElement drop"
                }>
                <>
                  <div className={"flex"}>
                    <img
                      id={"synopsisImg"}
                      src={saitamaFaceOnly}
                      alt={"saitamaface"}
                      loading="lazy"
                    />
                    <h3>Synopsis</h3>
                  </div>
                  <article showsummary>
                    {animeData.synopsis !== null
                      ? animeData.synopsis
                      : "Synopsis not available for this title."}
                  </article>
                </>
                <CloseIcon
                  id={"close-icon"}
                  onClick={() => setShowSummary(false)}
                />
              </div>
            )}
          </div>

          <BottomInfo
            key={animeData.mal_id}
            tvType={tvType}
            releasedYear={releasedYear}
            rating={rating}
            episodes={episodes}>
            {" "}
          </BottomInfo>
        </div>
        <BottomHeader>
          <DefaultButton
            isActive={charsOpen === true}
            onClick={() => handleGetChars(animeData.mal_id)}>
            {charsOpen ? "Close Characters" : "View Characters"}
          </DefaultButton>

          <DefaultButton
            isActive={openReviews === true}
            onClick={() => handleReviews()}>
            {openReviews ? "Hide Reviews" : "See Reviews"}
          </DefaultButton>
        </BottomHeader>
        {loading && (
          <Loading>
            <img
              src={FinalSaitama}
              alt={"saitama Flying"}
              id={"loadingSaitama"}
            />
            <StyledH3>. . . Loading </StyledH3>
          </Loading>
        )}
        {openReviews &&
          allReviews.length > 1 &&
          allReviews.map((item) => {
            return <Reviews data={item} />;
          })}
        {charsOpen && (
          <Characters
            handleGetCharFull={handleGetCharFull}
            charData={characterData}
			
          />
        )}
        {isCharOpen && <CharacterModal data={fullCharData} />}
      </CardWrapper>
    </>
  );
};

export default AnimeCardComponent;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin: 1rem auto;
  background: transparent;

  z-index: 1;

  .flex {
    display: flex;
    flex-direction: row;
    padding: 5px;
    align-items: center;
    justify-content: center;
  }
  #synopsisImg {
    width: 112px;
    margin-right: -20px;
    height: 86px;
  }
  #creative {
    position: relative;
    width: fit-content;
    justify-self: flex-end;
    color: white;
    width: 50%;
    font-size: 32px;
    background-color: black;
    border-radius: 17px;
    padding: 1rem;
  }
  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    min-height: 426px;
    min-width: fit-content;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.87);
    gap: 0.025rem;
    width: 50%;
    color: white;
    padding: 1rem 2rem;
    text-align: center;
    border-radius: 17px;
    z-index: 1;
  }
  .card-content {
    position: relative;
    display: flex;
    flex-direction: row;
    min-width: fit-content;
    width: 50%;
    margin: 10px;
    gap: 2vw;
    align-items: center;
    justify-content: space-around;
  }

  .dropDownElement {
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 110%;
    justify-content: center;
    /* right: -32px; */
    /* width: 19%; */
    font-size: 1.5rem;
    bottom: -155px;
    background-color: rgba(0, 0, 0, 0.9);
    height: 110%;
    padding-bottom: 10px;
    text-align: center;
    text-overflow: clip;
    border-radius: 17px;
    animation: slideDown 0.6s forwards;
    z-index: 4;
    ::-webkit-scrollbar {
      display: none;
    }
    h3 {
      color: white;
      align-self: center;
    }
    #close-icon {
      position: absolute;
      top: 5px;
      right: 15px;
      border-radius: 50px;
      box-sizing: border-box;
      border: 2px solid red;
      color: red;
      transition: transform 0.2s ease-in-out;
      cursor: pointer;
    }
    #close-icon:hover {
      transform: scale(1.1);
    }
  }

  .dropDownElement.drop {
    position: absolute;
    animation: slideUp 2s forwards;
  }

  article {
    position: relative;
    display: flex;
    border-radius: 17px;
    padding: 2rem 1rem;
    font-family: "Archivo", sans-serif;
    background-color: snow;
    line-height: 1.9rem;

    color: whitesmoke;
    max-width: 80%;
    background-color: rgba(0, 0, 0, 0.4);
    overflow: hidden;
    overflow-y: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
    transition: height 0.2s ease-out;
    animation: ${({ showsummary }) => showsummary && `slideDown .8s forwards`};
    z-index: -2;
  }
  @keyframes slideDown {
    from {
      transform: translateX(-300%);

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
  @media screen and (max-width: 980px) {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: fit-content;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    margin: 1rem 45px;
    background: transparent;
    width: 70vw;

    z-index: 1;
    .card {
      min-width: 50%;
      width: 68%;
    }
    .card-content {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5%;
      height: fit-content;
      padding-bottom: 10px;
    }
    .dropDownElement {
      position: absolute;
      top: unset;
      left: 1px;
      min-width: 380px;
      max-width: 98%;
      height: 422px;
      bottom: 1px;
    }
    #creative {
      width: unset;
      font-size: 1rem;
      word-break: break-all;
    }
  }
`;
const LeftHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  gap: 25px;
  width: fit-content;
  z-index: 1;
  img {
    position: relative;
    width: 12rem;
    border-radius: 17px;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;

    z-index: -3;
  }
  img:hover {
    transform: scale(1.2);
  }
  #defaultButton {
    z-index: 5;
  }

  @media screen and (max-width: 980px) {
    img {
      width: 12.5rem;
      margin-top: 1.2rem;
    }
  }
`;
const Loading = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
  #loadingSaitama {
    width: 150px;
    height: 120px;
  }
`;
const StyledH3 = styled.h3`
  font-family: Archivo;
  color: white;
`;
const BottomHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
