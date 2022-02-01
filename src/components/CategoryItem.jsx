import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    // margin: 5px;
    height: 70vh;
    position: relative;
    padding: 8px;
    // background-color: black; 
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    -moz-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);

    &:hover {
        opacity: 1;
    }

`;

const Info = styled.div`
    position: absolute;
    top: 80%;
    right: 40%;
    // left: 0;
    width: fit-content;

    height: 100%;
    // width: 100%;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;

`;

const Title = styled.h1`
    // color:black;
    margin-bottom: 20px;
    font-weight: 100;
    font-style: normal;
    font-size: 33px;

`;

const Button = styled.button`
    border:none;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid brown;
    padding: 10px;
    padding-inline: 20px;
    background-color: white;
    // color:gray;
    cursor: pointer;
    font-weight: 600;
`;


const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src ={item.img}/>
            <Info>
                {/* <Title>{item.title}</Title> */}
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
