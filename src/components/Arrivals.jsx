import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "styled-components";
import { popularProducts } from "../data";
import { useState } from "react";
import Product from "./Product";

const Section = styled.div`
    // border: 1px solid red;
    height: 70vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const Container = styled.div`

//   border: 1px solid red;
  height: 100%;
  padding: 20px;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
//   border: 1px solid red;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Title = styled.h1`
  font-size: 70px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 10px;
  align-items: center;
  margin-right: 10%;
  margin-left: 10%;
  padding-bottom: 20px;
  text-align: center;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Arrivals = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Section>
      <Title>New Arrivals</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nam quod
        modi possimus perspiciatis at omnis nulla dolore delectus iure.
        Consectetur, assumenda sit tenetur placeat est odit officia repudiandae
        porro?
      </Description>
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
    </Section>
  );
};

export default Arrivals;
