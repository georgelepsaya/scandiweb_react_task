import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import brandIcon from "../icons/brand_icon.svg";
import classes from "./Navbar.module.css";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import Currencies from './Currencies';
import MiniCart from './MiniCart/MiniCart';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1D1F22'
    }
  }
});

const Container = styled.div`
  height: 80px;
  background-color: #fff;
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  padding: 0px 101px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
`

const Left = styled.div`
  flex: 1;
  height: 100%;
  align-items: center;
  display: flex;
`
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const MenuItem = styled.div`
  font-size: 16px;
  height: 100%;
  display: flex;
  width: 97px;
  align-items: center;
  cursor: pointer;
`

export class Navbar extends Component {
  render() {
    const pages = this.props.data.categories;
    const currencies = this.props.data.currencies;
    return (
      <MuiThemeProvider theme={theme}>
        <Container>
          <Wrapper>
            <Left>
              {pages.map(page => {
                return (
                  <MenuItem key={page.name}>
                    <NavLink className={classes.navlink} to={`/${page.name}`} style={({ isActive }) => ({
                      color: isActive ? '#5ECE7B' : '#000',
                      fontWeight: isActive ? 600 : 400,
                      borderBottom: isActive ? "2px solid #5ECE7B" : "",
                      transition: "all 100ms",
                    })}>
                      {page.name}
                    </NavLink>
                  </MenuItem>
                )
              })}
            </Left>
            <Center>
              <img src={brandIcon} />
            </Center>
            <Right>
              <Currencies currs={currencies} />
              <MiniCart data={this.props.data.categories[0].products} />
            </Right>
          </Wrapper>
        </Container>
      </MuiThemeProvider>
    )
  }
}

export default Navbar