import { SELECT_PAGE } from '../actions/actionTypes'

const initialState = {
    selectedPage: '/about'
}

export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case '@@router/LOCATION_CHANGE':
            return Object.assign({}, state, {
                selectedPage: action.payload.location.pathname
            })
        default:
            return state
    }
}
