import { useEffect } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import './TaskFormBox.css';
import { TaskForm } from "./TaskForm/TaskForm";

interface IProps {
    updateList: () => void;
}
const TaskFormBox: React.FC<IProps> = ({ updateList }) => {

    const { state, add, setName, setDescription } = TaskForm()

    useEffect(() => {
        if (state.isAdded) {
            updateList()
        }
    }, [state.isAdded])

    return (
        <div className="container container__form">
            <Input value={state.task.name} setValue={setName} placeholder={"Por ej. Conferencia miércoles a las 15 #Reuniones"} />
            <Input value={state.task.description} setValue={setDescription} placeholder={"Descripción"} />
            <Button disable={!state.isAvailable} value={'Añadir tarea'} onClick={add} />
        </div>
    );
}

export default TaskFormBox;