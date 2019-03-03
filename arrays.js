var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
console.log(chocolateBars);

function addElementToBeginningOfArray(array1,newValue) {
  return [newValue,...array1];
}
addElementToBeginningOfArray(array1,"haha")

/*
var destructivelyAddElementToBeginningOfArray = function () {
  var array2 = ["testa",...addElementToBeginningOfArray];
  return array2;
}
console.log(destructivelyAddElementToBeginningOfArray);
*/
