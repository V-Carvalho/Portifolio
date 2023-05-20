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
          title: "• São Paulo - SP, Brasil",
          conclusionYear: "",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: [
            "Sou Vinicius Carvalho, um desenvolvedor front-end apaixonado por transformar ideias em realidade. Minha jornada como programador começou há alguns anos com modificações em Apps de terceiros, quando comecei a aprender por conta própria as habilidades necessárias para construir aplicações web e móveis. Desde então, venho aprimorando minhas habilidades em React e outras tecnologias, e transformando minhas ideias em projetos bem-sucedidos.",
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
      title: "Formação",
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
          index: 1,
          title: "• Fundamentos do Suporte Técnico",
          conclusionYear: "2022",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["Google"],
        },
        {
          index: 2,
          title: "• Formação HTML E CSS",
          conclusionYear: "2022",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["Alura"],
        },
        {
          index: 3,
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
          index: 5,
          title: "• Formação em Front End",
          conclusionYear: "2023",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["Alura"],
        },
        {
          index: 6,
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
          index: 2,
          title: "• JavaScript",
          conclusionYear: "",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["Vue.js", "React.js", "TypeScript", "Node.js / Express.js"],
        },
        {
          index: 3,
          title: "• Cloud Computing",
          conclusionYear: "",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["AWS", "Azure", "Vercel", "Netlify"],
        },
        {
          index: 4,
          title: "• Banco de dados",
          conclusionYear: "",
          urlCover: "",
          urlRepository: "",
          urlDeploy: "",
          details: ["MySQL", "SQLite", "Firebase", "MongoDB"],
        },
        {
          index: 5,
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
          title: "• Blog Pessoal",
          conclusionYear: "",
          urlCover:
            "https://user-images.githubusercontent.com/34304319/239554005-bd68b05a-ad7c-4257-8bfd-95ee99691530.png",
          urlRepository: "https://github.com/V-Carvalho/Blog-Pessoal",
          urlDeploy: "https://eu-blogueiro.netlify.app/",
          details: ["Eu Blogueiro!"],
        },        
        {
          index: 1,
          title: "• Apeperia",
          conclusionYear: "",
          urlCover:
            "https://user-images.githubusercontent.com/34304319/239532442-04088c10-99d5-4423-a877-6e634e434c91.png",
          urlRepository: "https://github.com/V-Carvalho/Apeperia",
          urlDeploy: "https://my-apeperia.netlify.app/",
          details: ["Landing Page"],
        },
        {
          index: 2,
          title: "• Fruta e Fruto",
          conclusionYear: "",
          urlCover:
            "https://user-images.githubusercontent.com/34304319/239520580-84fb7dc1-b4f8-460e-8733-911fa01a91d9.png",
          urlRepository: "https://github.com/V-Carvalho/Fruta-E-Fruto",
          urlDeploy: "https://fruit-and-fruit.netlify.app/",
          details: ["Receitas para economizar e ganhar saúde!"],
        },
        {
          index: 3,
          title: "• Alura Flix",
          conclusionYear: "",
          urlCover:
            "https://user-images.githubusercontent.com/34304319/238975290-d45704db-2556-4d2b-82da-b7c73457960b.png",
          urlRepository: "https://github.com/V-Carvalho/Alura-FLix",
          urlDeploy: "https://alura-flix.netlify.app/",
          details: ["Plataforma de Streaming"],
        },
        {
          index: 4,
          title: "• Decodificador",
          conclusionYear: "",
          urlCover:
            "https://user-images.githubusercontent.com/34304319/238976901-7ef7b5b4-108f-46ff-b081-67080029882a.png",
          urlRepository: "https://github.com/V-Carvalho/Decodificador",
          urlDeploy: "https://v-carvalho.github.io/Decodificador/",
          details: ["Codificador/Decodificador de Texto"],
        },
        {
          index: 5,
          title: "• Jogo da Memória",
          conclusionYear: "",
          urlCover:
            "https://user-images.githubusercontent.com/34304319/239390325-12b8eef5-543e-4364-bea1-2dc1b80c1600.png",
          urlRepository: "https://github.com/V-Carvalho/Jogo-Da-Memoria",
          urlDeploy: "https://memory-game-rick-morty.netlify.app/",
          details: ["Game Cards"],
        },
        {
          index: 6,
          title: "• Organo",
          conclusionYear: "",
          urlCover:
            "https://user-images.githubusercontent.com/34304319/239330166-4b790792-ccec-4c9c-8a9e-7231f6d5e42e.png",
          urlRepository: "https://github.com/V-Carvalho/Organo-Alura",
          urlDeploy: "https://organo.up.railway.app/",
          details: ["Gerenciamento de Equipes"],
        },
        {
          index: 7,
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
