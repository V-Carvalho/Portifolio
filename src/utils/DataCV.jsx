import { useTheme } from "styled-components";
import { FaUser, FaUserGraduate, FaMedal, FaTools, FaLaptopCode} from "react-icons/fa";

export const aboutMe = () => {
  const theme = useTheme();

  return [
    {
      index: 0,
      title: "Sobre Mim",
      icon: <FaUser size={25} color={theme.iconPrimaryColor} />,
      topics: [
        {
          index: 0,
          title: "",
          conclusionYear: "",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: [
            "• Sou Vinicius Carvalho, um desenvolvedor front-end apaixonado por transformar ideias em realidade. Minha jornada como programador começou há alguns anos com modificações em Apps de terceiros, quando comecei a aprender por conta própria as habilidades necessárias para construir aplicações web e móveis. Desde então, venho aprimorando minhas habilidades em React e outras tecnologias, e transformando minhas ideias em projetos bem-sucedidos.",
            "Apesar de não ter experiência formal no mercado, dediquei-me intensamente ao aprendizado e consegui dominar habilidades essenciais. Meus projetos pessoais e colaborativos são exemplos de minha capacidade de trabalhar de forma independente e em equipe, de identificar e resolver problemas e de construir soluções inovadoras.",
            "Busco oportunidades para contribuir com uma equipe comprometida em um ambiente de trabalho desafiador, para crescer profissionalmente e para continuar a aprimorar minhas habilidades. Meu objetivo é sempre entregar um trabalho de alta qualidade, com atenção aos detalhes e às necessidades do usuário, e construir produtos que gerem impacto positivo na vida das pessoas.",
          ],
        },
      ],
    },
  ];
};

export const formations = () => {
  const theme = useTheme();

  return [
    {
      index: 0,
      title: "Formação / Cursos",
      icon: <FaUserGraduate size={25} color={theme.iconPrimaryColor} />,
      topics: [
        {
          index: 0,
          title: "• Análise e Desenvolvimento de Sistemas",
          conclusionYear: "2015",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["Universidade de Mogi das Cruzes"],
        },
        {
          index: 4,
          title: "• Fundamentos do Suporte Técnico",
          conclusionYear: "2022",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["Google"],
        },
        {
          index: 1,
          title: "• Formação HTML E CSS",
          conclusionYear: "2022",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["Alura"],
        },
        {
          index: 4,
          title: "• Formação em Inovação & Gestão",
          conclusionYear: "2023",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["Alura"],
        },
        {
          index: 4,
          title: "• Organização de Equipes Ágeis",
          conclusionYear: "2023",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["Alura"],
        },
        {
          index: 2,
          title: "• Formação em Front End",
          conclusionYear: "2023",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["Alura"],
        },
        {
          index: 3,
          title: "• Formação React",
          conclusionYear: "2023",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["Alura"],
        },
      ],
    },
  ];
};

export const skills = () => {
  const theme = useTheme();

  return [
    {
      index: 0,
      title: "Habilidades",
      icon: <FaLaptopCode size={25} color={theme.iconPrimaryColor} />,
      topics: [
        {
          index: 0,
          title: "• HTML",
          conclusionYear: "",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: [],
        },
        {
          index: 1,
          title: "• CSS",
          conclusionYear: "",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["Material UI", "Tailwind CSS", "Styled-Components"],
        },

        {
          index: 3,
          title: "• JavaScript",
          conclusionYear: "",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["Vue.js", "React.js", "TypeScript", "Node.js / Express.js"],
        },
        {
          index: 4,
          title: "• Cloud Computing",
          conclusionYear: "",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["AWS", "Azure", "Vercel", "Netlify"],
        },
        {
          index: 6,
          title: "• Banco de dados",
          conclusionYear: "",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["MySQL", "SQLite", "Firebase", "MongoDB"],
        },
        {
          index: 2,
          title: "• GIT",
          conclusionYear: "",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["Github"],
        },
      ],
    },
  ];
};

export const certificates = () => {
  const theme = useTheme();

  return [
    {
      index: 0,
      title: "Certificações",
      icon: <FaMedal size={25} color={theme.iconPrimaryColor} />,
      topics: [
        {
          index: 0,
          title: "• AWS Cloud Practitioner",
          conclusionYear: "2022",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: [
            "A certificação oferece uma compreensão dos conceitos, serviços e terminologia da Nuvem AWS.",
          ],
        },
        {
          index: 1,
          title: "• AZ-900: Fundamentos do Microsoft Azure",
          conclusionYear: "2023",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: [
            "A certificação busca uma compreensão sobre conceitos da nuvem, arquitetura, serviços do Azure e gerenciamento e governança do Azure",
          ],
        },
      ],
    },
  ];
};

export const projects = () => {
  const theme = useTheme();

  return [
    {
      index: 0,
      title: "Projetos",
      icon: <FaTools size={25} color={theme.iconPrimaryColor} />,
      topics: [
        {
          index: 0,
          title: "• Apeperia",
          conclusionYear: "",
          urlCover:
            "https://netopaiva.github.io/challenge-portfolio/assets/imagens/tela_apeperia.png",
          urlRepository: "",
          urlDeploy: "",
          details: [],
        },

        {
          index: 0,
          title: "• Alura Flix",
          conclusionYear: "",
          urlCover:
            "https://user-images.githubusercontent.com/34304319/238975290-d45704db-2556-4d2b-82da-b7c73457960b.png",
          urlRepository: "https://github.com/V-Carvalho/Alura-FLix",
          urlDeploy: "https://alura-flix.netlify.app/",
          details: ["Plataforma de Streaming"],
        },
        {
          index: 0,
          title: "• Decodificador",
          conclusionYear: "",
          urlCover:
            "https://user-images.githubusercontent.com/34304319/238976901-7ef7b5b4-108f-46ff-b081-67080029882a.png",
          urlRepository: "https://github.com/V-Carvalho/Decodificador",
          urlDeploy: "https://v-carvalho.github.io/Decodificador/",
          details: ["Codificador/Decodificador de Texto"],
        },
        {
          index: 0,
          title: "• Organo",
          conclusionYear: "",
          urlCover:
            "https://user-images.githubusercontent.com/34304319/231551276-364871aa-52c6-4ccc-b790-4fda5e685397.gif",
          urlRepository: "https://github.com/V-Carvalho/Organo-Alura",
          urlDeploy: "https://organo.up.railway.app/",
          details: ["Gerenciamento de Equipes"],
        },

        {
          index: 0,
          title: "• See Monitoramento",
          conclusionYear: "",
          urlCover:
            "https://user-images.githubusercontent.com/34304319/238974370-c97eb5ba-f4a1-40fc-86e8-2a4837817ca7.png",
          urlRepository: "https://github.com/V-Carvalho/SEE-Monitoramento",
          urlDeploy: "https://see-monitoring.web.app/",
          details: ["Software de Monitoramento de Alarmes"],
        },
      ],
    },
  ];
};
