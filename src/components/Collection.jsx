import React from "react";
import styled from "styled-components";
import CollectionImage from "./../assets/collection_front.jpeg"

const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  height: 70vh;
//   border: 1px solid red;
  display: flex;
`;

const Left = styled.div`
  padding: 20px;
  flex: 2;
  width: 50%;
  height: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
//   border: 1px solid red;
`;

const Title = styled.h1``;

const Desc = styled.p``;

const Button = styled.button`
    border: none;
    background: none;
    text-align: start;
    margin: 0px;
    padding: 0px;
    cursor: pointer;
`;

const Right = styled.div`
  padding: 20px;
  flex: 1;
  width: 50%;
  height: 70%;
  margin: auto;
  display: flex;
//   border: 1px solid red;
  margin: 10px;
  position: relative;
  
`;

const FrontImage = styled.img`
    margin: 5px;
    // border: 1px solid red;
    height: 80%;
    width: 40%;
    bottom: 0px;
    left: 0px;
    position: absolute;
    z-index: 2;
`

const BackImage = styled.img`
    margin: 5px;
    // border: 1px solid red;
    top: 0px;
    right: 0px; 
    height: 80%;
    width: 40%;
    position: absolute;
`


const Collection = () => {
  return (
    <Container>
        
      <Left>
        <Title>Left</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo ex
          similique recusandae, accusantium consequatur officia sint assumenda
          dolore dolorem inventore veritatis tempora minima reprehenderit fugiat
          repudiandae nulla aliquid earum?
        </Desc>
        <Button>Explore</Button>
      </Left>
      <Right>
          <FrontImage src={CollectionImage}/>
            <BackImage src={CollectionImage}/>
      </Right>
      
    </Container>
  );
};

export default Collection;
