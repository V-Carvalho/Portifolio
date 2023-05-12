import styled from "styled-components";
import Header from "../../components/Header/Header";

const Main = styled.main`
  flex: 3; // mudar p/ 1
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;

  color:whitesmoke;
`;

const Overview = () => {
  return (
    <Main>
      <Header />
      <h1>Overview</h1>
    </Main>
  );
};

export default Overview;
