import React from 'react'
import { SmurfList } from './SmurfList'

export const SmurfForm = props => {
    const {
        values,
        submitSmurf,
        changeHandler
    } = props
    return (
        <div>
            <form onSubmit={submitSmurf}>
                <label>
                    <p>Name</p>
                    <input
                    type= 'text'
                    name = 'name'
                    value = {values.name}
                    onChange = {changeHandler}
                    />
                </label>
                <label>
                    <p>Age</p>
                    <input
                    type= 'text'
                    name = 'age'
                    value = {values.age}
                    onChange = {changeHandler}
                    />
                </label>
                <label>
                    <p>Height</p>
                    <input
                    type= 'text'
                    name = 'height'
                    value = {values.height}
                    onChange = {changeHandler}
                    />
                </label>
                <br></br>
                <button onSubmit={submitSmurf}>Create Smurf</button>
            </form>
        </div>
    )
}

export default SmurfForm