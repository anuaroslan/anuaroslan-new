"use client";

import styled from "@emotion/styled";
import { Container, Group, Text } from "@mantine/core";
import React from "react";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer size={"lg"}>
        <Text style={{ fontWeight: "bold" }}>anuaroslan</Text>
        <Group gap={40}>
          <Text style={{ fontWeight: "bold" }}>Home</Text>
          <Text style={{ fontWeight: "bold" }}>Work</Text>
          <Text style={{ fontWeight: "bold" }}>Contact</Text>
        </Group>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  background-color: #323232;
  color: #dedede;
  position: fixed;
  top: 0;
  width: 100%;
`;

const HeaderContainer = styled(Container)`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
