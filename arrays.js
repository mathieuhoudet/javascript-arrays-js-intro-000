var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array1,newValue) {
  return [newValue,...array1];
}

function destructivelyAddElementToBeginningOfArray(array1,newValue2){
  var array1.unshift("newValue2");
  return array1;
}
