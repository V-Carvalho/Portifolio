import styled, { useTheme } from "styled-components";
import { linksHome } from "../../utils/Links"

import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import profilePicture from '../../assets/images/profile.png';


const Main = styled.main`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentMain = styled.section`
  gap: 25px;
  height: 100%;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
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
  font-size: 35px;
  font-weight: bold;
  color: ${(props) => props.textColor};
`;

const Profession = styled.p`
  display: flex;
  font-size: 15px;
  color: ${(props) => props.textColor};
`;

const SocialMedia = styled.div`
  gap: 25px;
  display: flex;
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
    </Main>
  );
};

export default Home;
