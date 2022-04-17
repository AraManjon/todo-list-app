import { createId } from "../../../utils/createId";
import ACTIONS from './Actions'
import { State } from './State'
import { Action } from './Action'

export const ACTIONS_REDUCER = {
    [ACTIONS.SET_ID]: (state: State) => ({
        ...state,
        task: {...state.task, id: createId()},
        newTask: false,
        isAdded: false,
    }),
    [ACTIONS.SET_NAME]: (state: State, action: Action) => ({
        ...state,
        task: {...state.task, name: action.payload},
        isAvailable: action.payload ? true : false
    }),
    [ACTIONS.SET_DESCRIPTION]: (state: State, action: Action) => ({
        ...state,
        task: {...state.task, description: action.payload}
    }),

    [ACTIONS.ADDED]: (state: State) => ({
        ...state,
        task: {
            name: '',
            description: '',
            id: ''
        },
        newTask: true,
        isAdded: true
    }),

    [ACTIONS.DEFAULT]: (state: State) => {
        return {
        ...state,
        error: true
    }},
}
