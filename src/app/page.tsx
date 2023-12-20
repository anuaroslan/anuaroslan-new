"use client";

import {
  Button,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Image,
  Grid,
  Center,
} from "@mantine/core";

import styled from "@emotion/styled";
import {
  IconArrowDown,
  IconArrowDownTail,
  IconMail,
  IconRecordMail,
} from "@tabler/icons-react";
import ProfileImage from "../../public/images/portrait.jpg";
import FeatureImage from "../../public/images/featured-img.png";
import VisualImage from "../../public/images/visual-exploration-img.png";
import RealeasesIMAGE from "../../public/images/releases-img.png";
import anuar1 from "../../public/images/anuar-1.jpeg";
import anuar2 from "../../public/images/anuar-2.jpg";
import anuar3 from "../../public/images/anuar-3.jpg";
import anuar4 from "../../public/images/anuar-4.jpg";
import show1 from "../../public/images/show-1.jpg";
import show2 from "../../public/images/show-2.jpg";
import show3 from "../../public/images/show-3.png";
import show4 from "../../public/images/show-4.jpg";
import show5 from "../../public/images/show-5.jpg";
import show6 from "../../public/images/show-6.jpg";
import release1 from "../../public/images/release-1.png";
import release2 from "../../public/images/release-2.jpg";
import release3 from "../../public/images/release-3.png";
import NextImage from "next/image";

export default function Home() {
  return (
    <MainWrapper>
      <HeroSection>
        <Container size={"lg"}>
          <Grid justify="center" align="center">
            <Grid.Col span={8}>
              <Title
                style={{
                  color: "#dedede",
                  fontWeight: "bold",
                  fontSize: 64,
                  lineHeight: "70px",
                }}
                mb={20}
              >
                Hi, I am Anuar Roslan A DJ & Music Producer based in Kuala
                Lumpur.
              </Title>
              <Text style={{ color: "#959595", fontSize: 24 }} mb={60}>
                Anuar Roslan has always pushed his unique blend of Hip Hop / R&B
                / Soul / Afro, sounding ways to infuse his take on these
                evergreen genres.
              </Text>
              <Button color="grey" size="lg">
                <IconMail size={20} />
                <Text ml={10} size="md">
                  anuaroslan@gmail.com
                </Text>
              </Button>
            </Grid.Col>
            <Grid.Col span={4}>
              <Image
                component={NextImage}
                src={ProfileImage}
                w={400}
                h={400}
                radius={6666}
                alt={""}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </HeroSection>
      <FeaturedWorkSection>
        <Container size={"lg"}>
          <Group mb={60}>
            <IconArrowDown color="#DEDEDE" />
            <Text style={{ color: "#959595", fontWeight: "bold" }}>
              FEATURED WORK
            </Text>
          </Group>
          <Group justify="space-between">
            <Stack mb={180} gap={30}>
              <Image
                component={NextImage}
                src={anuar1}
                w={542}
                h={888}
                alt={""}
              />
              <Image
                component={NextImage}
                src={anuar2}
                w={542}
                h={888}
                alt={""}
              />
            </Stack>
            <Stack gap={30}>
              <Image
                component={NextImage}
                src={anuar3}
                w={542}
                h={888}
                alt={""}
              />
              <Image
                component={NextImage}
                src={anuar4}
                w={542}
                h={888}
                alt={""}
              />
            </Stack>
          </Group>
        </Container>
      </FeaturedWorkSection>
      <VisualExplorationSection>
        <Container size={"lg"}>
          <Group justify="center" mb={60} mt={100}>
            <Text
              style={{ color: "#DEDEDE", fontWeight: "bold", fontSize: 36 }}
            >
              Shows
            </Text>
          </Group>
          <SimpleGrid cols={3}>
            <Image
              component={NextImage}
              src={show1}
              w={350}
              h={350}
              alt={""}
              radius={"sm"}
            />
            <Image
              component={NextImage}
              src={show2}
              w={350}
              h={350}
              alt={""}
              radius={"sm"}
            />
            <Image
              component={NextImage}
              src={show3}
              w={350}
              h={350}
              alt={""}
              radius={"sm"}
            />
            <Image
              component={NextImage}
              src={show4}
              w={350}
              h={350}
              alt={""}
              radius={"sm"}
            />
            <Image
              component={NextImage}
              src={show5}
              w={350}
              h={350}
              alt={""}
              radius={"sm"}
            />
            <Image
              component={NextImage}
              src={show6}
              w={350}
              h={350}
              alt={""}
              radius={"sm"}
            />
          </SimpleGrid>
        </Container>
      </VisualExplorationSection>
      <ReleasesSection>
        <Container size={"lg"}>
          <Group justify="center" mb={60} mt={150}>
            <Text
              style={{ color: "#DEDEDE", fontWeight: "bold", fontSize: 36 }}
            >
              Releases
            </Text>
          </Group>
          <SimpleGrid cols={3}>
            <Image
              component={NextImage}
              src={release1}
              w={350}
              h={560}
              alt={""}
              radius={"sm"}
            />
            <Image
              component={NextImage}
              src={release2}
              w={350}
              h={560}
              alt={""}
              radius={"sm"}
            />
            <Image
              component={NextImage}
              src={release3}
              w={350}
              h={560}
              alt={""}
              radius={"sm"}
            />
          </SimpleGrid>
        </Container>
      </ReleasesSection>
      <ContactSection>
        <Container size={"lg"}>
          <Stack justify="center" align="center" gap={10} mt={200} mb={120}>
            <Title
              style={{
                color: "#dedede",
                fontWeight: "bold",
                fontSize: 36,
              }}
              mb={20}
            >
              Contact Me
            </Title>
            <Text
              style={{
                color: "#959595",
                fontSize: 24,
                width: "60%",
                textAlign: "center",
              }}
              mb={40}
            >
              If you are looking to hire, I’m currently available for freelance
              work
            </Text>
            <Button color="grey" size="lg">
              <IconMail size={20} />
              <Text ml={10} size="md">
                anuaroslan@gmail.com
              </Text>
            </Button>
          </Stack>
        </Container>
      </ContactSection>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  background-color: #292929;
`;

const HeroSection = styled.div`
  background-color: #292929;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const FeaturedWorkSection = styled.div`
  background-color: #292929;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const VisualExplorationSection = styled.div`
  background-color: #292929;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ReleasesSection = styled.div`
  background-color: #292929;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContactSection = styled.div`
  background-color: #292929;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
