import styled from "styled-components";
import ListTopicsCV from "../ListTopicsCV/ListTopicsCV";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
`;

const Header = () => {
  return (
    <StyledHeader>
      <ListTopicsCV
        showBtnClose={true}
        heightTab="35px"
        alignItemsTab="center"
        flexDirectionTab="row"
      />
    </StyledHeader>
  );
};

export default Header;
