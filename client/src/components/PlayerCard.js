import React from 'react'

export const PlayerCard = ({ name, country }) => {
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Country: {country}</p>
        </div>
    )
}