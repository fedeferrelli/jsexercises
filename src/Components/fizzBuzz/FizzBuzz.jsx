import React, { useState } from "react";

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function FizzBuzz() {
  const [result, setResult] = useState([]);
  const [toEvaluate, setToEvaluate] = useState();
  const [isPalindrome, setIsPalindrome] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const fizzbuzz = (n) => {
    let fizzBuzzArray = [];

    if (n === undefined || n == "") {
      setError("Debes ingresar un número");
      setShowError(true);
    } else if (n < 1 || Math.floor(n) - n !== 0) {
      setError("Debes ingresar un número entero positivo");
      setShowError(true);
    } else {
      for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
          fizzBuzzArray.push("Fizz Buzz");
        } else if (i % 5 === 0) {
          fizzBuzzArray.push("Buzz");
        } else if (i % 3 === 0) {
          fizzBuzzArray.push("Fizz");
        } else {
          fizzBuzzArray.push(i);
        }

        setShowResults(true);
      }
    }

    setResult(fizzBuzzArray);
  };

  const changeValueToEvaluate = (string) => {
    setShowResults(false);
    setShowError(false);
    setToEvaluate(string);
  };

  const letsCheckItOut = () => {
    fizzbuzz(toEvaluate);
  };

  return (
    <div className="py-4 max-w-[800px] m-auto ">
      <h1 className="text-2xl text-gray-800 text-center pb-6 font-bold">
        Fizz Buzz
      </h1>

      <div className="fixed bottom-4 right-2 z-10  shadow-lg">
        <Link to="/" className="bg-blue-400 py-3 px-6 text-white rounded-full ">
          {" "}
          Volver a la lista{" "}
        </Link>
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
          Let's FizzBuzz!{" "}
        </button>
      </section>

      {showError && (
        <Fade duration="500">
          <div className="w-11/12 m-auto mt-1 text-center rounded-lg  text-red-500 font-semibold">
            {error}
          </div>
        </Fade>
      )}

      <section className="mt-4 flex flex-col  w-11/12 m-auto  rounded-lg overflow-hidden shadow-md bg-gray-100  mb-12">
        {showResults && (
          <Fade duration="500">
            <div className="h-full w-full text-center">
              <div className="bg-gray-400 text-gray-600 text-xl p-3 flex flex-wrap gap-2 justify-center">
                {result.map((e) => (
                  <div className="py-2 px-3 rounded-lg border bg-gray-500 text-white border-gray-700">
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        )}
      </section>
    </div>
  );
}

export default FizzBuzz;
