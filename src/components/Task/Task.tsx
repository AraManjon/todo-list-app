import TaskType from "../../models/Task";
import './Task.css';

interface IProps {
    task: TaskType;
}

const Task: React.FC<IProps> = ({task}) => {
    return (
        <div className="container container__task">
            <div className="text__task text__task--name">{task.name}</div>
            <div className="text__task text__task--description">{task.description}</div>
        </div>
    );
}

export default Task;