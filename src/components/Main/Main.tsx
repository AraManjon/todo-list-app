import React from 'react';
import Box from '../Box/Box';
import { TasksList } from './TaskList/TasksList';
import './Main.css';

const Main = () => {

  const { state, retrieve } = TasksList()

  return (
    <React.Fragment>
      {!state.isLoading && 
      <main className="main">
        <div className="title">TODO-LIST</div>
        <Box tasksList={state.tasksList} updateList={retrieve}/>
      </main>}
    </React.Fragment>
  );
}

export default Main;