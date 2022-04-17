import { TasksListType } from "../../../models/TasksListType";

export type State = {
    tasksList: TasksListType;
    isLoading: boolean;
    error: boolean;
}