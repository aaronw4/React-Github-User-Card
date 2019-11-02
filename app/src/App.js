import React from 'react';
import {UserCard} from './Components/UserCard'
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
    return (
      <div className="App">
        <UserCard data={this.state.data}/>
      </div>
    );
  }
}

export default App;
