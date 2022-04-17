import {State} from './State'
import ACTIONS from './Actions'
import { Action } from './Action'

export const ACTIONS_REDUCER = {
    [ACTIONS.RETRIEVE]: (state: State) => ({
        ...state,
        isLoading: true
    }),
    [ACTIONS.FINISHED]: (state: State, action: Action) => ({
        ...state,
        isLoading: false,
        tasksList: action.payload
    }),
    [ACTIONS.ERROR]: (state: State) => ({
        ...state,
        error: true
    }),
    [ACTIONS.DEFAULT]: (state: State) => {
        return {
        ...state,
        error: true
    }},
}