import './card.css';
import React from 'react';
import InputValue from '../InputValue/InputValue';

export default class Card extends React.Component {
  render() {
    return (
        <div className="container">
            <img src={this.props.data.flags} className="country__flag"/>
            <h3 className="country__name">
              {this.props.data.name}
            </h3>
            <h4 className="country__capital">
              {this.props.data.capital}
            </h4>
            <p className="country__lang">
              Languages: {this.props.data.languages}
            </p>
            <p className="country__currency">
              {this.props.data.currencies}
            </p>
            <InputValue />
        </div>
    )
  }
  
};
