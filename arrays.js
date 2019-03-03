var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
console.log(chocolateBars);

function addElementToBeginningOfArray(array1,newValue) {
  return [newValue,...array1];
}