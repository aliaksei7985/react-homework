import { useState } from "react";
import './InputValue.css'

function InputValue() {

    const   [date, setDate] = useState();

    function handleChange(date) {
        setDate(date)
    };
    
    return(
        <form>
            <label>when have you visited this coutry</label>
            <input type='text' onChange={
                (e) => {handleChange(e.target.value)}
                }/>
            <p >{date}</p>
        </form>
    )
};

export default InputValue;