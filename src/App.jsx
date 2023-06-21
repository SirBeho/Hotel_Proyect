
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Body from "./components/Body";
import Foother from "./components/Foother";


function App() {

  const [DATA, setData] = useState([]);
  const [filtrado,setFiltrado] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
    
      setData(resJson);
      setFiltrado(resJson);   
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFiltrado(DATA);
  }, [DATA]);

  function filterList(e) {
    let  inputValue= e.toLowerCase();

    const FILTERED = DATA.filter((el) => {
      
      return (el.country+","+el.city).toLowerCase().includes(inputValue);
    })
    
    setFiltrado(FILTERED);
  } 
  return (
    <>
      <Header /> 
      <Search data={filtrado} input={filterList}/> 
      <Body data={filtrado}/>
    </>
  );
}

export default App;











/* import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Body from "./components/Body";
import Foother from "./components/Foother";


function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      console.log(resJson, typeof resJson);
      return resJson; // Guardar el valor en una variable y devolverlo
    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchData = async () => {
    const data = await getData(); // Llamar a la función y guardar el valor retornado en una variable
    console.log(data); // Utilizar la variable para acceder al valor
    console.log("completo");
  };
  
  fetchData(); 
  console.log(DATA)

  function filterList(e) {
    let  inputValue= e.target.value.toLowerCase();

    const FILTERED = DATA.filter((el) => {
      return el.city.toLowerCase().includes(inputValue);
    })
    console.log(DATA,inputValue,FILTERED)
    
    setData(FILTERED);
  } 
 
  return (
    <>
        <Header /> 
        <Search input={(e) => filterList(e)}/> 
        <Body/>
        <Foother/>
    </>
  );
}

export default App;
 */