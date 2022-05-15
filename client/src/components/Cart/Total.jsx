import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding-top: 32px;
  border-top: 1px solid #E5E5E5;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 5px;
`

const Regular = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
`

const Bold = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
`

const Medium = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`

const OrderButton = styled.button`
  background: #5ECE7B;
  width: 279px;
  height: 43px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  margin-top: 16px;
  cursor: pointer;
`

class Total extends Component {
  render() {
    return (
      <>
        <Container>
          <Col>
            <Regular>Tax 21%:</Regular>
            <Regular>Quantity:</Regular>
            <Medium>Total:</Medium>
          </Col>
          <Col>
            <Bold>$42.00</Bold>
            <Bold>3</Bold>
            <Bold>$200.00</Bold>
          </Col>
        </Container>
        <OrderButton>ORDER</OrderButton>
      </>
    )
  }
}

export default Total