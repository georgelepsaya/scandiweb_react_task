import React, { Component } from 'react';
import vectorIcon from "../icons/vector.svg";
import vectorUp from "../icons/vector_up.svg";
import styled from "styled-components";
import classes from "./Currencies.module.css";

const CurrenciesContainer = styled.div`
  position: relative;
  font-weight: 500;
  font-size: 18px;
`

const Currency = styled.span`
  font-size: 18;
  cursor: pointer;
`

const CurrenciesOptions = styled.div`
  position: absolute;
  top: 40px;
  right: -20px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  z-index: 1000;
`

const Option = styled.div`
  width: 114px;
  height: 45px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  &:hover {
    background: #EEEEEE;
  }
  cursor: pointer;
`

class Currencies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCurr: this.currs[0],
      dropdownCurrs: false,
      scrolled: 0,
    }
  }

  currs = this.props.currs;

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = () => {
    this.setState({ scrolled: document.scrollingElement.scrollTop})
  }

  toggleCurrs = () => {
    this.setState((prevState) => {
      return {
        dropdownCurrs: !prevState.dropdownCurrs,
      }
    })
  }

  changeCurrHandler = (curr) => {
    this.setState({ showCurr: curr });
    this.toggleCurrs();
  }

  render() {
    return (
      <CurrenciesContainer>
        <Currency onClick={() => this.toggleCurrs()}>
          {this.state.showCurr.symbol}
          {this.state.dropdownCurrs ? <img src={vectorUp} style={{ marginLeft: "7px" }} /> : <img src={vectorIcon} style={{ marginLeft: "7px" }} />}
        </Currency>
        {this.state.dropdownCurrs &&
          <CurrenciesOptions className={this.state.scrolled > 70 ? classes.togglePosition : ""}>
            {this.currs.map(curr => {
              return <Option onClick={() => this.changeCurrHandler(curr)} key={curr.label}>{curr.symbol} {curr.label}</Option>
            })}
          </CurrenciesOptions>
        }
      </CurrenciesContainer>
    )
  }
}

export default Currencies