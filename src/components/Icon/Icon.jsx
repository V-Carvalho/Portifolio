import styled from "styled-components";

const StyledIcon = styled.a`
  width: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => props.opacity};

  &:hover {
    opacity: 1;
  }
`;

const Icon = ({ href, target, title, icon, opacity, onClick }) => {
  return <StyledIcon href={href} target={target} title={title} opacity={opacity} onClick={onClick} >
    {icon}
  </StyledIcon>
};

export default Icon;
