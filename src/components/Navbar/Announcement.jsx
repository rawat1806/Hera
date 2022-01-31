import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    display: flex;
    font-weight: 550;
    background-color: #74605B;
    color: white;
    font-size: 12px;
    word-spacing: 0.2em;
    letter-spacing: 0.2em;
    align-items: center;
    text-align: center;
    justify-content: center;
`

const Announcement = () => {
    return (
        <Container>
            FREE SHIPPING ON ALL ORDERS!
        </Container>
    )
}



export default Announcement