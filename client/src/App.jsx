/*import { useState, useEffect } from "react";*/
import "./App.css";
/*import axios from "axios";*/
import Header from "./Header.jsx";
import ToDo_Div from "./ToDo_Div.jsx";

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
          <ToDo_Div />
      </>
  )
}


export default App;
