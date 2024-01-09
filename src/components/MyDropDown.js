import { useState } from "react";
import styled from "styled-components";
import { Menu } from "@headlessui/react";
const MyDropDown = ({children}) => {
  const [activeLink, setActiveLink] = useState(null); // State to track the active link

  const handleItemClick = (item) => {
    setActiveLink(item); // Set the active link when clicked
  };

  const allLinks = ["TV", "Episode", "Ova", "Anime"];

  return (
    <Wrapper>
      <Menu>
<<<<<<< HEAD
        <Menu.Button id={"MenuButton"}> {children} </Menu.Button>
=======
        <Menu.Button id={"MenuButton"}>{activeLink !== null ? activeLink : 'category'} </Menu.Button>
>>>>>>> e06d60c84b9e8e3d406de4dd1994a20559ba4af6
        <Menu.Items>
          {allLinks.map((item) => (
            <Menu.Item key={item}>
              {({ active }) => (
                <DivItem
                  onClick={() => handleItemClick(item)}
                  active={active || activeLink === item}
                >
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
  width:100%;
  background-color: ${({ active }) => (active ? "purple" : "white")};
`;
const StyledP = styled.p`
  color: white;
  font-family: Archivo;
  margin: unset;
  padding: unset;
`;
