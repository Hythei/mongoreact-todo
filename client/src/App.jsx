/*import { useState, useEffect } from "react";*/
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

  return (
      <>
          <Header />
          <Form />
          <Tasks />
      </>
  )
}


export default App;
