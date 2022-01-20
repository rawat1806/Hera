import { Badge } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
// import Logo from "./../assets/hera_logo.png"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
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
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color: 'gray', fontSize: "16px"}}/>
                </SearchContainer>
            </Left>
            <Center>
                <img src={"./"} alt={"house of hera logo"}/>
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
