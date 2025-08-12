import React, {useState} from "react";

/*import axios from "axios";*/
import Header from "./components/Header.jsx";
import ToDoList from "./components/ToDoList.jsx";

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
          <ToDoList />
      </>
  )
}


export default App;
