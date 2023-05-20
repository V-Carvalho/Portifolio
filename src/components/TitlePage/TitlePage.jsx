import styled from "styled-components";

const ContainerTitle = styled.div`
  flex: 0;
  width: 100%;
  display: flex;
  padding: 15px 0px;
  align-items: center;
  flex-direction: row;
  margin: 20px 0px 0px 0px;
  border-bottom: thin solid ${(props) => props.borderColor};

  @media (max-width: 768px) {
    margin: 10px 0px 0px 0px;
  }
`;

const Title = styled.h1`
  display: flex;
  margin: 0px 15px;
  font-weight: bold;
  color: ${(props) => props.textColor};
`;

const TitleTopic = ({ title, textColor, borderColor, icon }) => {
  return (
    <ContainerTitle borderColor={borderColor}>
      {icon}
      <Title textColor={textColor}>{title}</Title>
    </ContainerTitle>
  );
};

export default TitleTopic;
