
exports.min = function min (array) {
  if (Array.isArray(array) && array.length ){
    let minumal = array[0];
    array.forEach(element => {
      if (element < minumal) {
        minumal = element;
      }
    });
    return minumal;
  } else {return 0;}
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length ){
    let maximal = array[0];
    array.forEach(element => {
      if (element > maximal) {
        maximal = element;
      }
    });
    return maximal;

  } else {
  return 0;}
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length ){
    let total = 0;
  array.forEach(element => {
    total = total + element;
  });
  return (total / array.length);
} else {return 0;}}