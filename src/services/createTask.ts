import call from '../utils/call';
import Task from '../models/Task';

function createTask(data: Task) {
    const API_URL = process.env.REACT_APP_API_URL;
    return (async () => {
        const response = await call<Task>(`${API_URL}/tasks/${data.id}`, {
            method: 'PUT',
            data,
        });
        return response.data;
    })();
}
export default createTask;