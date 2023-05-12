import { useContext } from "react";

import styled from "styled-components";

import Header from "../../components/Header/Header";
import {ThemeContext} from "../../contexts/ThemeContext";

const Main = styled.main`
  flex: 4; // mudar p/ 1
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  color:whitesmoke;
`;

const Home = () => {

  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <Main>
      <Header />
      <h1>Home - {theme}</h1>
      <button onClick={toggleTheme}>Toggle</button>

    </Main>
  );
};

export default Home;
