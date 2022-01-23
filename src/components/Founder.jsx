import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const ProfileImg = styled.img``;

const ProfileDetails = styled.div``;

const Name = styled.h3``;
const Title = styled.h1``;
const Desc = styled.p``;

const Founder = () => {
  return (
    <Container>
      <Title>Founder's Message</Title>
      <ProfileImg src="" />
      <ProfileDetails>
        <Name>Nishtha Rawat</Name>
      </ProfileDetails>

      <Desc></Desc>
    </Container>
  );
};

export default Founder;
