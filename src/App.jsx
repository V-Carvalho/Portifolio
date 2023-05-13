import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Overview from "./pages/Overview/Overview";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Certificates from "./pages/Certificates/Certificates";

import Sidebar from "./components/Sidebar/Sidebar";
import Sidemenu from "./components/Sidemenu/Sidemenu";

import {ThemeContext} from "../src/contexts/ThemeContext";

function App() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Sidebar />
        <Sidemenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
