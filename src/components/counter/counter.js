import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  increase = () => {
    this.setState((state) => ({
      counter: ++state.counter,
    })
  )
  }

  decrease = () => {
      this.setState((state) => ({
        counter: --state.counter,
      })
    )
  }

  render() {
    return (
        <div className="container">
            <button onClick={this.increase}>increase</button>
            <button onClick={this.decrease}>decrease</button>
            <p>count: {this.state.counter}</p>
        </div>
    )
  }
  
};

export default Counter;