import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <div className="card-color" style={{background: `${props.maincolor}`}}/>
            <div className="card-content">
                <img src={props.logo}/>
                <h2>{props.name}</h2>
                <div>                
                    <p>{props.city}, {props.state}</p>                    
                    <p>{props.conference} - {props.division}</p>
                </div>
                <img className="nfl-logo" src="https://upload.wikimedia.org/wikipedia/pt/2/25/National_Football_League_2008.svg.png" alt="nfl"/>
            </div>                                    
        </div>
    )
}

export default Card
