import { useState } from "react";

export const App = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();

    setTask("")
    setTodo([Date.now(), task, false])
    console.log(todo);
  }
  const handleDelete = () => {
    setTodo(todo.filter((_, i) => i !== todo.length - 1))
  }

  const handleUpdate = () => {

  }

  return (
    <div className="max-w-3xl h-screen border-black border-2 text-center mx-auto pt-16">
      <input className="border-2 p-2 mr-3" type="text" placeholder="Enter a task" required value={task} onChange={(e) => setTask(e.target.value)} />
      <button className="border-2 p-2" type="submit" onClick={handleAddTodo}>Add Task</button>

      <ul>
        {
          todo.map((task, index) => {
            <li key={index}> {index} - {task} <span onClick={handleDelete}>Delete</span> <span onClick={handleUpdate}>Done</span></li>
          })
        }
      </ul>
    </div >
  );
}