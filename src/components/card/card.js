import './card.css';

export default function Card ({url, name, capital, lang, currency}) {
    return (
        <div className="container">
            <img src={url} className="country__flag"/>
            <h3 className="country__name">
              {name}
            </h3>
            <h4 className="country__capital">
              {capital}
            </h4>
            <p className="country__lang">
              Languages: {lang}
            </p>
            <p className="country__currency">
              {currency}
            </p>
        </div>
    )
};
