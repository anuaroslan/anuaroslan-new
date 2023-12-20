"use client";

import React from "react";
import styled from "@emotion/styled";
import { Container, Divider, Group, Text } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <FooterWrapper>
      <Divider color="#696969" />
      <FooterContainer size={"lg"}>
        <Text>
          Made by <span style={{ color: "#ECECEC" }}>Anuar Roslan</span>
          {" - "}
          Copyright 2023
        </Text>
        <Group gap={40}>
          <IconBrandWhatsapp />
          <IconBrandLinkedin />
          <IconBrandInstagram />
        </Group>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  background-color: #292929;
`;

const FooterContainer = styled(Container)`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #959595;
`;
