import React, { useState } from "react";

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

function Fibonacci() {
  const [result, setResult] = useState([]);
  const [toEvaluate, setToEvaluate] = useState();
  const [feature, setFeature] = useState("elemento");
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const fibonacci = (n) =>{

    let aux=[];

    if(n==1){
      aux=[1]
    }
    else if(n==2){
      aux=[1, 1]
    }
    else if (n>=3){
      aux=[1, 1]
      for(let i = 3; i<=n; i++){
        aux.push(aux[i-3] + aux[i-2])
      }
    }
    setResult(aux)
    setShowResults(true)
  }

  const changeValueToEvaluate = (string) => {
    setShowResults(false);
    setShowError(false);
    setToEvaluate(string);
  };

  const letsCheckItOut = () => {
    if(toEvaluate<=0 || Math.floor(toEvaluate)-toEvaluate!==0){
      setError('Debes ingresar un número entero positvo');
      setShowError(true)
    }
    else {fibonacci(toEvaluate)}
    
  };

  return (
    <div className="py-4 max-w-[800px] m-auto ">
      <h1 className="text-2xl text-gray-800 text-center pb-6 font-bold">
        Sucesión de Fibonacci
      </h1>

      <div className="fixed bottom-4 w-full z-10 flex flex-row justify-between px-3">
        <Link to="/" className="bg-blue-400 px-6 py-2 text-white rounded-full ">
          {" "}
          Volver a la lista{" "}
        </Link>

        <a
          className=" text-blue-400 flex"
          href="https://github.com/fedeferrelli/jsexercises/blob/main/src/Components/mayusculasEtc/MayusculasEtc.jsx"
          target="_blank"
        >
          <BsGithub className="m-auto text-4xl" />
        </a>
      </div>

      <section className="flex flex-col p-3 w-11/12 m-auto  rounded-lg shadow-md border border-gray-200 bg-gray-100">
        <label
          htmlFor="toEvaluate"
          className="w-full text-center text-xl text-gray-800 mb-4 font-semibold"
        >
          Ingresa el número
        </label>
        <input
          id="toEvaluate"
          type="number"
          placeholder="ingresa un número entero positivo"
          className="w-full p-4 rounded-md border border-gray-300 my-2 m-auto"
          onChange={(e) => {
            changeValueToEvaluate(e.target.value);
          }}
        ></input>

        <select
          name="select"
          className="w-full m-auto p-4  rounded-md border mb-4 border-gray-200"
          onChange={(e) => {
            setFeature(e.target.value);
          }}
        >
          <option value="elemento" defaultValue>
            Sólo el elemento
          </option>
          <option value="serie">Sucesión completa</option>
          
        </select>

        <button
          type="submit"
          className="w-full m-auto p-4 bg-blue-400 rounded-md uppercase text-white"
          onClick={() => {
            letsCheckItOut();
          }}
        >
          fi bo na cci !{" "}
        </button>
      </section>

      {showError && (
        <Fade duration="500">
          <div className="w-11/12 m-auto mt-1 text-center rounded-lg  text-red-500 font-semibold">
            {error}
          </div>
        </Fade>
      )}

      <section className="mt-4 flex flex-col  w-11/12 m-auto  rounded-lg overflow-hidden shadow-md mb-12">
        {showResults && (
          <Fade duration="500">
            <div className="h-full w-full text-center">
              <div className="bg-gray-400 text-gray-600 text-xl p-3 flex flex-wrap gap-2 justify-center">
                
                { feature==="elemento" ?
                  
                  result[result.length-1].toLocaleString('de-DE')

                  :

                  result.map((e, index)=>(
                    <div key={index} className="py-2 px-3 rounded-lg border bg-gray-500 text-white border-gray-700">
                    {e.toLocaleString('de-DE')}
                  </div>
                  ))


                }
                
                
                {}
              </div>
            </div>
          </Fade>
        )}
      </section>
    </div>
  );
}

export default Fibonacci;
