import { useEffect, useState } from "react";


function Fetch(props) {
    const   [comment, setComment] = useState('');
    const   {postId, id, name, email, body} = comment;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(res => {
                        if (!res.ok) {
                            throw Error('error');
                        }
                        return res.json()
                    })
                    .then((data) => {
                        setComment(data[1])
                    })
                    .catch(e => e)
    }, [comment]);

    return(
        <div>
            <p>comment's id: {postId}</p>
            <p>commentator's id: {id}</p>
            <p>commentator's name: {name}</p>
            <p>commentator's email: {email}</p>
            <p>comment's content: {body}</p>
        </div>
    )
}

export default Fetch;