import { useState, useEffect } from "react";
import React from "react";
import ColorPickerComponent from "./components/ColorPicker";
import styled, { ThemeProvider } from "styled-components";
import BasicTitle from "./components/BasicTitle";
import getSearchData from "./API/getSearchData";
import SearchContainer from "./components/SearchContainer";
import AnimeFinal from "./components/imgs/AnimeFinal.png";
import PageTurner from "./components/PageTurner";
import onePunchManPointingUp from "./components/imgs/onePunchManPointingUp.jpg";
import onePunchPointingDown from "./components/imgs/onePunchPointingDown.png";
import saitamaHanging from "./components/imgs/saitamaHanging.png";
import { ArrowButton } from "./components/Buttons";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import standingSaitama from "./components/imgs/standingSaitama.webp";
import smallOnePunch from "./components/imgs/smallOnePunch.png";
import CopOutHeader from "./components/CopOutHeader";
import gsap from "gsap";
import { StyleSheetManager } from "styled-components";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
const MainPage = React.lazy(() => import("./components/MainPage"));

const AnimeCardComponent = React.lazy(() =>
  import("./components/AnimeCardComponent")
);
const DarkTheme = {
  color: "white",
};

gsap.registerPlugin(ScrollToPlugin);
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [pageData, setPageData] = useState("");
  const [scrollFunc, setScrollFunc] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [scrollText, setScrollText] = useState("");
  const [loading, setLoading] = useState(false);
  const [pickedcolor, setPickedColor] = useState("black");
  const [isColorToolOpen, setIsColorToolOpen] = useState(false);
  const [currentSelection, setCurrentSelection] = useState("");

  const handleSelection = (e) => {
    console.log("running selection");

    setCurrentSelection(e.target.value);
  };
  const handleScroll = () => {
    const wrappered = document.getElementById("wrapper");
    gsap.to(wrappered, {
      duration: 2,
      scrollTo: { y: "#topPageCounter", offsetY: -500 },
      ease: "back.out",
    });
  };

  const scrollToBottom = () => {
    const wrappered = document.getElementById("wrapper");
    gsap.to(wrappered, {
      duration: 2,
      scrollTo: { y: "#bottomElement", offsetY: 900 },
      ease: "power4.out",
    });
  };
  const handleSettingsClick = () => {
    return setIsColorToolOpen(!isColorToolOpen);
  };

  const handleColorChange = (color) => {
    setPickedColor(color);
  };

  const handleOnMouseOver = () => {
    setScrollText("scroll");
    return setOpenNav(true);
  };

  const handleOnMouseLeave = () => {
    setOpenNav(false);
    setScrollText("");
  };

  const handleSearch = async (pageOption) => {
    setScrollFunc(true);
    let filterBy = currentSelection;
    let pageQuery = null;
    if (pageOption) {
      pageQuery = pageOption;
    }
    if (searchQuery.trim() !== "") {
      setLoading(true);
      try {
        const searchData = await getSearchData({
          searchQuery,
          pageQuery,
          filterBy,
        });
        setSearchResult(searchData.response);
        setPageData(searchData.pageData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.error("Search query is empty");
    }
  };

  useEffect(() => {
    console.log(pageData);
    if (scrollFunc === true) {
      console.log("this is running working");
      handleScroll();
      setScrollFunc(false);
    }
    //eslint-disable-next-line
  }, [pageData, scrollFunc]);
  return (
    <>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "pickedcolor"}>
        <ThemeProvider theme={DarkTheme}>
          <Wrapper id="wrapper" pickedcolor={pickedcolor}>
            <HeaderWrapper>
              <Header id={"headerId"} className={"header"}>
                <BasicTitle>Search For Any Anime </BasicTitle>

                <SearchContainer
                  searchQuery={searchQuery}
                  onSearch={() => handleSearch()}
                  onQueryChange={(query) => setSearchQuery(query)}
                  onSettingsClick={handleSettingsClick}
                  loading={loading}
                  pageData={searchResult}
                  currentSelection={currentSelection}
                  handleSelection={handleSelection}
                />
                {isColorToolOpen && (
                  <ColorPickerComponent
                    onColorChange={handleColorChange}
                    onSettingsClick={handleSettingsClick}
                    colorToolOpen={isColorToolOpen}
                  />
                )}
              </Header>
            </HeaderWrapper>
            {!searchResult && <MainPage></MainPage>}
            {searchResult && (
              <CopOutHeader id={"TopPageCounter"} pageData={pageData} />
            )}
			
            {searchResult !== "" &&
              searchResult.map((result) => {
                if (result.rating !== "Rx - Hentai") {
                  return (
                    <React.Suspense
                      key={result.mal_id + 3}
                      fallback={<div> Loading...</div>}>
                      <AnimeCardComponent
                        key={result.mal_id}
                        animeData={result}
                        scrollToTop={handleScroll}
                        setScrollFunc={setScrollFunc}
                        scrollFunc={scrollFunc}
                      />
                    </React.Suspense>
                  );
                } else return "";
              })}
            <div id="bottomElement"></div>
            {searchResult && (
              <PageTurner
                pageData={pageData}
                handleSearch={handleSearch}
                searchQuery={searchQuery}
                onNextPage={() => {
                  handleSearch(pageData.current_page + 1);
                }}
                setScrollFunc={setScrollFunc}
                onPageClick={handleSearch}
                onPrevPage={() => {
                  handleSearch(pageData.current_page - 1);
                }}></PageTurner>
            )}

            <ArrowButton
              type="button"
              id={"arrow"}
              onMouseOver={() => handleOnMouseOver()}
              onMouseLeave={() => handleOnMouseLeave()}>
              {
                <>
                  {}
                  <span id={"scrollText"}>{scrollText}</span>
                  <NavigateNextIcon />
                  {openNav && (
                    <NavPage>
                      <button
                        className={"pageGuides up"}
                        onClick={() => {
                          setScrollFunc(true);
                        }}>
                        <p>Scroll</p>
                        <img
                          id={"pointing-up"}
                          src={onePunchManPointingUp}
                          alt={"saitama anime pointing up"}
                        />
                        <p> Up</p>
                      </button>
                      <button
                        className={"pageGuides down"}
                        onClick={() => {
                          scrollToBottom();
                        }}>
                        <p>Scroll</p>
                        <img
                          id={"pointing-down"}
                          src={onePunchPointingDown}
                          alt={"saitama anime pointing down"}
                        />
                        <p> Down</p>
                      </button>
                    </NavPage>
                  )}
                </>
              }
            </ArrowButton>
          </Wrapper>
        </ThemeProvider>
      </StyleSheetManager>
    </>
  );
}

