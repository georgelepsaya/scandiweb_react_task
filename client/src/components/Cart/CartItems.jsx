import React, { Component } from 'react';
import CartItem from './CartItem';
import styled from 'styled-components';
import Total from './Total';

class CartItems extends Component {
  render() {
    const product0 = this.props.data.categories[0].products[0];
    const product1 = this.props.data.categories[0].products[3];
    const product2 = this.props.data.categories[0].products[4];
    const product3 = this.props.data.categories[0].products[5];
    return (
      <>
        <CartItem product={product0} />
        <CartItem product={product1} />
        <CartItem product={product2} />
        <CartItem product={product3} />
        <Total />
      </>
    )
  }
}

export default CartItems;