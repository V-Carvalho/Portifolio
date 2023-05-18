import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Formations from "./pages/Formations/Formations";
import Certificates from "./pages/Certificates/Certificates";

import Sidebar from "./components/Sidebar/Sidebar";
import Sidemenu from "./components/Sidemenu/Sidemenu";

import { ThemeContext } from "../src/contexts/ThemeContext";
import { SidemenuProvider } from "./contexts/SidemenuContext";

function App() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <SidemenuProvider>
          <Sidebar />
          <Sidemenu />
        </SidemenuProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
