/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  const result = operations.reduce((acc, curr) => curr[1] === "+" ? ++acc : --acc, 0)

  return result;
    
};