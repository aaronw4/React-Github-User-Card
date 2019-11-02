import React from 'react';
import {UserCard} from './Components/UserCard';
import {FriendList} from './Components/FriendList';
import './App.css';

class App extends React.Component {
  state = {
    data: {},
    followers: []
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

componentWillMount() {
  fetch('https://api.github.com/users/aaronw4/followers')
    .then(res => res.json())
    .then(res =>  {
      console.log(res);
      this.setState({followers: res})
    })
    .catch(err => console.log(err))
}

  render() {
    return (     
      <div className="App">
        <UserCard data={this.state.data}/>
        <FriendList followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
