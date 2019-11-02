import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    data: {}
  }

componentDidMount() {
  fetch("https://api.github.com/users/aaronw4")
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({data: res})
    })
    .catch(err => console.log(err))
}

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <p>{this.state.data.name}</p>
      </div>
    );
  }
}

export default App;
