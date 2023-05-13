import { useContext } from "react";
import styled, { useTheme } from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { VscFiles, VscSourceControl, VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin, BsEnvelopeAtFill, BsTelephoneFill, BsWhatsapp, BsSunFill, BsFillMoonFill, BsGearFill,  BsFileEarmarkArrowDownFill } from "react-icons/bs";

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
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const links = [
    [
      {
        index: 0,
        title: "",
        url: "",
        icon: <VscFiles size={25} color={theme.iconPrimaryColor} />,
      },
      {
        index: 1,
        title: "Repositório",
        url: "https://github.com/V-Carvalho/Portfolio",
        icon: <VscSourceControl size={25} color={theme.iconPrimaryColor} />,
      },
      {
        index: 2,
        title: "Github",
        url: "https://github.com/V-Carvalho",
        icon: <VscGithubInverted size={25} color={theme.iconPrimaryColor} />,
      },
      {
        index: 3,
        title: "Linkedin",
        url: "https://www.linkedin.com/in/vinicius-a-carvalho/",
        icon: <BsLinkedin size={25} color={theme.iconPrimaryColor} />,
      },
      {
        index: 4,
        title: "E-mail",
        url: "mailto:vinicius.a.carvalho@outlook.com",
        icon: <BsEnvelopeAtFill size={25} color={theme.iconPrimaryColor} />,
      },
      {
        index: 5,
        title: "Telefone",
        url: "tel:+5511980554113",
        icon: <BsTelephoneFill size={25} color={theme.iconPrimaryColor} />,
      },
      {
        index: 6,
        title: "WhatsApp",
        url: "https://api.whatsapp.com/send?phone=5511980554113&text=Fala%20Vinicius,%20Estou%20entrando%20em%20contato%20através%20do%20seu%20portfólio...",
        icon: <BsWhatsapp size={25} color={theme.iconPrimaryColor} />,
      },
      {
        index: 7,
        title: "Download Currículo",
        url: "",
        icon: (
          <BsFileEarmarkArrowDownFill
            size={25}
            color={theme.iconPrimaryColor}
          />
        ),
      },
    ],
    [
      {
        index: 0,
        title: "Tema",
        url: "",
        icon: isDarkTheme ? (
          <BsSunFill size={25} color={theme.iconPrimaryColor} />
        ) : (
          <BsFillMoonFill size={25} color={theme.iconPrimaryColor} />
        ),
      },
      {
        index: 1,
        title: "Configurações",
        url: "",
        icon: <BsGearFill size={25} color={theme.iconPrimaryColor} />,
      },
    ],
  ];

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
