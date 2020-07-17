import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Smurf} from './Smurf'
import {getSmurfs, postSmurf} from '../actions/actions'
import SmurfForm from './SmurfForm'

const initialFormValues = {
    name: '',
    age: '',
    height: ''
}

export const SmurfList = props => {
    
    const [formValues, setFormValues] = useState(initialFormValues)

    const findSmurfs = e => {
        e.preventDefault()
        props.getSmurfs()

    }

    const changeHandler = e => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const submitSmurf = e => {
        // e.preventDefault()
        const newSmurf = {
            name: formValues.name,
            age: formValues.age,
            height: formValues.height
        }
        props.postSmurf(newSmurf)
    }

    console.log(props.smurfs)
    return (
        <div>
            <button onClick={findSmurfs}>Show Smurfs</button>
            {props.smurfs.map(smurf => {
                return(<Smurf key={smurf.id} smurf={smurf} /> )
            })}
            {props.error && <p>Oh no, something went wrong</p>}
            <SmurfForm  submitSmurf={submitSmurf} values = {formValues} changeHandler={changeHandler} />
        </div>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error

})


    export default connect(mapStateToProps,
        { getSmurfs, postSmurf }
        )(SmurfList);