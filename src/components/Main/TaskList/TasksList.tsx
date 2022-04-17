import { useReducer, useEffect } from "react"
import { TasksListType } from "../../../models/TasksListType";
import services from "../../../services";
import ACTIONS from './Actions'
import reducer from './Reducer'

const initialState = {
    tasksList: [],
    isLoading: true,
    error: false,
}

export const TasksList = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useReducer(reducer, initialState)

    const retrieve = async () => {
        try {
            dispatch({ type: ACTIONS.RETRIEVE })

            const tasksList: TasksListType = await services.retrieveTasksList()

            dispatch({ type: ACTIONS.FINISHED, payload: tasksList })

        } catch (error) {

            console.log(error)
            dispatch({ type: ACTIONS.ERROR })
        }
    }

    useEffect(() => {
        retrieve()
    }, [])

    return { state, retrieve }
}