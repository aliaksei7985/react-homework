import { useState } from "react";

function InputValue() {

    const   [date, setDate] = useState();

    function handleChange(date) {
        setDate(date)
    };
    
    return(
        <form>
            <p>{document.title}</p>
            <label>when have you visited this coutry</label>
            <input type='text' onChange={
                (e) => {handleChange(e.target.value)}
                }/>
            <p >{date}</p>
        </form>
    )
};

export default InputValue;