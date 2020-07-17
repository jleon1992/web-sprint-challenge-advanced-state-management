import axios from 'axios'

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'

    export const getSmurfs = () => dispatch => {
        dispatch({ type: FETCH_SMURFS_START })
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({type: FETCH_SMURFS_FAILURE, payload: err.response})
        })
    }

    export const postSmurf = (newSmurf) => dispatch => {
        dispatch({ type: FETCH_SMURFS_START})
        axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log(res)
            FETCH_SMURFS_SUCCESS({type: FETCH_SMURFS_SUCCESS, payload: res.data})
            
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            getSmurfs()
        })
    }
