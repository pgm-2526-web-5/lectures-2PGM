import { useState } from "react";

const TaskList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleClick = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Taak"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          name="task"
        />
        <button onClick={handleClick}>Voeg toe aan lijst</button>
      </form>

      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </>
  );
};

export default TaskList;
