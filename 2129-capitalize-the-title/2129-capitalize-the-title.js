/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
  let newAns = title.split(" ");

  for (let i = 0; i < newAns.length; i++) {
    if (newAns[i].length === 1 || newAns[i].length === 2) {
      newAns[i] = newAns[i].toLowerCase();
    } else {
      newAns[i] = newAns[i][0].toUpperCase() + newAns[i].slice(1).toLowerCase();
    }
  }

  return newAns.join(" ");

    
};