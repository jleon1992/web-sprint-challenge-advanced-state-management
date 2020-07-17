import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE
} from '../actions/actions'

const initialState = {
    smurfs: [],
    error: '',
    isFetching: false
}

export function reducer (state = initialState, action){
    switch(action.type){
        case FETCH_SMURFS_START:
            return {
                ...state,
                smurfs: [],
                error: '',
                isFetching: true
            }
        case FETCH_SMURFS_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                smurfs: action.payload,
                error: '',
                isFetching: false
            }
        case FETCH_SMURFS_FAILURE:
            return{
                ...state,
                error: action.payload,
                isFetching: false
            }
        default: 
            return state
    }
}