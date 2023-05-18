import { useContext } from "react";
import { linksSidebar } from "../../utils/Links"
import styled, { useTheme } from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";

import Icon from "../../components/Icon/Icon";

const StyledSidebar = styled.aside`
  display: flex;
  min-width: 50px;
  padding: 25px 2px;
  margin-bottom: 20px;
  flex-direction: column;
  height: calc(100vh -30px);
  border-right: thin solid ${(props) => props.borderColor};

`;

const BodySidebar = styled.div`
  flex: 1;
  gap: 25px;
  display: flex;
  flex-direction: column;
`;

const FooterSidebar = styled.div`
  flex: 0;
  gap: 25px;
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => {
  const theme = useTheme();  
  const links = linksSidebar();
  const { toggleTheme } = useContext(ThemeContext); 

  return (
    <StyledSidebar borderColor={theme.borderColor}>
      <BodySidebar>
        {links[0].map((link) => (
          <Icon
            key={link.index}
            href={link.url}
            target={link.target}
            title={link.title}
            icon={link.icon}
            opacity={0.5}
          />
        ))}
      </BodySidebar>

      <FooterSidebar>
        {links[1].map((link) => (
          <Icon
            key={link.index}
            title={link.title}
            icon={link.icon}
            opacity={0.5}
            onClick={link.title == "Tema" ? toggleTheme : null}
          />            
        ))}
      </FooterSidebar>
    </StyledSidebar>
  );
};

export default Sidebar;
