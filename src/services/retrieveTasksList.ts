import { TasksListType } from '../models/TasksListType';
import call from '../utils/call';

function retrieveTasksList() {
    const API_URL = process.env.REACT_APP_API_URL;
    return (async () => {
        const response = await call<TasksListType>(`${API_URL}/tasks`, {
            method: 'GET',
        });
        return response.data;
    })();
}
export default retrieveTasksList;