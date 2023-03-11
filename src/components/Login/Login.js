import { render } from "@testing-library/react";
import React from "react";
import style from './Login.module.css';
import styled from "styled-components";

const   Paragraph = styled.p`
    text-decoration: none;
    color: black;
    margin: 0;
    background-color: white;

    &:hover {
        border: 2px solid yellow;
    }
`

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
                    <Paragraph>enter login</Paragraph>
                    <input 
                        type='text'
                        name="login"
                        value={this.state.login}
                        onChange={(e) => {this.handleInput(e)}}
                    />
                </fieldset>
                <fieldset>
                    <p className={style.item}>enter password</p>
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