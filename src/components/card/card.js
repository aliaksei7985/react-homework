import React from 'react';
import './card.css';

export default class Card extends React.Component {
    render () {
        return (
        <div className="container">
            <img src="https://flagcdn.com/w320/au.png" class="country__flag"/>
            <h3 className="country__name">
              Australia
            </h3>
            <h4 className="country__capital">
              Canberra
            </h4>
            <p className="country__lang">
              Languages: Eng
            </p>
            <p className="country__currency">
              Australian dollar
            </p>
        </div>
        )
    }
};
