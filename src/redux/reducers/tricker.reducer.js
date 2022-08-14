import { FETCH_TRICKER, SET_CURRENT_MODE } from '../actionType'

const initialState = {
    currentMode: null,
    currentTrickerData: null
}


export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_TRICKER:
            return { ...state, currentTrickerData: payload }
        case SET_CURRENT_MODE:
            return { ...state, currentMode: payload }

        default:
            return state
    }
}