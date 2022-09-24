import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Palindrome from "./Components/palindromo/Palindrome";
import Factorial from "./Components/factorial/Factorial";
import FizzBuzz from "./Components/fizzBuzz/FizzBuzz";
import MayusculasEtc from "./Components/mayusculasEtc/MayusculasEtc";
import Armstrong from "./Components/armstrong/Armstrong";
import Fibonacci from "./Components/fibonacci/Fibonacci";
import RomanNumbers from "./Components/romanNumbers/RomanNumbers";


function App() {

  return (
    <div className="bg-gray-300 min-h-screen">

      <Router>
          <Routes>

            <Route path="/" exact element={<Home/>}/> 
           
            <Route path="/palindromo" exact element={<Palindrome/>}/>

            <Route path="/factorial" exact element ={<Factorial/>}/>

            <Route path="/fizzbuzz" exact element = {<FizzBuzz/>}/>

            <Route path="/mayusculas" exact element = {<MayusculasEtc/>}/>
            
            <Route path="/armstrong" exact element = {<Armstrong/>}/>

            <Route path="/fibonacci" exact element = {<Fibonacci/>}/>

            <Route path="/roman" exact element = {<RomanNumbers/>}/>
             
          </Routes>
      </Router>

     
    </div>
  )
}

export default App
