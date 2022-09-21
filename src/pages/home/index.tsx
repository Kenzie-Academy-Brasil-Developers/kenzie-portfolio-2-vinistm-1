// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}?tab=repositories`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"70px"}
                height={"70px"}
              />
              <Text color="grey4">Olá, me chamo  {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
            Alguns projetos simples,{" "}
              <Text as="span" type="heading1" color="brand1">
                porém
              </Text>{" "}
              feitos com muito{" "}
              <Text as="span" type="heading1" color="brand1">
                esforço e dedicação,
              </Text>{" "}
              sempre procurando aprender mais e mais !
            </Text>
            <Text type="body1" color="grey2">
            aqui consta alguns projetos que realizei e algumas tecnologias utilizadas.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ir para os Projetos 
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Projetos GitHub
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns dos meus projetos realizados,{" "}
                <Text as="span" color="brand5">
                  estes são projetos para mostrar minha evolução em pelo menos um 1 ano de code !
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
