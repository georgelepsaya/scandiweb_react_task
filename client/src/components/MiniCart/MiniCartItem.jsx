import React, { Component } from 'react';
import styled from 'styled-components';
import plusIcon from "../../icons/plus.svg";
import minusIcon from "../../icons/minus.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const View = styled.div`
  height: 190px;
  display: flex;
  flex-direction: row;
`

const Name = styled.h3`
  font-weight: 300;
  font-size: 16px;
`

const Price = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-top: 20px;
`

const AttributeName = styled.h3`
  font-family: 'Roboto', sans-serif !important;
  font-weight: 400;
  font-size: 14px;
  margin-top: 20px;
`

const ItemContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
`

const Item = styled.div`
  min-width: 24px;
  min-height: 24px;
  border: 1px solid #1D1F22;
  box-sizing: border-box;
  margin-right: 8px;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.bg};
  &:last-child {
    margin-right: 0;
  }
`

const ChangeAmount = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ChangeAmountButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #1D1F22;
  width: 24px;
  height: 24px;
  cursor: pointer;
`

const Amount = styled.p`
  font-weight: 500;
  font-size: 16px;
`

const ImgView = styled.img`
  width: 121px;
  height: 190px;
  object-fit: cover;
  margin-left: 13px;
`

const ImgViewWrap = styled.div`
  height: 100%;
  position: relative;
`

class MiniCartItem extends Component {
  product = this.props.product;

  render() {
    const product = this.props.product;
    return (
      <Container >
        <Info>
          <Name>{product.name}</Name>
          <Price>${product.prices[0].amount}</Price>
          {product.attributes.map(attr => {
            return (
              <div key={Math.random()}>
                <AttributeName key={attr.id}>{attr.name.toUpperCase()}:</AttributeName>
                <ItemContainer>
                  {attr.items.map(item => {
                    if (attr.name === "Color") {
                      if (item.value === "#FFFFFF") {
                        return <Item key={item.id} bg={item.value} style={{width: "16px", height: "16px", border: "1px solid #1D1F22"}} />
                      }
                      return <Item key={item.id} bg={item.value} style={{width: "16px", height: "16px", border: "none"}} />
                    }
                    return <Item key={item.id}>{item.value}</Item>
                  })}
                </ItemContainer>
              </div>
            )
          })}
        </Info>
        <View>
          <ChangeAmount>
            <ChangeAmountButton>
              <img src={plusIcon} />
            </ChangeAmountButton>
            <Amount>1</Amount>
            <ChangeAmountButton>
              <img src={minusIcon} />
            </ChangeAmountButton>
          </ChangeAmount>
          <ImgViewWrap>
            <ImgView src={product.gallery[0]} />
          </ImgViewWrap>
        </View>
      </Container>
    )
  }
}

export default MiniCartItem;