import ACTIONS from './Actions'
import { ACTIONS_REDUCER } from "./ActionsReducer";
import { State } from './State'
import { Action } from './Action'

const reducer = (prevState: State, action: Action) => {

    const type =
        (ACTIONS.SET_ID === action.type && ACTIONS.SET_ID) ||
        (ACTIONS.SET_NAME === action.type && ACTIONS.SET_NAME) ||
        (ACTIONS.SET_DESCRIPTION === action.type && ACTIONS.SET_DESCRIPTION) ||
        (ACTIONS.ADDED === action.type && ACTIONS.ADDED) ||
        ACTIONS.DEFAULT

    const actionReducer = ACTIONS_REDUCER[type]

    return actionReducer(prevState, action)
}

export default reducer