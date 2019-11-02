import React from 'react'

export const Calendar = props => {
    var chart = `http://ghchart.rshah.org/aaronw4`;
    return(
        <div className='calendar'>
            <img src={chart} alt={props.login}/>
        </div>
    )
}