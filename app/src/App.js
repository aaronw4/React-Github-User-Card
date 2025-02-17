import React from 'react';
import {UserCard} from './Components/UserCard';
import {FriendList} from './Components/FriendList';
import {Search} from './Components/Search';
import './App.css';

class App extends React.Component {
  state = {
    data: {},
    followers: [],
    user: 'aaronw4'
  }

componentDidMount() {
  fetch(`https://api.github.com/users/${this.state.user}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({data: res})
    })
    .catch(err => console.log(err))

  fetch(`https://api.github.com/users/${this.state.user}/followers`)
    .then(res => res.json())
    .then(res =>  {
      console.log(res);
      this.setState({followers: res})
    })
    .catch(err => console.log(err)); 
}

componentDidUpdate(prevProps, prevState) {
  if (this.state.user !== prevState.user) {
  fetch(`https://api.github.com/users/${this.state.user}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({data: res})
    })
    .catch(err => console.log(err));

    fetch(`https://api.github.com/users/${this.state.user}/followers`)
    .then(res => res.json())
    .then(res =>  {
      console.log(res);
      this.setState({followers: res})
    })
    .catch(err => console.log(err));
}}

changeUser = login => {
  this.setState({
    user: login
  })
}

  render() {
    return (     
      <div className="App">
        <UserCard data={this.state.data}/>
        <FriendList followers={this.state.followers} changeUser={this.changeUser}/>
        <Search changeUser={this.changeUser}/>
      </div>
    );
  }
}

export default App;
