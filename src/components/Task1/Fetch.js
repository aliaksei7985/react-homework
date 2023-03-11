import React from "react";

class Fetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(res => {
                        if (!res.ok) {
                            throw Error('error');
                        }
                        return res.json()
                    })
                    .then((data) => {
                        this.setState({
                            comment: data[0],
                        })
                    })
                    .catch(e => e)
    }

    render() {
        const   {postId, id, name, email, body} = this.state.comment;
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
}

export default Fetch;