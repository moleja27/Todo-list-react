import { useState } from 'react';
import './App.css';
import Task from "./components/Task";
import { Form } from "./components/Form";

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const HandleChange = (e) => {
    setTarea(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (tarea.trim() === "") {
      alert("You should add something");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea,
      completada: false,
    };


    setTareas([nuevaTarea, ...tareas]);
    setTarea("");
  };

  const borrarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <h2>Todo List</h2>
      <Form HandleChange={HandleChange} tarea={tarea} addTask={addTask} />

      {tareas.map((tarea) => (
        <Task
          key={tarea.id}
          id={tarea.id}
          tarea={tarea}
          borrarTarea={borrarTarea}
        />
      ))}
    </>
  );
}

export default App;
