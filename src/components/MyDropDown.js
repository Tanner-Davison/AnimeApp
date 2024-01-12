import { useState } from "react";
import styled from "styled-components";
import { Menu } from "@headlessui/react";

const MyDropDown = () => {
  const [activeLink, setActiveLink] = useState(null); // State to track the active link

  const MyDropDown = ({ children }) => {
    const [activeLink, setActiveLink] = useState(null); // State to track the active link

    const handleItemClick = (item) => {
      setActiveLink(item); // Set the active link when clicked
    };

    const allLinks = ["TV", "Episode", "Ova", "Anime", "Add One More"];

    return (
      <Wrapper>
        <Menu>
          <Menu.Button id={"MenuButton"}>
            {activeLink !== null ? activeLink : "category"}{" "}
          </Menu.Button>
          <Menu.Items>
            {allLinks.map((item) => (
              <Menu.Item key={item}>
                {({ active }) => (
                  <DivItem
                    onClick={() => handleItemClick(item)}
                    active={active || activeLink === item}>
                    <StyledP>{item}</StyledP>
                  </DivItem>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </Wrapper>
    );
  };
};
export default MyDropDown;

const Wrapper = styled.div`
  position: static;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: ARCHIVO;
  width: fit-content;
  #MenuButton {
    background-color: white;
    font-family: Archivo;
  }
`;
const DivItem = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: ${(props) => (props.active ? "purple" : "white")};
`;
const StyledP = styled.p`
  color: white;
  font-family: Archivo;
  margin: unset;
  padding: unset;
`;
