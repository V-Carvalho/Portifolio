import { useContext } from "react";
import styled, { useTheme } from "styled-components";

import { links } from "../../utils/Links";
import { ThemeContext } from "../../contexts/ThemeContext";

const StyledSidebar = styled.aside`
  display: flex;
  height: 100vh;
  min-width: 50px;
  padding: 0px 2px;
  flex-direction: column;
  border-right: thin solid ${(props) => props.borderColor};
`;

const BodySidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FooterSidebar = styled.div`
  flex: 0;
  display: flex;
  flex-direction: column;
`;

const SidebarIcon = styled.a`
  width: 100%;
  opacity: 0.5;
  display: flex;
  cursor: pointer;
  padding: 14px 10px;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }
`;

const Sidebar = () => {
  const theme = useTheme();
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <StyledSidebar borderColor={theme.borderColor}>
      <BodySidebar>
        {links[0].map((link) => (
          <SidebarIcon
            key={link.index}
            href={link.url}
            target="_blank"
            title={link.title}
          >
            {link.icon}
          </SidebarIcon>
        ))}
      </BodySidebar>

      <FooterSidebar>
        {links[1].map((link) => (
          <SidebarIcon
            key={link.index}
            title={link.title}
            onClick={link.title == "Tema" ? toggleTheme : null}
          >
            {link.icon}
          </SidebarIcon>
        ))}
      </FooterSidebar>
    </StyledSidebar>
  );
};

export default Sidebar;
