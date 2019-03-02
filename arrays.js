var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
console.log(chocolateBars);

function addElementToBeginningOfArray(array1,newValue) {
  var array1 = ["test1", "test2", "test3"];
  array1.unshift(newValue);
  return array1;
}
addElementToBeginningOfArray(array1,"haha")

/*
var destructivelyAddElementToBeginningOfArray = function () {
  var array2 = ["testa",...addElementToBeginningOfArray];
  return array2;
}
console.log(destructivelyAddElementToBeginningOfArray);
*/
