import React from 'react';

import {Link} from 'react-router-dom'

function Home() {

    const ejercicios = [{name: '¿Es Palíndromo?', link:"/palindromo"}]

    return (
       <main className="py-4"> 

        <h1 className="text-2xl pb-6 text-gray-800 text-center font-bold">Ejercicios</h1>   

      <div className="w-11/12 m-auto flex flex-row sm:flex-wrap max-w-[1000px]">
        {ejercicios.map((e) => (
          <Link
            to={e.link}
            className="p-4 w-full sm:w-80  sm:text-center text-xl font-semibold text-gray-800 bg-gray-100 border border-gray-300 rounded-lg shadow-md"
            key={e.name}
          >
            {e.name}
          </Link>
        ))}
      </div>

      </main>
    );
}

export default Home
