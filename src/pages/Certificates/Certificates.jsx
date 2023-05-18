import styled, { useTheme } from "styled-components";
import { certificates } from "../../utils/DataCV";

import Header from "../../components/Header/Header";
import TitlePage from "../../components/TitlePage/TitlePage";
import Topic from "../../components/Topic/Topic";
import Footer from "../../components/Footer/Footer";

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
  margin-bottom: 20px;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor};


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

const Certificates = () => {
  const theme = useTheme();
  const data = certificates();

  return (
    <Main>
      <Header />
      <ContentMain
        backgroundColor={theme.secondaryColor}
        scrollbarColor={theme.primaryColor}
      >
        {data.map((certificate) => (
          <>
            <TitlePage
              title={certificate.title}
              textColor={theme.textColor}
              borderColor={theme.fixedColor}
              icon={certificate.icon}
            />
            <Topic
              topics={certificate.topics}
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

export default Certificates;
