import React, {useState} from "react";
import "./App.css";
/*import axios from "axios";*/
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Tasks from "./components/Tasks.jsx";

function App() {
/*  const [array, setArray] = useState( [] );

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3000/api");
    setArray(response.data.fruits);
    console.log(response.data.fruits);
  };

  useEffect(() => {
          fetchAPI();
      },
      []);*/
    const [tasks, setTasks] = useState( [] );

    const addTask = (newTask) => {
        setTasks([...tasks, {id: Date.now(), text: newTask, completed: false}]);
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId
                ? {...task, completed: !task.completed}
                : task
        ));
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

  return (
      <>
          <Header />
          <Form onAddTask={addTask}/>
          <Tasks
              tasks={tasks}
              onToggleCompletion={toggleTaskCompletion}
              onDelete={deleteTask}
          />
      </>
  )
}


export default App;
