import React, { useState } from "react";

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

function Piedra_papel_tijera() {
  const [result, setResult] = useState();
  
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [countGames, setCountGames] = useState(0);

  const [myChoice, setMyChoice] = useState('Aún nada');
  
  const [machineWeapon, setMachineWeapon] = useState('machine');
  

  const [humanScore, setHumanScore] = useState(0)
  const [machineScore, setMachineScore] = useState(0)

  
  const calcular = (choice) =>{
    
    let weapons = ['piedra', 'papel', 'tijera']
    let random = Math.random()
    
    let machineChoice = 0;
    if(random<=1/3){machineChoice=0}
    else if(random<=2/3){machineChoice=1}
    else {machineChoice=2} 

    setMachineWeapon(weapons[machineChoice])
    setMyChoice(weapons[choice]);
    
    let resultNumber = choice-machineChoice

    let result = 'lets see';

    if(resultNumber==-1 || resultNumber==2){result= 'ganó la máquina'; setMachineScore(machineScore+1); setCountGames(countGames+1)}
    else if(resultNumber==1 || resultNumber==-2){result='ganó el humano'; setHumanScore(humanScore+1); setCountGames(countGames+1)}
    else {result= 'empate'; setCountGames(countGames+1)}

    setResult(result)
    setShowResults(true)
 }
  return (
    <div className="py-4 max-w-[800px] m-auto ">
      <h1 className="text-2xl text-gray-800 text-center pb-6 font-bold">
        Piedra, Papel o Tijera
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
 
 
 {/*        <label
          htmlFor="toEvaluate"
          className="w-full text-center text-xl text-gray-800 mb-4 font-semibold"
        >
          Ingresa la palabra
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
          <option value="capitalize">Capitalize</option>
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
        </select> */}

    <section className="flex flex-col gap-4 tracking-wider">
          <button
          className="w-full text-center m-auto p-4 bg-blue-400 rounded-md uppercase text-white"
          onClick={() => {
            calcular(0);
          }}
        >
          Piedra
        </button>
        <button
          className="w-full text-center m-auto p-4 bg-blue-400 rounded-md uppercase text-white"
          onClick={() => {
            calcular(1);
          }}
        >
          Papel
        </button>
        <button
          className="w-full text-center m-auto p-4 bg-blue-400 rounded-md uppercase text-white"
          onClick={() => {
            calcular(2);
          }}
        >
          Tijera
        </button>
      </section>



        {/* <button
          type="submit"
          className="w-full m-auto p-4 bg-blue-400 rounded-md uppercase text-white"
          onClick={() => {
            letsCheckItOut();
          }}
        >
          Modificar!{" "}
        </button> */}
      </section>

      {showError && (
        <Fade duration="500">
          <div className="w-11/12 m-auto mt-1 text-center rounded-lg  text-red-500 font-semibold">
            {error}
          </div>
        </Fade>
      )}

      <section className="mt-4 flex flex-col gap-0 w-11/12 m-auto  rounded-lg overflow-hidden shadow-md mb-12">
        {showResults && (
          <Fade duration="500">
            <div className="h-full w-full text-center">
              <div className="bg-gray-400 text-gray-600 text-xl p-3 flex flex-wrap gap-2 justify-center">
                Mi elección: <span className="uppercase font-semibold">{myChoice}</span>
              </div>
              <div className="bg-gray-400 text-gray-600 text-xl p-3 flex flex-wrap gap-2 justify-center">
                Machine Choice: <span className="uppercase font-semibold">{machineWeapon}</span>
              </div>
            </div>
            
            <div className="h-full w-full text-center">
              <div className="bg-gray-600 text-gray-400 text-xl p-3 flex flex-wrap gap-2 justify-center uppercase">
                {result}
              </div>
            </div>

            <div className="h-full w-full text-center pt-2 text-xl text-gray-800 bg-gray-400">

            <div className="text-gray-600">Who's Keeping Score?</div>

              <div className="text-gray-700 text-xl p-3 flex flex-row gap-2 justify-evenly">
             
              <div className={machineScore<humanScore ? "w-1/3 rounded-lg p-2 border border-green-600 bg-green-500" : machineScore==humanScore ? "rounded-lg p-2 border border-gray-800 w-1/3 " :"p-2 rounded-lg w-1/3  bg-red-400 border border-red-500"}>
                Tú: <span className="block">{humanScore}</span>
              </div> 
             
           <div className={machineScore>humanScore ? "w-1/3  rounded-lg p-2 border-green-600 border bg-green-500" : machineScore==humanScore ? "rounded-lg p-2 border border-gray-800 w-1/3 " :"w-1/3  p-2 rounded-lg bg-red-400 border border-red-500"}>
             Machine: <span className="block">{machineScore}</span>
              </div>
              
              
              </div>

              <div className="text-md text-gray-700 py-2 font-thin ">{countGames} {countGames===1 ? 'juego' : 'juegos'} </div>
              
            </div>


          </Fade>
        )}
      </section>
    </div>
  );
}

export default Piedra_papel_tijera;
