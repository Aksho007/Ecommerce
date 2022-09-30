import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';

const Container = styled.div`
      height: 60px;

`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-item: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-item: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-item: center;
    margin-left: 25px;
    padding: 3px;
`;


const Input = styled.input`
    border: none;
`


const Center = styled.div`
    flex:1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    font-size: 12px;
    display: flex;
    align-item: center;
    flex-direction: column;
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-item: center;
    justify-content: flex-end;
    
`;

const MenuItem = styled.div`
      font-size: 14px;
      cursor: pointer;
      margin-left: 25px;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
            <Input/>
            <Search style = {{color:"gray", fontSize:20}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            SHOPIFY.
          </Logo>
          </Center>
        <Right>
          <MenuItem>RESISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
              <Badge badgeContent={8} color="primary">
                <ShoppingCartOutlinedIcon/>
              </Badge>
          
          </MenuItem>
        </Right>
      </Wrapper>

    </Container>
  )
}

export default Navbar