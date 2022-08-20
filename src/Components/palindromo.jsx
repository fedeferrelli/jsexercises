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


  if(reversedArray.join("").toLocaleLowerCase() ==
  array.join("").toLocaleLowerCase()) return `${string} es palíndromo!`
  else return `${string} NO es palíndromo!`

  
};

export default palindromo;
