import React, { useState } from "react";
import "../components/Task.css";



const Task = ({ tarea, borrarTarea }) => {
    const [completada, setCompletada] = useState(false)

    return (
        <div className={completada ? "containerTarea containerTareaCompletada"}>
            <h2>Desde Task Component</h2>
        </div >
    );
};

export default Task;

