//the beginimg of code
function number(string, numberOfCharacters) {
  //made a variable to show the final results.
  let output = 0;
  //at first removing the spaces (using replaceAll method and replacing each space with nothing.). then extracting the targeted part(using substring method.)
  output = string.replaceAll(" ", "").substr(0, numberOfCharacters);
  return output;
}
console.log(number("ak-47 the arabic muslim loves to hooootoootototototoooooo", 20));

