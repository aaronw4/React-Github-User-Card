import React from 'react';

export class Search extends React.Component {
    state = {       
        search: [],
        searchText: '',
        user:''
    }

    handleChanges = e => {
        this.setState({
            searchText: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            user: e.target.value
        })
    }


    render() {
        return(
            <div>
                <form>
                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='search'
                        value={this.state.searchText}
                        className='search'
                        placeholder='Search Users'
                    />
                </form>
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
            </div>
        )
    }
}