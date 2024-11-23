import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTaskAction, removeTaskAction } from "./store/taskReducer";

function App() {

const [inputId, setInputId] = useState('')
const [inputName, setInputName] = useState('')

const dispatch = useDispatch()
const tasks = useSelector(state => state.tasks.tasks)

const addTask = () =>{
  const newTask = {
    id: inputId,
    name: inputName,
  }
  setInputId('')
  setInputName('')
  dispatch(addTaskAction(newTask))
}
const deleteTask = (id) =>{
  dispatch(removeTaskAction(id))
}

  return (
    <div className="App">
<input value={inputId} type="text"  onChange={(e) => setInputId(e.target.value)}/>
<input value={inputName} type="text"  onChange={(e) => setInputName(e.target.value)}/>
<button onClick={addTask}>Добавить задачу</button>
<div className="tasks">
  {tasks.map(task =>
    <div key={task.id}>
     id : {task.id} , name:{task.name}
     <button onClick={() =>deleteTask(task.id)}>Удалить</button>
    </div>
  )}
</div>
    </div>
  );
}

export default App;
