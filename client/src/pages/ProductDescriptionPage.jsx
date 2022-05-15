import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import AttributeSet from '../components/AttributeSet';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`

const GalleryImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 40px;
  object-fit: cover;
  cursor: pointer;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ViewImage = styled.img`
  object-fit: contain;
  max-height: 511px;
  max-width: 610px;
`

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-right: 118px;
`

const ProductName = styled.h2`
  font-weight: 600;
  font-size: 30px;
`

const ProductDescription = styled.div`
  margin-top: 20px;
  &, * {
    font-family: 'Roboto', sans-serif;
  }
`

const PriceTag = styled.h3`
  font-family: 'Roboto', sans-serif !important;
  font-weight: 700;
  font-size: 18px;
  margin-top: 43px;
`

const AddButton = styled.button`
  width: 292px;
  background: rgba(94, 206, 123, 1);
  border: none;
  padding: 16px 32px;
  color: #fff;
  font-family: 'Raleway';
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin: 20px 0;
`

const Price = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 5px;
`

class ProductDescriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: this.product.gallery[0],
      imageIsSelected: true,
    };
  }

  product = this.props.data.find(p => p.id === this.props.params.id);

  imgClickHandler = (pic) => {
    this.setState({showImage: pic});
  }

  render() {
    return (
      <Container>
        <ImagesContainer>
          <GalleryContainer>
            {this.product.gallery.map(pic => {
              return <GalleryImage onClick={() => this.imgClickHandler(pic)} key={Math.floor(Math.random()*1000000).toString()} src={pic} />
            })}
          </GalleryContainer>
          <ViewImage src={this.state.showImage} />
        </ImagesContainer>
        <ProductInfo>
          <ProductName>{this.product.name}</ProductName>
          {this.product.attributes.map(attr => {
            return <AttributeSet key={Math.floor(Math.random()*1000000).toString()} attr={attr} />
          })}
          <PriceTag>PRICE:</PriceTag>
          <Price>${this.product.prices[0].amount}</Price>
          <AddButton>ADD TO CART</AddButton>
          <ProductDescription
            dangerouslySetInnerHTML={{
            __html: this.product.description,
            }}
          ></ProductDescription>
        </ProductInfo>
      </Container>
    )
  }
}

export default withParams(ProductDescriptionPage);