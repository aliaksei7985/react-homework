import { useEffect, useState } from "react";

function Input(props) {
    const   [countryName, setCountryName] = useState('swi');
    const   [data, setData] = useState('');

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
                    .then(res => {
                        if (!res.ok) {
                            throw Error('error');
                        }
                        return res.json()
                    })
                    .then((data) => {
                        setData({
                                name: data[0].name.common,
                                flag: data[0].flags.png,
                                capital: data[0].capital[0],
                        })
                    })
                    .catch(e => e)
    }, [countryName]);

    return(
        <div>
            <form>
                <input placeholder="enter country name" onChange={(e) => {
                    setCountryName(e.target.value)
                }} />
            </form>
            <img src={data.flag} alt="flag" />
            <p>country name: {data.name}</p>
            <p>country capital: {data.capital}</p>
        </div>
    )
}

export default Input;