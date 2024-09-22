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

    const totalTareas = setTareas([nuevaTarea, ...tareas]);
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

      {/* Map over the `tareas` array to render each task */}
      {tareas.map((tareaItem) => (
        <Task
          key={tareaItem.id}
          id={tareaItem.id}
          tarea={tareaItem.tarea}
          borrarTarea={borrarTarea}
        />
      ))}
    </>
  );
}

export default App;
