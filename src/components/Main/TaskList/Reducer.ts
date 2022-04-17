import ACTIONS from './Actions'
import { State } from './State'
import { Action } from './Action'
import { ACTIONS_REDUCER } from './ActionsReducer'

const reducer = (prevState: State, action: Action) => {
    const type = 
    (ACTIONS.RETRIEVE === action.type && ACTIONS.RETRIEVE) ||
    (ACTIONS.FINISHED === action.type && ACTIONS.FINISHED) ||
    (ACTIONS.ERROR === action.type && ACTIONS.ERROR) ||
    ACTIONS.DEFAULT

    const actionReducer = ACTIONS_REDUCER[type]

    return actionReducer(prevState, action)
}

export default reducer