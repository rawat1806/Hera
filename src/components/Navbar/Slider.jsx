import React from 'react'
import styled from 'styled-components'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {sliderItems} from './../../data'
import { useState } from "react";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;

`

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
    left: ${props => props.direction === 'left' && "10px"};
    right: ${props => props.direction === 'right' && "10px"};
    margin: auto; 
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${ (props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative
    // background-color: #F2E5E1;
`

const ImgContainer = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: -1;

`
const Image = styled.img`
    width: 100vw;
    height: 100vh;

`
const InfoContainer = styled.div`
    position: absolute;
    z-index: 2;

`

const Title = styled.h1`
    font-size: 70px; 
    color: white;
`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 3px;
    color: white;
`

const Button = styled.button`

    paddingL 10px;
    font-size: 20px;
    background-color: transparent; 
    cursor: pointer; 
    color: white;

`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {


        if(direction === 'left'){
            setSlideIndex(slideIndex> 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick("left")}>
                <KeyboardArrowLeftIcon/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
             <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}

            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick("right")}>
                <KeyboardArrowRightIcon/>
            </Arrow>
        </Container>
    )
}

export default Slider
