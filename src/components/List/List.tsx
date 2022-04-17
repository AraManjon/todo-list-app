import { TasksListType } from '../../models/TasksListType';
import Task from '../Task/Task';
import './List.css';

interface IProps {
    tasksList: TasksListType;
}

const List: React.FC<IProps> = ({tasksList}) => {
  return (
      <div className='container container__list'>
      {tasksList.map((task) => {
            return <Task task={task}/>
        })}
    </div>
  );
}

export default List;