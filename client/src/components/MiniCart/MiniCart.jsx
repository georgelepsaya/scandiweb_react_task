import React, { Component } from 'react';
import styled from 'styled-components';
import Badge from "@material-ui/core/Badge";
import cartIcon from "../../icons/cart_icon.svg";
import classes from "./MiniCart.module.css";
import ReactDOM from "react-dom";
import MiniCartItem from './MiniCartItem';

const CartButton = styled.a`
  display: flex;
  margin-left: 22px;
  cursor: pointer;
`

const MiniCartContainer = styled.div`
  position: relative;
`

const ModalContainer = styled.div`
  position: absolute;
  width: 325px;
  background-color: #fff;
  top: 50px;
  right: -30px;
  z-index: 999;
  padding: 32px 16px;
  overflow-y: scroll;
  height: 677px;
`

const MiniCartHeader = styled.h3`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 32px;
`

const Backdrop = styled.div`
  position: absolute;
  margin-top: 80px;
  top: 0;
  left: 0;
  width: 100%;
  height: 0px;
  z-index: 20;
  background-color: rgba(57, 55, 72, 0.22);
`

const TotalText = styled.p`
  font-weight: 500;
  font-size: 16px;
  font-family: 'Roboto';
`

const TotalAmount = styled.p`
  font-weight: 700;
  font-size: 16px;
`

const TotalContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const ViewBagButton = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 14px;
  min-width: 90px;
  background: #FFFFFF;
  border: 1px solid #1D1F22;
`

const CheckOutButton = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 14px;
  min-width: 90px;
  background: #5ECE7B;
  color: #fff;
`

const portalElement = document.getElementById("overlays");

class MiniCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      scrolled: 0,
    }
  }

  backdropHeight = 0;

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
    this.backdropHeight = document.getElementById("main").scrollHeight;
  }

  handleScroll = () => {
    this.setState({ scrolled: document.scrollingElement.scrollTop });
  }

  toggleOverlay = () => {
    this.setState((prevState) => {
      return {
        showModal: !prevState.showModal,
      }
    })
  }

  render() {
    const products = this.props.data;
    return (
      <MiniCartContainer>
        <CartButton onClick={() => this.toggleOverlay()}>
          <Badge badgeContent={3} color="primary" overlap="rectangular">
            <img src={cartIcon} />
          </Badge>
        </CartButton>
        {this.state.showModal && 
          <>
          {ReactDOM.createPortal(<Backdrop style={{height: `${this.backdropHeight + 230}px`}}/>, portalElement)}
          <ModalContainer className={this.state.scrolled > 75 ? classes.togglePosition : ""}>
            <MiniCartHeader><b>My Bag</b>, 3 items</MiniCartHeader>
            <MiniCartItem product={products[2]} />
            <MiniCartItem product={products[0]} />
            <MiniCartItem product={products[5]} />
            <TotalContainer>
              <TotalText>Total</TotalText>
              <TotalAmount>$200.00</TotalAmount>
            </TotalContainer>
            <ButtonsContainer>
              <ViewBagButton href="/cart">VIEW BAG</ViewBagButton>
              <CheckOutButton href="/checkout">CHECK OUT</CheckOutButton>
            </ButtonsContainer>
          </ModalContainer>
          </>
        }
      </MiniCartContainer>
    )
  }
}

export default MiniCart