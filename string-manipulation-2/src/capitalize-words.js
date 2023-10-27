/* exported capitalizeWords */
// splice words at the space into a new variable
// make the first index of each word capital
// return the varibale

function capitalizeWords(string) {
  const words = string.split(' ');
  let captain = '';
  for (let i = 0; i < words.length; i++) {
    captain +=
      words[i][0].toUpperCase() + words[i].slice(1).toLowerCase() + ' ';
  }
  return captain.trim();
}

// split string inot seprate words and assign a variable
// new empty variable
// loop through the seprate words
// make the first letter of each word upper, and the rest of the letters lower, and assign to variable and add space
// return and trim variable
