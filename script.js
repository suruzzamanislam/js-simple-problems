// 1. cubeNumber()
function cubeNumber(number) {
  if (typeof number !== 'number') {
    return 'Plese enter a number';
  } else {
    var result = Math.pow(number, 3);
    return result;
  }
}
var result1 = cubeNumber(4);
console.log(result1);
var result2 = cubeNumber(3);
console.log(result2);
console.log('Problem 1 end');

// 2. matchFinder()
function matchFinder(string1, string2) {
  if (typeof string1 == 'string' && typeof string2 == 'string') {
    if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'Plese input two string';
  }
}

let firstCheck = matchFinder('John Doe', 'ohn');
console.log(firstCheck);
let secondCheck = matchFinder('JavaScript', 'Code');
console.log(secondCheck);
console.log('Problem 2 end');

// 3.sortMaker()
function sortMaker(arr) {
  if (arr[0] > 0 && arr[1] > 0) {
    if (arr[0] < arr[1]) {
      return ([arr[0], arr[1]] = [arr[1], arr[0]]);
    } else if (arr[0] > arr[1]) {
      return arr;
    } else {
      return 'equal';
    }
  } else {
    return 'Invalid Input';
  }
}
let arr1 = sortMaker([1, 3]);
console.log(arr1);
let arr2 = sortMaker([11, 4]);
console.log(arr2);
let arr3 = sortMaker([11, 11]);
console.log(arr3);
let arr4 = sortMaker([-11, 4]);
console.log(arr4);
console.log('Problem 3 end');

// 4.findAddress()
function findAddress(obj) {
  let house = obj.house;
  let society = obj.society;
  let properties = Object.keys(obj);
  if (
    properties.includes('house') == false &&
    properties.includes('society') == false
  ) {
    house = '__';
    society = '__';
  } else if (properties.includes('house') == false) {
    house = '__';
  } else if (properties.includes('society') == false) {
    society = '__';
  }

  let result = obj.street + ',' + house + ',' + society;
  return result;
}
let obj1 = { street: 10, house: '15A', society: 'Earth Perfect' };
let result1obj = findAddress(obj1);
console.log(result1obj);
let obj2 = { street: 10, society: 'Earth Perfect' };
let result2obj = findAddress(obj2);
console.log(result2obj);
let obj3 = { street: 10 };
let result3obj = findAddress(obj3);
console.log(result3obj);
console.log('Problem 4 end');

// 5. canPay()
function canPay(changeArray, totalDue) {
  let totalmoney = 0;
  for (var i = 0; i < changeArray.length; i++) {
    totalmoney += changeArray[i];
  }
  if (changeArray.length == 0) {
    return 'Plese Pay Money';
  } else if (totalmoney >= totalDue) {
    return true;
  } else {
    return false;
  }
}
var fristTaka = [1, 3];
var chepsTaka = 10;
var isbyeCheps = canPay(fristTaka, chepsTaka);
console.log(isbyeCheps);
console.log('Problem 5 end');
