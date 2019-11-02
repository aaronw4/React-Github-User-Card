import React from 'react'

export const FriendList = props => {
    console.log(props)
    return(
        <div className='followersList'>
            <h2>Followers</h2>
            {props.followers.map(item => {
                return(
                <div className='followers' key={item.login}>
                    <img src={item.avatar_url} alt={item.name} className='followerImg'/>
                    <p className='followerLogin'>{item.login}</p>
                </div>
            )})}        
        </div>
    )

}