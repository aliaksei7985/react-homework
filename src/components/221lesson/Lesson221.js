import React from "react";
// 1. Сделайте запрос за комментариями на https://jsonplaceholder.typicode.com/comments и отрисуйте их на странице.
// 2. Создайте на странице инпут, в который пользователь вводит название страницы. После того, как state изменяется, сделайте запрос за информацией о данной стране https://restcountries.com/v3.1/name/{name}.

class Lesson221 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: ''
        }
    }


    renderComments = function() {
        
        return fetch('https://jsonplaceholder.typicode.com/comments')
                .then(data => data.json());
    }

    render() {
        return(
            <div>
                <p>hi jack</p>
                <p>{this.state.comment}</p>
            </div>
        )
    }
}

export default Lesson221;