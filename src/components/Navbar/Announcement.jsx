import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    display: flex;
    font-weight: 500;
    background-color: teal;
    color: white;
    font-size: 15px;
    align-items: center;
    text-align: center;
    justify-content: center;
`

const Announcement = () => {
    return (
        <Container>
            Free Shipping on all Orders!
        </Container>
    )
}



export default Announcement