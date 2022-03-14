import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import cx from "clsx";
import FrontImg from "./../assets/frontimage.jpeg"
import BackImg from "./../assets/backimage.jpeg"

const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  height: 70vh;
  // border: 1px solid red;
  display: flex;
`;

const Left = styled.div`
  padding: 20px;
  flex: 1;
  width: 50%;
  height: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  // border: 1px solid red;
`;

const Title = styled.h1`
  font-weight: 100;
  font-style: normal;
  font-size: 33px;
  text-align: left;
  padding-bottom: 20px;
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 12px;
  word-spacing: 0.1em;
  letter-spacing: 0.1em;
  line-height: 1.6em;
  align-items: center;
  padding-bottom: 10px;

`

const Desc = styled.p`
  margin: auto;
  width: 70%;
  height: 50%;
  
`;

const Button = styled.button`
  border: none;
  background: none;
  text-align: start;
  margin: 0px;
  padding-left: 0px;
  padding-top: 12px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    transform: scale(1.07);
  }
`;

const Right = styled.div`
  // padding: 20px;
  flex: 1;
  width: auto;
  height: 80%;
  margin: auto;
  // border: 1px solid red;
  margin: 15px;
  position: relative;
`;

const FrontImage = styled.img`
  margin: 5px;
  // border: 1px solid red;
  bottom: -8%;
  left: 15%;
  height: 80%;
  width: 40%;
  position: absolute;
  -moz-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
`;

const BackImage = styled.img`
  margin: 5px;
  // border: 1px solid red;
  top: -10%;
  right: 15%;
  height: 80%;
  width: 40%;
  position: absolute;
  -moz-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
`;


const Collection = () => {

  return (
    <Container>
      <Left>
        <Desc>
        <Title>Valentine's Day Collection</Title>
        <Content>Celebrate the entire Valentine's week like a true romantic with our thoughtful gift hampers.
           You are likely to receive a LOT more love and cuddles, by surprising your partner for the entire Valentine's week,
            than those who plan just one surprise on the 14th. </Content>
<Content>
Although love does not necessarily need a specific day to celebrate it,
 Valentine's Day holds a special place in the hearts of many. 
 It is a special day for young couples who are in love. So, for this Valentine's Day, 
 celebrate your Love with the best gifts from Hera, the online store for all your gifting needs.
</Content>
          
          <br />
          <Button>Explore</Button>
        </Desc>
      </Left>
      <Right>
        <BackImage src={FrontImg} />

        <FrontImage src= {BackImg} />
      </Right>
    </Container>
  );
};

export default Collection;
