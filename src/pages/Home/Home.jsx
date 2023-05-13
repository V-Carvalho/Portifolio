import styled, { useTheme } from "styled-components";
import Header from "../../components/Header/Header";

const Main = styled.main`
  flex: 3; // mudar p/ 1
  display: flex;
  flex-direction: column;
`;

const ContentMain = styled.section`
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};

  color: whitesmoke;
`; 

const Home = () => {
  const theme = useTheme();

  return (
    <Main >
      <Header />
      <ContentMain backgroundColor={theme.secondaryColor}>
        <h1 color={theme.textColor}>Home</h1>
      </ContentMain>
    </Main>
  );
};

export default Home;

