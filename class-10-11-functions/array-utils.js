function myMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i));
  }

  return result;
}

function myFilter(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      result.push(array[i]);
    }
  }

  return result;
}

function myReduce(array, callback, initial) {
  let accumulator = initial;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
}

function myFlat(array, depth = 1) {
  const result = [];

  function flatten(arr, currentDepth) {
    for (const item of arr) {
      if (Array.isArray(item) && currentDepth > 0) {
        flatten(item, currentDepth - 1);
      } else {
        result.push(item);
      }
    }
  }

  flatten(array, depth);

  return result;
}
