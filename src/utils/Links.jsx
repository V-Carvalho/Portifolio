import { VscFiles, VscSourceControl, VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin, BsEnvelopeAtFill, BsTelephoneFill, BsWhatsapp, BsSunFill, BsFillMoonFill, BsGearFill, BsFileEarmarkArrowDownFill } from "react-icons/bs";

export const links = [
  [
    {
      index: 0,
      title: "",
      url: "",
      icon: <VscFiles size={25} color="#e8e8e8" />,
    },
    {
      index: 1,
      title: "Repositório",
      url: "https://github.com/V-Carvalho/Portfolio",
      icon: <VscSourceControl size={25} color="#e8e8e8" />,
    },
    {
      index: 2,
      title: "Github",
      url: "https://github.com/V-Carvalho",
      icon: <VscGithubInverted size={25} color="#e8e8e8" />,
    },
    {
      index: 3,
      title: "Linkedin",
      url: "https://www.linkedin.com/in/vinicius-a-carvalho/",
      icon: <BsLinkedin size={25} color="#e8e8e8" />,
    },
    {
      index: 4,
      title: "E-mail",
      url: "mailto:vinicius.a.carvalho@outlook.com",
      icon: <BsEnvelopeAtFill size={25} color="#e8e8e8" />,
    },
    {
      index: 5,
      title: "Telefone",
      url: "tel:+5511980554113",
      icon: <BsTelephoneFill size={25} color="#e8e8e8" />,
    },
    {
      index: 6,
      title: "WhatsApp",
      url: "https://api.whatsapp.com/send?phone=5511980554113&text=Fala%20Vinicius,%20Estou%20entrando%20em%20contato%20através%20do%20seu%20portfólio...",
      icon: <BsWhatsapp size={25} color="#e8e8e8" />,
    },
    {
      index: 7,
      title: "Download Currículo",
      url: "https://drive.google.com/uc?id=1IeTvHpmTIJiBNU2UhJ4vsekrp-dj5b0G&authuser=0&export=download",
      icon: <BsFileEarmarkArrowDownFill size={25} color="#e8e8e8" />,
    },
  ],
  [
    {
      index: 0,
      title: "Tema",
      url: "",
      icon: <BsFillMoonFill size={25} color="#e8e8e8" />,
    },
    {
      index: 1,
      title: "Configurações",
      url: "",
      icon: <BsGearFill size={25} color="#e8e8e8" />,
    },
  ],
];
