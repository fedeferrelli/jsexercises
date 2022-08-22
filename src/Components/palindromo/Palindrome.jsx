import React, { useState } from "react";

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

function Palindrome() {
  const [toEvaluate, setToEvaluate] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const palindromo = (string) => {
    let array = [];
    let reversedArray = [];
    let toAvoid = [" ", ",", ".", ";", ":", "!", "¡", "?", "¿"];

    [...string].map((e) => {
      if (!toAvoid.includes(e)) {
        let i;

        switch (e) {
          case "á":
            i = "a";
            break;
          case "é":
            i = "e";
            break;
          case "í":
            i = "i";
            break;
          case "ó":
            i = "o";
            break;
          case "ú":
            i = "u";
            break;
          case "ü":
            i = "u";
            break;
          default:
            i = e;
            break;
        }

        array.push(i);
        reversedArray.unshift(i);
      }
    });

    if (
      reversedArray.join("").toLocaleLowerCase() ==
      array.join("").toLocaleLowerCase()
    ) {
      setIsPalindrome(true);
    }
  };

  const letsCheckItOut = () => {
    if (toEvaluate == "") {
      setError("Debes ingresar una palabra o frase");
      setShowError(true);
    } else {
      palindromo(toEvaluate);
      setShowError(false);
      setShowResults(true);
    }
  };

  const changeValueToEvaluate = (value) => {
    setIsPalindrome(false);
    setShowResults(false);
    setShowError(false);
    setToEvaluate(value);
  };

  return (
    <div className="py-4 max-w-[800px] m-auto ">
      <h1 className="text-2xl text-gray-800 text-center pb-6 font-bold">
        ¿Es Palíndromo?
      </h1>

      <div className="fixed bottom-4 w-full z-10 flex flex-row justify-between px-3">
        <Link to="/" className="bg-blue-400 px-6 py-2 text-white rounded-full ">
          {" "}
          Volver a la lista{" "}
        </Link>

        <a
          className=" text-blue-400 flex"
          href="https://github.com/fedeferrelli/jsexercises/blob/main/src/Components/palindromo/Palindrome.jsx"
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
          Ingresa la palabra o frase
        </label>
        <textarea
          rows="4"
          id="toEvaluate"
          placeholder="por ejemplo: Luz azul"
          className="w-full p-4 rounded-md border border-gray-300 my-2 m-auto"
          onChange={(e) => {
            changeValueToEvaluate(e.target.value);
          }}
        ></textarea>

        <button
          type="submit"
          className="w-full m-auto p-4 bg-blue-400 rounded-md uppercase text-white"
          onClick={() => {
            letsCheckItOut();
          }}
        >
          ¿es palíndromo?
        </button>
      </section>

      {showError && (
        <Fade duration="500">
          <div className="w-11/12 m-auto mt-1 text-center rounded-lg  text-red-500 font-semibold">
            {error}
          </div>
        </Fade>
      )}

      <section className="mt-4 flex flex-col  w-11/12 m-auto  rounded-lg overflow-hidden shadow-md   mb-12">
        {showResults && (
          <Fade duration="500">
            <div className="h-full w-full text-center">
              {isPalindrome ? (
                <div className="bg-green-300 text-gray-600 text-xl p-3">
                  <span className="block text-xl text-gray-700 font-bold mb-4">
                    Pueba superada!
                  </span>
                  {toEvaluate}
                  <span className="block text-center text-gray-700 font-bold mt-4">
                    es Palíndromo
                  </span>
                </div>
              ) : (
                <div className="bg-red-300 text-gray-600 text-xl p-3">
                  <span className="block text-xl text-gray-700 font-bold mb-4">
                    Ooops!
                  </span>
                  {toEvaluate}
                  <span className="block text-center text-gray-700 font-bold mt-4">
                    NO es Palíndromo
                  </span>
                </div>
              )}
            </div>
          </Fade>
        )}
      </section>
    </div>
  );
}

export default Palindrome;
