import styled from "styled-components";
import { VscGithubInverted, VscGlobe } from "react-icons/vsc";

const ContainerTopic = styled.div`
  flex: 0;
  width: 100%;
  display: flex;
  padding-bottom: 4px;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 40px 0px 40px;
`;

const ContainerTitle = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Date = styled.p`
  display: flex;
  padding: 2px 8px;
  border-radius: 8px;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backgroundColorDate};
`;

const Title = styled.p`
  display: flex;
  font-weight: bold;
  padding-bottom: 4px;
  color: ${(props) => props.textColor};
`;

const ContainerItems = styled.div`
  flex: 1;
  gap: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0px 0px 0px 10px;
`;

const Item = styled.p`
  display: flex;
  color: ${(props) => props.textColor};
`;

const CardProject = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  margin: 5px 0px 0px 10px;
`;

const ImgProject = styled.img`
  width: 500px;
  height: 250px;
  display: flex;
  border-radius: 5px;
`;

const ContainerBtnShowProject = styled.div`
  gap: 25px;
  display: flex;
  flex-direction: row;
`;

const BtnShowProject = styled.a`
  flex: 1;
  gap: 10px;
  display: flex;
  cursor: pointer;
  padding: 10px 0px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.textColor};
  border: thin solid ${(props) => props.borderColor};

  &:hover {
    transform: scale(1.1);
  }
`;

const Topic = ({ topics, textColor, iconColor, borderColor, backgroundColorDate}) => {
  return (
    <>
      {topics.map((topic) => (
        <ContainerTopic>
          <ContainerTitle>
            <Title textColor={textColor}>{topic.title}</Title>
            {topic.conclusionYear ? (
              <Date textColor={textColor} backgroundColorDate={backgroundColorDate}>
                {topic.conclusionYear}
              </Date>
            ) : (
              ""
            )}
          </ContainerTitle>

          <ContainerItems>
            {topic.details.map((item) => (
              <Item textColor={textColor}>{item}</Item>
            ))}
          </ContainerItems>

          {topic.urlCover ? (
            <CardProject>
              <ImgProject src={topic.urlCover} alt="imagem do projeto" />
              <ContainerBtnShowProject>
                <BtnShowProject href={topic.urlRepository} target="_blank" textColor={textColor} borderColor={borderColor}>
                  <VscGithubInverted color={iconColor} size={20} />
                  {"Repositório"}
                </BtnShowProject>

                <BtnShowProject href={topic.urlDeploy} target="_blank" textColor={textColor} borderColor={borderColor} >
                  <VscGlobe color={iconColor} size={20} /> 
                  {"Visualizar"}
                </BtnShowProject>
              </ContainerBtnShowProject>
            </CardProject>
          ) : (
            ""
          )}
        </ContainerTopic>
      ))}
    </>
  );
};

export default Topic;
