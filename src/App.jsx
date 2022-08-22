import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Palindrome from "./Components/palindromo/Palindrome";
import Factorial from "./Components/factorial/Factorial";
import FizzBuzz from "./Components/fizzBuzz/FizzBuzz";
import MayusculasEtc from "./Components/mayusculasEtc/MayusculasEtc";


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
            
          </Routes>
      </Router>

     
    </div>
  )
}

export default App
