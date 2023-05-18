import { createContext, useState } from "react";

export const SidemenuContext = createContext({});

export const SidemenuProvider = ({ children }) => {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(true);

  const closeSidemenu = (event) => {
    event.preventDefault();
    setSideMenuIsOpen(sideMenuIsOpen ? false : true);
  };

  return (
    <SidemenuContext.Provider value={{ sideMenuIsOpen, closeSidemenu }}>
      {children}
    </SidemenuContext.Provider>
  );  
}
