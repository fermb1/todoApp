import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(""); 
  const [tareas, setTareas] = useState([]); 

  function handleClick() {
    if (value.trim() !== "") { 
      setTareas([...tareas, { texto: value, completada: false }]);
      setValue(""); 
    }
  }

  function toggleCompletada(index) {
    const nuevasTareas = tareas.map((tarea, i) => {
      if (i === index) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });
    setTareas(nuevasTareas);
  }

  return (
    <>
      <section className="header">
        <label htmlFor="taskInput">Nombre de la tarea:</label>
        <input
          type="text"
          id="taskInput"
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
        />
        <button onClick={handleClick}>+</button>
      </section>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <div className="content">
              <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
                {tarea.texto}
              </span>
              <button 
                className={tarea.completada ? "active" : "inactive"}
                onClick={() => toggleCompletada(index)}
              >
                {tarea.completada ? "Completada" : "Incompleta"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
