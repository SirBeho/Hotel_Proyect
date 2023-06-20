import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";



function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);



  function filterList(e) {
    let inputValue = e.target.value.toLowerCase();
    
   /*  if (inputValue === "") {
      setLista([]);
    } else {
      const FILTERED = OPCIONES.filter((el) => {
        return el.nombre.toLowerCase().includes(inputValue);
      })

      setLista(FILTERED);
    } */
  }

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

 
  return (
    <>
       
        <Header />

        <section className="container  pt-3">
            <div className=" pb-2 d-flex justify-content-between ">
              <h1>Stays in Finland</h1>
              <span>12+ stays</span>
            </div>
           
            <div className=" mt-1 row row-cols-1  row-cols-md-2 row-cols-lg-3"> 
              {data.map((dato, index) =>  <Card key={index} datos={dato}/>)}
          </div>
        </section>

        <section className="text-center my-4">
          <h3 className=" text-secondary">created by <b>Benjamin Tavarez</b> - de devChallenges.io</h3>
        </section>
    </>
  );
}

export default App;
