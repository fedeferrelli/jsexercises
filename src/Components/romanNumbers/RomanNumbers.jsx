import React, { useState } from "react";

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

function RomanNumbers() {
  const [result, setResult] = useState();
  const [toEvaluate, setToEvaluate] = useState();
  
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  function convertToRoman(num) {

  if(num>=4000 || num<=0 || num - Math.floor(num) !== 0 ){
    setError('El número ingresado debe ser entero, positivo y menor a 4.000')
    setShowError(true);
    return
  }
  
    let romanNumbersFirst = ['I', 'V', 'X'];
    let romanNumbersSecond = ['X', 'L', 'C'];
    let romanNumbersThird = ['C', 'D', 'M'];
  
    let subRomanNumbers = []
   
    let result = [];
    
    let arrToMap = (""+num).split("")
    
    arrToMap.map((e, i)=> {
                  
      let number = +e
         
      let romanNumbers = []
      
      if(arrToMap.length-i === 3){romanNumbers=romanNumbersThird}
      else if (arrToMap.length-i === 2){romanNumbers=romanNumbersSecond}
      else if (arrToMap.length-i === 1){romanNumbers=romanNumbersFirst}
      else if (arrToMap.length-i === 4){romanNumbers=romanNumbersThird[2]}
    
    if(number<=3){result.push(...Array(number).fill(romanNumbers[0]))}
    else if(number===4){result.push( romanNumbers[0], romanNumbers[1])}
    else if(number===5){result.push( romanNumbers[1])}
    else if(number<=8){result.push(romanNumbers[1], ...Array(number-5).fill(romanNumbers[0]))}
    else if(number<=9){result.push(romanNumbers[0], romanNumbers[2])}
                  
    }
    )
      
        
    
    setResult(result.join(""));
    setShowResults(true)
  }



  const changeValueToEvaluate = (int) => {
    setShowResults(false);
    setShowError(false);
    setToEvaluate(int);
    if(int>=4000 || int<=0 || int - Math.floor(int) !== 0 ){
      setError('El número ingresado debe ser entero, positivo y menor a 4.000')
      setShowError(true);
      
    }
    console.log(int)
  };

  const letsCheckItOut = () => {
    console.log(toEvaluate)
    convertToRoman(toEvaluate);
  };

  return (
    <div className="py-4 max-w-[800px] m-auto ">
      <h1 className="text-2xl text-gray-800 text-center pb-6 font-bold">
        Números Romanos
      </h1>

      <div className="fixed bottom-4 w-full z-10 flex flex-row justify-between px-3">
        <Link to="/" className="bg-blue-400 px-6 py-2 text-white rounded-full ">
          {" "}
          Volver a la lista{" "}
        </Link>

        <a
          className=" text-blue-400 flex"
          href="https://github.com/fedeferrelli/jsexercises/blob/main/src/Components/armstrong/Armstrong.jsx"
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
          type="number"
          id="toEvaluate"
          placeholder="número entero no negativo"
          className="w-full p-4 rounded-md border border-gray-300 my-2 m-auto"
          onChange={(e) => {
            changeValueToEvaluate(e.target.value);
          }}
        ></input>

        <button
          type="submit"
          className="w-full m-auto p-4 bg-blue-400 rounded-md uppercase text-white"
          onClick={() => {
            letsCheckItOut();
          }}
        >
          Convertir a Romano!{" "}
        </button>
      </section>

      {showError && (
        <Fade duration="500">
          <div className="w-11/12 m-auto mt-1 text-center rounded-lg  text-red-500 font-semibold">
            {error}
          </div>
        </Fade>
      )}

      <section className="mt-4 flex flex-col  w-11/12 m-auto  rounded-lg overflow-hidden shadow-md   ">
        {showResults && (
            <Fade duration="500">
              <div className="h-full w-full text-center ">
                <div className="bg-green-300  text-gray-600 text-xl p-3 flex flex-col justify-center">
                  <div>{Number(toEvaluate).toLocaleString('DE-de')} en números romanos se escribe así:</div>
                  <div className="flex justify-center my-2 font-bold ">
                    {/* {[...toEvaluate.toString()].map((e, index) => (
                      <div key={Math.random()} className="relative">
                        {e}
                        <span className="text-sm -top-1 absolute">
                          {[...toEvaluate.toString()].length}
                        </span>{" "}
                        {index == [...toEvaluate.toString()].length - 1 ? (
                          <span className="mx-2"> = </span>
                        ) : (
                          <span className="mx-2"> + </span>
                        )}{" "}
                      </div>
                    ))} */}
                    <div>{result}</div>
                  </div>
                </div>
              </div>
            </Fade>
          ) }
      </section>
    </div>
  );
}

export default RomanNumbers;
