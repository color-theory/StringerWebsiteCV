import { SELECT_PAGE } from '../actions/actionTypes'

const initialState = {
    selectedPage: 'about'
}
export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_PAGE:
            return Object.assign({}, state, {
                selectedPage: action.pageName
            })
        default:
            return state
    }
}
