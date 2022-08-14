import { FETCH_TRICKER, SET_CURRENT_MODE } from '../actionType'
import { ticker24hrs } from '../../api/ticker24hrs.api'

export const setCurrentMode = (payload) => ({type: SET_CURRENT_MODE, payload: payload})

export const onFetchTriker = (payload) => {
    return async dispatch => {
        const response = await ticker24hrs.get(payload)
        if (response.status === 200) {
            dispatch({
                type: FETCH_TRICKER,
                payload: response.data
            })
        }
    }
    
}