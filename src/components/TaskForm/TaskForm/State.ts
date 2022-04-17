import Task from "../../../models/Task";

export type State = {
    task: Task;
    isAvailable: boolean;
    isNewTask: boolean;
    isAdded: boolean;
}