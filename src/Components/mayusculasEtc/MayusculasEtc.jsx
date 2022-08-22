import React, { useState } from "react";

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

function MayusculasEtc() {
  const [result, setResult] = useState([]);
  const [toEvaluate, setToEvaluate] = useState();
  const [feature, setFeature] = useState("mayusculas");
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const mayusculas = (string) => {
    setResult(string.toUpperCase());
    setShowResults(true);
  };

  const minusculas = (string) => {
    setResult(string.toLowerCase());
    setShowResults(true);
  };

  const vowels = (string) => {
    let arrayAux = [...string];
    let newArray = [];
    let vowelsSet = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú", "ü"];

    arrayAux.map((e) => {
      if (vowelsSet.includes(e.toLowerCase())) {
        newArray.push(e.toUpperCase());
      } else newArray.push(e.toLowerCase());
    });

    setResult(newArray.join(""));
    setShowResults(true);
  };

  const constants = (string) => {
    let arrayAux = [...string];
    let newArray = [];
    let vowelsSet = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú", "ü"];

    arrayAux.map((e) => {
      if (vowelsSet.includes(e.toLowerCase())) {
        newArray.push(e.toLowerCase());
      } else newArray.push(e.toUpperCase());
    });

    setResult(newArray.join(""));
    setShowResults(true);
  };

  const minMay = (string) => {
    let arrayAux = [...string];
    let newArray = [];
    console.log("fede");

    arrayAux.map((e, index) => {
      if (index % 2 === 0) {
        newArray.push(e.toLowerCase());
      } else newArray.push(e.toUpperCase());
    });

    setResult(newArray.join(""));
    setShowResults(true);
  };

  const mayMin = (string) => {
    let arrayAux = [...string];
    let newArray = [];

    arrayAux.map((e, index) => {
      if (index % 2 !== 0) {
        newArray.push(e.toLowerCase());
      } else newArray.push(e.toUpperCase());
    });

    setResult(newArray.join(""));
    setShowResults(true);
  };

  const changeValueToEvaluate = (string) => {
    setShowResults(false);
    setShowError(false);
    setToEvaluate(string);
  };

  const letsCheckItOut = () => {
    if (toEvaluate === undefined || toEvaluate == "") {
      setError("Debes ingresar una palabra o frase");
      setShowError(true);
    } else if (feature === "mayusculas") {
      mayusculas(toEvaluate);
    } else if (feature === "minusculas") {
      minusculas(toEvaluate);
    } else if (feature === "vocales") {
      vowels(toEvaluate);
    } else if (feature === "constantes") {
      constantes(toEvaluate);
    } else if (feature === "minMay") {
      minMay(toEvaluate);
    } else if (feature === "mayMin") {
      mayMin(toEvaluate);
    }
  };

  return (
    <div className="py-4 max-w-[800px] m-auto ">
      <h1 className="text-2xl text-gray-800 text-center pb-6 font-bold">
        Mayusculas, etc
      </h1>

      <div className="fixed bottom-4 w-full z-10 flex flex-row justify-between px-3">
        <Link to="/" className="bg-blue-400 px-6 py-2 text-white rounded-full ">
          {" "}
          Volver a la lista{" "}
        </Link>

        <a
          className=" text-blue-400 flex"
          href="https://github.com/fedeferrelli/jsexercises/blob/main/src/Components/fizzBuzz/FizzBuzz.jsx"
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
        <textarea
          rows="4"
          id="toEvaluate"
          placeholder="ingresa palabra o frase"
          className="w-full p-4 rounded-md border border-gray-300 my-2 m-auto"
          onChange={(e) => {
            changeValueToEvaluate(e.target.value);
          }}
        ></textarea>

        <select
          name="select"
          className="w-full m-auto p-4  rounded-md border mb-4 border-gray-200"
          onChange={(e) => {
            setFeature(e.target.value);
          }}
        >
          <option value="mayusculas" defaultValue>
            MAYUSCULAS
          </option>
          <option value="minusculas">MINUSCULAS</option>
          <option value="vocales" defaultValue>
            vOcAlEs
          </option>
          <option value="constantes" defaultValue>
            CoNSTaNTeS
          </option>
          <option value="mayMin" defaultValue>
            MmMmMm
          </option>
          <option value="minMay" defaultValue>
            mMmMmM
          </option>
        </select>

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

      <section className="mt-4 flex flex-col  w-11/12 m-auto  rounded-lg overflow-hidden shadow-md mb-12">
        {showResults && (
          <Fade duration="500">
            <div className="h-full w-full text-center">
              <div className="bg-gray-400 text-gray-600 text-xl p-3 flex flex-wrap gap-2 justify-center">
                {result}
              </div>
            </div>
          </Fade>
        )}
      </section>
    </div>
  );
}

export default MayusculasEtc;
