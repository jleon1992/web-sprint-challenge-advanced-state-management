import React from 'react'

export const Smurf = props => {
    return (
        <div className="smurfCard">
            <h3>{props.smurf.name}</h3>
            <h4>Age: {props.smurf.age}</h4>
            <h4>Height: {props.smurf.height}</h4>
    

        </div>
    )
}

export default Smurf