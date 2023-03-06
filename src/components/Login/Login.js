import { render } from "@testing-library/react";
import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: '',
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return(
            <form>
                <fieldset>
                    <p className="item">enter login</p>
                    <input 
                        type='text'
                        name="login"
                        value={this.state.login}
                        onChange={(e) => {this.handleInput(e)}}
                    />
                </fieldset>
                <fieldset>
                    <p className="item">enter password</p>
                    <input 
                        type='password'
                        name="password"
                        value={this.state.password}
                        onChange={(e) => {this.handleInput(e)}}
                    />
                </fieldset>
            </form>
            
        )
    }
}

export default LoginForm;