function originalAttempt(arr) {
    const arr2 = [...arr];
    const reverseArray = [];

    const length = arr2.length

    for (let i = 0; i < length; i++) {
        let lastElement = arr2.pop()
        reverseArray.push(lastElement);
    }
    return reverseArray

//pop removes from back, unshift places in front
}

function whileLoop(arr) {
    const arr2 = [...arr];

    // equivalent to above
    // const arr2 = [];
    // for (let i = 0; i < arr.length; i++) {
    //     arr2.push(arr[i]);
    // }

    const reverseArray = [];

    let length = arr2.length

    while(0 < arr2.length){ // 0 !== myArray.length also works
        let lastElement = arr2.pop()
        reverseArray.push(lastElement);
    }
  return reverseArray;
}
//pop removes from back, unshift places in front

function arrayIndexApproach(arr) {
    const reverseArray = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        reverseArray[arr.length - 1 - i] = arr[i];
    }
 return reverseArray;

//pop removes from back, unshift places in front
}


function withStrings(str) {
    let secondString = "";
   for (let i=0; i < str.length; i++){
       secondString += str.charAt(str.length -1 - i);
   }
   return secondString;
}

function factorial1(n) {
    console.log(n)
    if (n===1){
        return n
    }
    return n * factorial1(n-1)
}

function factorialStarter2(n) {
    return factorial2(n ,1);
}


function factorial2(n, i) {
    if (i===n){
        return n
    }
    return i * factorial2(n, i+1)
}



function recursiveReverseStarter(ogStr) {
    return recursiveReverse2(ogStr, "");
}

function recursiveReverse(ogStr) {
    if (ogStr.length ===0){
        return ""
    }
    return ogStr.charAt(ogStr.length-1) + recursiveReverse(ogStr.substring(0,ogStr.length-1))
}
function recursiveReverse2(ogStr, newStr) {
    if (ogStr.length ===0){
        return newStr
    }
    return recursiveReverse2(ogStr.substr(0, ogStr.length - 1), newStr + ogStr.charAt(ogStr.length - 1))
}

const myArray = ['h', 'e', 'l', 'l', 'o'];
const myStr = "hello";
console.log(withStrings(myStr))
console.log(originalAttempt(myArray))
console.log(whileLoop(myArray))
console.log(arrayIndexApproach(myArray))
console.log(factorialStarter2(71))
console.log(recursiveReverseStarter(myStr))
