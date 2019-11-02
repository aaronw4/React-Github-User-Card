import React from 'react'

export const FriendList = props => {
    console.log(props)
    return(
        <div>
            <h2>Followers</h2>
            {props.followers.map(item => {
                return(
                <div>
                    <img src={item.avatar_url} alt={item.name}/>
                    <p>{item.login}</p>
                </div>
            )})}        
        </div>
    )

}