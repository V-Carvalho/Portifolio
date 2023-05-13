import styled from "styled-components";
import Header from "../../components/Header/Header";

const Main = styled.main`
  flex: 4; // mudar p/ 1
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  color:whitesmoke;
`;

const Home = () => {
  return (
    <Main>
      <Header />
      <h1>Home</h1>
    </Main>
  );
};

export default Home;
