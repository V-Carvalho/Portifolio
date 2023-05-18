import { useContext } from "react";
import { useTheme } from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { VscFiles, VscSourceControl, VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin, BsEnvelopeAtFill, BsTelephoneFill, BsWhatsapp, BsSunFill, BsFillMoonFill, BsGearFill,  BsFileEarmarkArrowDownFill } from "react-icons/bs";

export const linksHome = () => {
  const theme = useTheme();

  return [
    {
      index: 0,
      title: "Github",
      url: "https://github.com/V-Carvalho",
      target: "_blank",
      icon: <VscGithubInverted size={25} color={theme.iconPrimaryColor} />,
    },
    {
      index: 1,
      title: "Linkedin",
      url: "https://www.linkedin.com/in/vinicius-a-carvalho/",
      target: "_blank",
      icon: <BsLinkedin size={25} color={theme.iconPrimaryColor} />,
    },
    {
      index: 2,
      title: "E-mail",
      url: "mailto:vinicius.a.carvalho@outlook.com",
      target: "_blank",
      icon: <BsEnvelopeAtFill size={25} color={theme.iconPrimaryColor} />,
    },
    {
      index: 3,
      title: "Telefone",
      url: "tel:+5511980554113",
      target: "_blank",
      icon: <BsTelephoneFill size={25} color={theme.iconPrimaryColor} />,
    },
    {
      index: 4,
      title: "WhatsApp",
      url: "https://api.whatsapp.com/send?phone=5511980554113&text=Fala%20Vinicius,%20Estou%20entrando%20em%20contato%20através%20do%20seu%20portfólio...",
      target: "_blank",
      icon: <BsWhatsapp size={25} color={theme.iconPrimaryColor} />,
    },
    {
      index: 5,
      title: "Download Currículo",
      url: "",
      target: "_blank",
      icon: (
        <BsFileEarmarkArrowDownFill size={25} color={theme.iconPrimaryColor} />
      ),
    },
  ];
};

export const linksSidebar = () => {
  const theme = useTheme();
  const { isDarkTheme } = useContext(ThemeContext);

  return [
    [
      {
        index: 0,
        title: "Arquivos",
        url: "",
        target: "",
        icon: <VscFiles size={25} color={theme.iconPrimaryColor} />,
      },
      {
        index: 1,
        title: "Repositório",
        url: "https://github.com/V-Carvalho/Portfolio",
        target: "_blank",
        icon: <VscSourceControl size={25} color={theme.iconPrimaryColor} />,
      },
      {
        index: 2,
        title: "Github",
        url: "https://github.com/V-Carvalho",
        target: "_blank",
        icon: <VscGithubInverted size={25} color={theme.iconPrimaryColor} />,
      },
      {
        index: 3,
        title: "Linkedin",
        target: "_blank",
        url: "https://www.linkedin.com/in/vinicius-a-carvalho/",
        icon: <BsLinkedin size={25} color={theme.iconPrimaryColor} />,
      },
      {
        index: 4,
        title: "E-mail",
        target: "_blank",
        url: "mailto:vinicius.a.carvalho@outlook.com",
        icon: <BsEnvelopeAtFill size={25} color={theme.iconPrimaryColor} />,
      },
      {
        index: 5,
        title: "Telefone",
        url: "tel:+5511980554113",
        target: "_blank",
        icon: <BsTelephoneFill size={25} color={theme.iconPrimaryColor} />,
      },
      {
        index: 6,
        title: "WhatsApp",
        target: "_blank",
        url: "https://api.whatsapp.com/send?phone=5511980554113&text=Fala%20Vinicius,%20Estou%20entrando%20em%20contato%20através%20do%20seu%20portfólio...",
        icon: <BsWhatsapp size={25} color={theme.iconPrimaryColor} />,
      },
      {
        index: 7,
        title: "Download Currículo",
        url: "",
        target: "_blank",
        icon: <BsFileEarmarkArrowDownFill size={25} color={theme.iconPrimaryColor} />,
      },
    ],
    [
      {
        index: 0,
        title: "Tema",
        url: "",
        target: "",
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
        target: "",
        icon: <BsGearFill size={25} color={theme.iconPrimaryColor} />,
      },
    ],
  ];
};
