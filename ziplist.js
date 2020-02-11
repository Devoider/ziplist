function ziplist(arr1, arr2) {
  const output = [];
  let j = 0;
  for (let i = 0; i < arr1.length; i++) {
    output[j] = arr1[i];
    j++;
    output[j] = arr2[i];
    j++;
  }
  return output;
}
function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}
console.log(ziplist(['1', '2', '3'], ['a', 'b', 'c']));
console.log(zipListTheSimpleWay(['1', '2', '3'], ['a', 'b', 'c']));
