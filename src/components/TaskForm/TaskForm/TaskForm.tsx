import { useEffect, useReducer } from "react"
import services from "../../../services";
import ACTIONS from './Actions'
import reducer from "./Reducer";

const initialState = {
    task: {
        name: '',
        description: '',
        id: '',
    },
    isAvailable: false,
    isNewTask: true,
    isAdded: false
}

export const TaskForm = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useReducer(reducer, initialState)

    const add = async () => {
        try {

            await services.createTask(state.task)
            dispatch({ type: ACTIONS.ADDED })
        } catch (error) {

            console.log(error)
            dispatch({ type: ACTIONS.DEFAULT })
        }
    }

    useEffect(() => {
        if(state.isNewTask) {
            dispatch({ type: ACTIONS.SET_ID })
        }
    }, [state.isNewTask])

    const setName = (value: string) => dispatch({ type: ACTIONS.SET_NAME, payload: value })
    const setDescription = (value: string) => dispatch({ type: ACTIONS.SET_DESCRIPTION, payload: value })

    return { state, add, setName, setDescription }
}