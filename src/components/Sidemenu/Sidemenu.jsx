import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

import ListTopicsCV from "../ListTopicsCV/ListTopicsCV";

import { SidemenuContext } from "../../contexts/SidemenuContext";

const StyledSidemenu = styled.aside`
  width: 220px;
  padding: 0px 4px;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 20px);
  display: ${(props) => props.display};
  border-right: thin solid ${(props) => props.borderColor};

  @media (max-width: 1024px) {
    width: 145px;
    padding: 0px;  
  }
`;

const TitleSidemenu = styled.p`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.titleColor};
`;

const ContainerFolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const HeaderFolder = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
`;

const TitleFolder = styled.p`
  width: 100%;
  display: flex;
  cursor: pointer;
  color: ${(props) => props.textColor};
`;

const IconTitleFolder = styled.div`
  display: flex;
  margin: 0px 5px;
`;

const ContentFolder = styled.div`
  width: 100%;
  display: ${(props) => props.displayContentFolder};
`;

const Sidemenu = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { sideMenuIsOpen } = useContext(SidemenuContext);

  const [folderIsOpen, setFolderIsOpen] = useState(true);

  const closeFolder = (event) => {
    navigate("/");
    event.preventDefault();
    setFolderIsOpen(folderIsOpen ? false : true);
  };

  return (
    <StyledSidemenu
      display={sideMenuIsOpen ? "flex" : "none"}
      borderColor={theme.borderColor}
    >
      <TitleSidemenu titleColor={theme.textColor}>{"Explorador"}</TitleSidemenu>

      <ContainerFolder>
        <HeaderFolder
          backgroundColor={theme.secondaryColor}
          onClick={closeFolder}
        >
          <IconTitleFolder>
            {folderIsOpen ? (
              <VscChevronDown size={20} color={theme.iconPrimaryColor} />
            ) : (
              <VscChevronRight size={20} color={theme.iconPrimaryColor} />
            )}
          </IconTitleFolder>
          <TitleFolder textColor={theme.textColor}>{"Home"}</TitleFolder>
        </HeaderFolder>

        <ContentFolder displayContentFolder={folderIsOpen ? "flex" : "none"}>
          <ListTopicsCV
            showBtnClose={false}
            heightTab="30px"
            borderColorTab="none"
            alignItemsTab="flex-start"
            flexDirectionTab="column"
          />
        </ContentFolder>
      </ContainerFolder>
    </StyledSidemenu>
  );
};

export default Sidemenu;
