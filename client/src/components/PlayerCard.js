import React from 'react'

export const PlayerCard = ({ name, country }) => {
    return (
        <div className="card">
            <h3>Name: {name}</h3>
            <p>Country: {country}</p>
        </div>
    )
}