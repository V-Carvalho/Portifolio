import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { useTheme }  from "styled-components";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

import ListTopicsCV from "../ListTopicsCV/ListTopicsCV";

const StyledSidemenu = styled.aside`
  width: 220px;
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  padding: 0px 0px 0px 10px;
  border-right: thin solid ${(props) => props.borderColor};
`;

const TitleSidemenu = styled.p`
  /* font-size:  */
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
`;

const TitleFolder = styled.p`
  /* font-size:  */
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
  const theme = useTheme()
  const navigate = useNavigate();

  const [folderIsOpen, setFolderIsOpen] = useState(true);

  const closeFolder = (event) => {
    event.preventDefault();
    navigate("/");

    if (folderIsOpen == true) {
      setFolderIsOpen(false);
    } else {
      setFolderIsOpen(true);
    }
  };

  return (
    <StyledSidemenu borderColor={theme.borderColor}>
      <TitleSidemenu titleColor={theme.titleColor}>{"Explorador"}</TitleSidemenu>

      <ContainerFolder>
        <HeaderFolder backgroundColor={theme.secondaryColor} onClick={closeFolder}>
          <IconTitleFolder>
            {folderIsOpen ? (
              <VscChevronDown size={20} color={theme.iconPrimaryColor} />
            ) : (
              <VscChevronRight size={20} color={theme.iconPrimaryColor} />
            )}
          </IconTitleFolder>
          <TitleFolder textColor={theme.textColor}>{"Home"}</TitleFolder>
        </HeaderFolder>

        <ContentFolder
          displayContentFolder={folderIsOpen ? "flex" : "none"}
        >
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
