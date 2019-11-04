import React from 'react';

export class SearchResults extends React.Component {
    state = {       
        search: []
    }
    
    componentWillUpdate(){
        fetch(`https://api.github.com/search/users?q=${this.props.user}`)
        .then(res => res.json())
        .then(res =>  {
          console.log(res.items);
          this.setState({search: res.items})
        })
        .catch(err => console.log(err))
    }

}
{this.state.searchText !== '' ?
                    this.state.search.map(user => {
                        return(
                            <div>
                                <button className='user' onClick={this.handleSubmit} value={user.login}>
                                    {user.login}
                                </button>
                            </div>
                        )
                    }) : null
}