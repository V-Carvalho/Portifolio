import styled, { useTheme } from "styled-components";
import { formations } from "../../utils/DataCV";

import Header from "../../components/Header/Header";
import TitlePage from "../../components/TitlePage/TitlePage";
import Topic from "../../components/Topic/Topic";
import Footer from "../../components/Footer/Footer";

const Main = styled.main`
  width: 100%;
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
  margin-bottom: 20px;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor};

  @media (max-width: 1024px) {    
    padding: 0px 20px; 
  }

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track-piece {
    -webkit-border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${(props) => props.scrollbarColor};
  }
`;

const Formations = () => {
  const theme = useTheme();
  const data = formations();

  return (
    <Main>
      <Header />
      <ContentMain
        backgroundColor={theme.secondaryColor}
        scrollbarColor={theme.primaryColor}
      >
        {data.map((formation) => (
          <>
            <TitlePage
              title={formation.title}
              textColor={theme.textColor}
              borderColor={theme.fixedColor}
              icon={formation.icon}
            />
            <Topic
              topics={formation.topics}
              textColor={theme.textColor}
              iconColor={theme.iconPrimaryColor}
              borderColor={theme.borderColor}
              backgroundColorDate={theme.fixedColor}
            />
          </>
        ))}
      </ContentMain>
      <Footer />
    </Main>
  );
};

export default Formations;
