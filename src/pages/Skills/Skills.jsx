import styled, { useTheme } from "styled-components";
import { skills } from "../../utils/DataCV";

import Header from "../../components/Header/Header";
import TitlePage from "../../components/TitlePage/TitlePage";
import Topic from "../../components/Topic/Topic";

const Main = styled.main`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentMain = styled.section`
  height: 100%;
  display: flex;
  overflow-y: auto;
  padding: 0px 50px;
  overflow-x: hidden;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor};
`;

const Skills = () => {
  const theme = useTheme();
  const data = skills();

  return (
    <Main>
      <Header />
      <ContentMain backgroundColor={theme.primaryColor}>
        {data.map((skill) => (
          <>
            <TitlePage
              title={skill.title}
              textColor={theme.textColor}
              borderColor={theme.fixedColor}
              icon={skill.icon}
            />
            <Topic
              topics={skill.topics}
              textColor={theme.textColor}
              iconColor={theme.iconPrimaryColor}
              borderColor={theme.borderColor}
              backgroundColorDate={theme.fixedColor}
            />
          </>
        ))}
      </ContentMain>
    </Main>
  );
};

export default Skills;




