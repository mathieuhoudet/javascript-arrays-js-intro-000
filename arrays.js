var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array1,newValue) {
  return [newValue,...array1];
}

function destructivelyAddElementToBeginningOfArray(array1,newValue2){
  array1.unshift(newValue2);
  return array1;
}


function addElementToEndOfArray(array2,newValue3){
  return [...array2,newValue3];
}
