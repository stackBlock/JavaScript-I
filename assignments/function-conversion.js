
console.log(`\n\n\n\nFUNCTION-CONVERSION.JS PAGE vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv\n`)

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax


let myFunction = () => {
console.log(`\n\n`, "Function was invoked!");
};
myFunction();


let anotherFunction = (param) => {
  return param;
};
console.log(`\n`, anotherFunction("Example"));

let add = (param1, param2) => {
  return param1 + param2;
};
console.log(`\n`, add(1,2));

let subtract = (param1, param2) => {
  return param1 - param2;
};
console.log(`\n`, subtract(1,2));


// Stretch

exampleArray = [1,2,3,4];
const triple = exampleArray.map((num) => {
  return num * 3;
});
console.log(triple);