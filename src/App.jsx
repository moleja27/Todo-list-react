import { useState } from 'react'
import './App.css'
import { Task } from "./components/Task";
import { Form } from "./components/Form";

function App() {
  const [tarea, setTarea] = useState(0);
  const [tareas, setTareas = useState([]);

  const HandleChange = e => {
    setTareas(e.target.value)
  }

  const addTask = e => {
    e.PreventDefault()
    if (tarea.Trim() === "") {
      Alert("You should add something")
      return;
    }
  }

  const nuevaTarea = {
    id: Date.now(),
    tarea,
    completada: false;
  }

  const totalTareas = [nuevaTarea, ...tareas]
  setTareas(TotalTareas);
  setTarea("");


  return (
    <>
      <h2>Todo list </h2>
      <Form
        HandleChange={HandleChange}
        tarea={tarea}
        addTask={addTask}

      />
    </>
  )
}

export default App
