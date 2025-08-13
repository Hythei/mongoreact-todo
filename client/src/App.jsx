import React from "react";

/*import axios from "axios";*/

import ToDoList from "./components/ToDoList.jsx";
import "./App.css";

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


  return (
      <div className="App">
          <ToDoList />
      </div>
  );
}


export default App;
