import './card.css';
import { useState } from 'react';

export default function Card(props) {
  const [count, setCount] = useState(0);

    return (
        <div className="container">
            <img src={props.data.flags} className="country__flag"/>
            <h3 className="country__name">
              {props.data.name}
            </h3>
            <h4 className="country__capital">
              {props.data.capital}
            </h4>
            <p className="country__lang">
              Languages: {props.data.languages}
            </p>
            <p className="country__currency">
              {props.data.currencies}
            </p>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
              Нажми на меня
            </button>
        </div>
    )
  }