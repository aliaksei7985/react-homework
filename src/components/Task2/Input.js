import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            countryName: 'afghanistan',
        }
    }

    componentDidMount() {
        fetch(`https://restcountries.com/v3.1/name/${this.state.countryName}`)
                    .then(res => {
                        if (!res.ok) {
                            throw Error('error');
                        }
                        return res.json()
                    })
                    .then((data) => {
                        this.setState({
                            country: {
                                name: data[0].name.common,
                                flag: data[0].flags.png,
                                capital: data[0].capital[0],
                            }
                        })
                    })
                    .catch(e => e)
    }

    componentDidUpdate() {
        fetch(`https://restcountries.com/v3.1/name/${this.state.countryName}`)
                    .then(res => {
                        if (!res.ok) {
                            throw Error('error');
                        }
                        return res.json()
                    })
                    .then((data) => {
                        this.setState({
                            country: {
                                name: data[0].name.common,
                                flag: data[0].flags.png,
                                capital: data[0].capital[0],
                            }
                        })
                    })
                    .catch(e => e)
    }

    render() {
        const   {name, flag, capital} = this.state.country;
        return(
            <div>
                <form>
                    <input placeholder="enter country name" onChange={(e) => {
                        this.setState({countryName: e.target.value})
                    }} />
                </form>
                <img src={flag} alt="flag" />
                <p>country name: {name}</p>
                <p>country capital: {capital}</p>
            </div>
        )
    }
}

export default Input;