import styled from "styled-components";
import { BiGitBranch } from "react-icons/bi";
import { VscRemote, VscError, VscWarning, VscBell, VscFeedback, VscCheck } from "react-icons/vsc"; 


const StyledFooter = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20px;
  display: flex;
  position: fixed;
  flex-direction: row;
  background-color: ${(props) => props.backgrounColor};
`;

const ContainerIcon = styled.div`
  gap: 2px;
  display: flex;
  cursor: pointer;
  padding: 0px 8px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  flex: ${(props) => props.flex};
  background-color: ${(props) => props.backgrounColor};
  color: #E8E8E8;

  &:hover {
    opacity: 0.7;
  }
`;

const Footer = () => {
  const itemsFooter = [
    { id: 0, icon: <VscRemote size={15} />, text: "", flex: 0, backgrounColor: "#2E8961" },
    { id: 1, icon: <BiGitBranch size={15} />, text: "main", flex: 0, backgrounColor: "" },
    { id: 2, icon: <VscError size={15} />, text: "0", flex: 0, backgrounColor: "" },
    { id: 3, icon: <VscWarning size={15} />, text: "0", flex: 1, backgrounColor: "" },
    { id: 4, icon: <VscCheck size={15} />, text: "", flex: 0, backgrounColor: "" },
    { id: 5, icon: <VscFeedback size={15} />, text: "", flex: 0, backgrounColor: "" },
    { id: 6, icon: <VscBell size={15} />, text: "", flex: 0, backgrounColor: "" },
  ];

  return <StyledFooter backgrounColor={"#3279CB"}>
    {itemsFooter.map((item) => (
      <ContainerIcon key={item.id} flex={item.flex} backgrounColor={item.backgrounColor}>
        {item.icon}
        {item.text}
      </ContainerIcon>
    ))}
  </StyledFooter>;
};

export default Footer;
