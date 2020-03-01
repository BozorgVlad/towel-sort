
// You should implement your task here.

 module.exports = function towelSort (matrix) {
  let res = [];
  if (!Array.isArray(matrix)) {
    return [];
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i & 1) {
      matrix[i].reverse();
    }
    for (let j = 0; j < matrix[i].length; j++) {
      res.push(matrix[i][j]);
    };
  };
  return res;
}

