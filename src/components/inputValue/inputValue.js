import React from "react";

class InputValue extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visited: '',
            date: 12,
        }
    }

    handleChange(e, season) {
        console.log(season);
        this.setState({
            visited: e.target.value
        })
    }
    
    render() {
        return(
            <form>
                <label>when have you visited this coutry</label>
                <input type='text' onChange={
                    (e) => {this.handleChange(e, 'winter')}
                    }/>
                <p >{this.state.visited}</p>
                <p>{this.state.date}</p>
            </form>
        )
    }
};

export default InputValue;