import { Badge } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Logo from "./../../assets/logo_edit.png"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'


const Container = styled.div`
    height: 90px;
    background-color: #FFFFFF;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;

`

const Contact = styled.div`
    height: 30px;
    display: flex;
    font-weight: 400;
    font-size: 12px;
    word-spacing: 0.1em;
    letter-spacing: 0.1em;
    align-items: center;
    text-align: left;
    justify-content: left;
    margin: 0px;
    padding: 0px;
`

const Language = styled.span`
    font-size:14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 2;
    text-align:center;
`

const LogoImg = styled.img`
    margin: 0px;
    align-items: center;
    width: 130px;
    height: 90px;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    display: flex;
    margin: 25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
            <Left>
                <ContactDetails>
                    <Contact>Monday - Saturday</Contact>
                    <Contact>10:00 AM - 06:00 PM (IST)</Contact>
                    <Contact>Call / Whatsapp us +91-8302309447</Contact>
                    
                </ContactDetails>
                {/* <Language>EN</Language> */}
                {/* <SearchContainer>
                    <Input/>
                    <Search style={{color: 'gray', fontSize: "16px"}}/>
                </SearchContainer> */}
            </Left>
            <Center>
                <LogoImg src={Logo} alt={"house of hera logo"}/>
                {/* <LogoText>Gifts</LogoText> */}
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>
                    Sign in
                </MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">

                        <ShoppingCartOutlinedIcon/>
                        </Badge>
                </MenuItem>
            </Right>
            </Wrapper>
        </Container>

    )
}

export default Navbar
