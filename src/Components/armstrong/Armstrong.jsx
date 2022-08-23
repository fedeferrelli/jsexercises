import React, { useState } from "react";

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

function Armstrong() {
  const [result, setResult] = useState();
  const [toEvaluate, setToEvaluate] = useState();
  const [isArmstrong, setIsArmstrong] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const armstrong = (n) => {
    if (n === undefined || n == "") {
      setError("Debes ingresar un número");
      setShowError(true);
    } else if (n <= 0) {
      setError("Debes ingresar un número positivo");
      setShowError(true);
    } else if (Math.floor(n) - n !== 0) {
      setError("Debes ingresar un número entero");
      setShowError(true);
    } else {
      let auxArray = [...n];

      let sum = auxArray.reduce((a, b) => a + b ** [auxArray.length], 0);

      if (sum == n) {
        setIsArmstrong(true);
      } else setIsArmstrong(false);
      setShowResults(true);
    }
  };

  const changeValueToEvaluate = (string) => {
    setShowResults(false);
    setShowError(false);
    setToEvaluate(string);
  };

  const letsCheckItOut = () => {
    armstrong(toEvaluate);
  };

  return (
    <div className="py-4 max-w-[800px] m-auto ">
      <h1 className="text-2xl text-gray-800 text-center pb-6 font-bold">
        Número de Armstrong
      </h1>

      <div className="fixed bottom-4 w-full z-10 flex flex-row justify-between px-3">
        <Link to="/" className="bg-blue-400 px-6 py-2 text-white rounded-full ">
          {" "}
          Volver a la lista{" "}
        </Link>

        <a
          className=" text-blue-400 flex"
          href="https://github.com/fedeferrelli/jsexercises/blob/main/src/Components/factorial/Factorial.jsx"
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
          conocer el factorial{" "}
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
        {showResults &&
          (isArmstrong ? (
            <Fade duration="500">
              <div className="h-full w-full text-center ">
                <div className="bg-green-300  text-gray-600 text-xl p-3 flex flex-col justify-center">
                  <div>Encontraste un número Narciso!</div>
                  <div className="flex justify-center my-2 font-bold ">
                    {[...toEvaluate.toString()].map((e, index) => (
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
                    ))}
                    <div>{Number(toEvaluate).toLocaleString("es-ES")}</div>
                  </div>
                </div>
              </div>
            </Fade>
          ) : (
            <Fade duration="500">
              <div className="h-full w-full text-center ">
                <div className="bg-red-300  text-gray-600 text-xl p-3 flex flex-col justify-center">
                  <div>{toEvaluate} no es un número narcisista</div>
                  <div className="flex justify-center my-2 font-bold ">
                    {[...toEvaluate.toString()].map((e, index) => (
                      <div key={Math.random()} className="relative">
                        {e}
                        <span className="text-sm -top-1 absolute">
                          {[...toEvaluate.toString()].length}
                        </span>{" "}
                        {index == [...toEvaluate.toString()].length - 1 ? (
                          <span className="mx-2"> != </span>
                        ) : (
                          <span className="mx-2"> + </span>
                        )}{" "}
                      </div>
                    ))}
                    <div>{Number(toEvaluate).toLocaleString("es-ES")}</div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
      </section>
    </div>
  );
}

export default Armstrong;
