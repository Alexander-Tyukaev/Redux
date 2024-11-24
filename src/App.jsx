import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTaskAction, removeTaskAction } from "./store/taskReducer";
import "../src/store/style.css";
import { setFilterAll, setFilterCompleted, setFilterIncomplete } from './store/taskReducer';

function App() {

const [inputId, setInputId] = useState('')
const [inputName, setInputName] = useState('')

const dispatch = useDispatch()
const tasks = useSelector(state => state.tasks.tasks)

const addTask = () =>{
  const newTask = {
    id: Date.now(),
    name: inputName,
    completed: false
  }
  setInputId('')
  setInputName('')
  dispatch(addTaskAction(newTask))
}
const deleteTask = (id) =>{
  dispatch(removeTaskAction(id))
}
const filter = useSelector(state => state.tasks.filter);

const filteredTasks = tasks.filter(task => {
  if (filter === 'all') return true;
  if (filter === 'completed') return task.completed;
  if (filter === 'incomplete') return !task.completed;
  return true; 
});

  return (
    <div className="App">
    <div className="menu">
<input value={inputId} type="text"  className="text_id" maxlength="3" onChange={(e) => setInputId(e.target.value)}/>
<input value={inputName} type="text" className="text_name"  maxlength="20" onChange={(e) => setInputName(e.target.value)}/>
<button onClick={addTask}  className="button1">Добавить задачу</button>
</div>
<div className="stroka2">
        <button className="button3" onClick={() => dispatch(setFilterAll())}>Все</button>
        <button className="button3" onClick={() => dispatch(setFilterCompleted())}>Выполненные</button>
        <button className="button3" onClick={() => dispatch(setFilterIncomplete())}>Невыполненные</button>
      </div>
<div className="tasks">
  {filteredTasks.map(task =>
    <div key={task.id} className="stroka">
     <span className="task-id">{task.id}</span>
     <span className="task-name">{task.name}</span>
     <button className="button2" onClick={() =>deleteTask(task.id)}>Удалить</button>
    </div>
  )}
</div>
    </div>
  );
}

export default App;
