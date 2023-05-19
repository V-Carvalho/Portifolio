import styled, { useTheme } from "styled-components";
import { linksHome } from "../../utils/Links"

import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import profilePicture from '../../assets/images/profile.png';
import Footer from "../../components/Footer/Footer";

const Main = styled.main`
  width: 100%;
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const ContentMain = styled.section`
  gap: 25px;
  height: 100%;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};

  @media (max-width: 1024px) {
    flex-direction: column-reverse; 
  }

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track-piece {
    -webkit-border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${(props) => props.scrollbarColor};
  }
`;

const ContainerPersonalData = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Name = styled.p`
  display: flex;
  font-weight: bold;
  font-size: clamp(1rem, 2rem + 1vw, 1.5rem);
  color: ${(props) => props.textColor};

  @media (max-width: 768px) {
    font-weight: normal;
  }
`;

const Profession = styled.p`
  display: flex;
  color: ${(props) => props.textColor};
  font-size: clamp(1rem, 0rem + 1vw, 1.5rem);
`;

const SocialMedia = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const ContainerPersonalPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PersonalPhoto = styled.img`
  width: 170px;
  height: 170px;
  display: flex;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 150px;
    height: 150x;
  }
`;

const Home = () => {
  const theme = useTheme();
  const links = linksHome();

  return (
    <Main>
      <Header />
      <ContentMain backgroundColor={theme.secondaryColor}>
        <ContainerPersonalData>
          <Name textColor={theme.textColor}>{"Vinicius Carvalho"}</Name>
          <Profession textColor={theme.textColor}>{"Desenvolvedor Front-end"}</Profession>
          <SocialMedia>
            {links.map((link) => (
              <Icon
                key={link.index}
                href={link.url}
                target={link.target}
                title={link.title}
                icon={link.icon}
                opacity={1}
              /> 
            ))}
          </SocialMedia>
        </ContainerPersonalData>
        <ContainerPersonalPhoto>
          <PersonalPhoto
            src={profilePicture}
            alt="Foto pessoal"
          />
        </ContainerPersonalPhoto>
      </ContentMain>
      <Footer />
    </Main>
  );
};

export default Home;
