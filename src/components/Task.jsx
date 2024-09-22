import React, { useState } from "react";

const Task = ({ tarea, borrarTarea }) => {
    const [completada, setCompletada] = useState(false);

    return (
        <div className={completada ? "containerTarea containerTareaCompletada" : "containerTarea"}>
            <h2 className={completada ? "completada" : "no-completada"}>{tarea.tarea}</h2>
            <button
                id="completar"
                onClick={() => setCompletada(!completada)}
            >
                {completada ? "No completada" : "Completada"}
            </button>
            <button
                onClick={() => borrarTarea(tarea.id)}
                id="eliminar"
            >
                Delete
            </button>
        </div>
    );
};

export default Task;


