var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
console.log(chocolateBars);

var addElementToBeginningOfArray = function () {
  var array1 = ["test1", "test2", "test3"];
  array1.unshift("test 0");
  return array1;
}
console.log(addElementToBeginningOfArray);

var destructivelyAddElementToBeginningOfArray = function () {
  var array2 = ["testa",...addElementToBeginningOfArray];
  return array2;
}
