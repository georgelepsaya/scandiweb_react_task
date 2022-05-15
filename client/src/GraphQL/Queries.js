import { gql } from "@apollo/client";

export const GET_DATA = gql`
  query MainPageQuery {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          items {
            displayValue
            value
            id
          }
          name
          type
        }
        prices {
          amount
          currency {
            label
            symbol
          }
        }
      }
    }
    currencies {
      label
      symbol
    }
  }
`;