export default App;
const Wrapper = styled.div`
  position: relative;
  height: 99vh;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 99vw;
 
  background: url(${standingSaitama}) left top 20px,
    url(${standingSaitama}) right top;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: ${({ pickedcolor }) =>
    pickedcolor !== "" ? pickedcolor : "white"};
  z-index: 139;
  #bottom-element {
    position: absolute;
    bottom: 5%;
  }
  #scrollText {
    font-family: Archivo;
    font-size: 1.3em;
    transform: rotate(270deg);
    margin: 0px;
  }

  &::-webkit-scrollbar {
    position: relative;
    width: 60px;
    overflow: visible;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    height: 100px;
  }
  /* scrollbar itself */
  &::-webkit-scrollbar-thumb {
    height: 100px;
    background-color: transparent;
    background-image: url(${saitamaHanging}) !important;
    background-size: contain;
    background-position: start;
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 16px;
  }
  @media screen and (max-width: 980px) {
    background: url(${standingSaitama}) left bottom,
      url(${smallOnePunch}) right bottom;
    background-repeat: no-repeat;
    background-size: 50%;
    background-color: ${({ pickedcolor }) =>
      pickedcolor !== "" ? pickedcolor : "white"};
    &::-webkit-scrollbar {
      position: absolute;
      width: 45px;
    }
  }
`;
const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0px;
  width: 50vw;
  min-width: fit-content;
  height: auto;
  border-radius: 18px;
  margin: 1rem auto;
  background-image: url(${AnimeFinal});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1rem;
  z-index: 100;
`;
const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  width: 53vw;
  margin: 1rem auto;
  align-items: center;
  justify-content: center;
  border-radius: 29px;
  min-width: fit-content;
  background-color: rgb(39 38 39 / 80%);
  z-index: 200;
  animation: slideRight 0.5s linear backwards;
  @keyframes slideRight {
    from {
      transform: translateY(300%);
    }
    to {
      transform: translateY(0);
    }
  }
  @media screen and (max-width: 980px) {
    width: 100vw;
  }
`;

const NavPage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100px;
  align-items: center;
  justify-content: space-evenly;
  bottom: 0px;
  left: 0px;
  background: transparent;
  z-index: 150;
  gap: 10px;
  p {
    font-family: Archivo;
    font-size: 1em;
    margin: 0px;
  }
  .pageGuides {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    color: white;
    width: 100px;
    padding: 10px;
    border-radius: 18px;
    background-color: rgba(0, 0, 0, 0.7);
    box-sizing: border-box;
    border: 3px solid snow;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    overflow: hidden;
    animation: slideInFromLeft 0.7s 1;
    @keyframes slideInFromLeft {
      from {
        transform: translateX(-300%);
      }
      to {
        transform: translateX(0);
      }
    }
  }
  .pageGuides:hover {
    transform: scale(1.2);
  }

  #pointing-down {
    position: relative;
    height: 80px;
    width: 110px;
  }
  #pointing-up {
    position: relative;
    height: 80px;
    width: 80px;
  }
  @media screen and (max-width: 980px) {
    width: unset;

    #pointing-down {
      height: 40px;
      width: 50px;
    }
    #pointing-up {
      height: 40px;
      width: 40px;
    }
  }
`;
