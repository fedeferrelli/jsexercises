import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home"
import Palindrome from "./Components/palindromo/Palindrome"


function App() {

  return (
    <div className="bg-gray-300 min-h-screen">

<Router>
          <Routes>
           <Route path="/" exact element={<Home/>} /> 
           
            <Route path="/palindromo" exact element={<Palindrome/>} />
            

          </Routes>
        </Router>

     
    </div>
  )
}

export default App
