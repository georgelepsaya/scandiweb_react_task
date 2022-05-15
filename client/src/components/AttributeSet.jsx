import React, { Component } from 'react';
import styled from 'styled-components';

const AttributeName = styled.h3`
  font-family: 'Roboto', sans-serif !important;
  font-weight: 700;
  font-size: 18px;
  margin-top: 43px;
`

const ItemContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
`

const Item = styled.div`
  height: 45px;
  width: 63px;
  border: 1px solid #1D1F22;
  box-sizing: border-box;
  margin-right: 12px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.bg};
`

class AttributeSet extends Component {
  render() {
    const items = this.props.attr.items;
    return (
      <>
        <AttributeName key={this.props.attr.id}>{this.props.attr.name.toUpperCase()}:</AttributeName>
        <ItemContainer>
          {items.map(item => {
            if (this.props.attr.name === "Color") {
              if (item.value === "#FFFFFF") {
                return <Item key={item.id} bg={item.value} style={{width: "32px", height: "32px", border: "1px solid #1D1F22"}} />
              }
              return <Item key={item.id} bg={item.value} style={{width: "32px", height: "32px", border: "none"}} />
            }
            return <Item key={item.id}>{item.value}</Item>
          })}
        </ItemContainer>
      </>
    )
  }
}

export default AttributeSet