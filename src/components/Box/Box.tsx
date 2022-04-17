import { TasksListType } from '../../models/TasksListType';
import AddTaskInput from '../TaskForm/TaskFormBox';
import List from '../List/List';
import './Box.css';

interface IProps {
    tasksList: TasksListType;
    updateList: () => void;
}

const Box: React.FC<IProps> = ({tasksList, updateList }) => {
  return (
      <div className="box">
        <AddTaskInput updateList={updateList} />
        <List tasksList={tasksList}/>
      </div>
  );
}

export default Box;