// /* A Chain adding function  
// We want to create a function that will add numbers together when called in succession.

// add(1)(2);
// // returns 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // 6
// add(1)(2)(3)(4); // 10
// add(1)(2)(3)(4)(5); // 15
// and so on.

// A single call should return the number passed in.

// add(1); // 1
// We should be able to store the returned values and reuse them.

// var addTwo = add(2);
// addTwo; // 2
// addTwo + 5; // 7
// addTwo(3); // 5
// addTwo(3)(5); // 10
// We can assume any number being passed in will be valid whole number.
// */
// function add(n) {
//   const sum = function (b) {
//     return add(n + b);
//   };
//   sum.valueOf = function () {
//     return n;
//   };
//   return sum;
// }

// let x = add(1);

// console.log(x(1)());
// console.log(add(1)());

// function curry(f) {
//   // curry(f) does the currying transform
//   return function (a) {
//     return function (b) {
//       return f(a, b);
//     };
//   };
// }
// function sum(a, b) {
//   return a + b;
// }

// let curriedSum = curry(sum);

// console.log(curriedSum(1)(1));

// let y = curry(1);
// console.log("***************************");
// console.log(curry(1));
// console.log(y);
// console.log(y(1));


// let multiply = function(x,y){
//     console.log(x*y)
// }

// let multiplyByTwo= multiply.bind(this,2)

// multiplyByTwo(5)

// let multiplyByThree= multiply.bind(this,3)

// multiplyByThree(43) 


// let f = function(x){
//     return function (y){
//         console.log(x+y)
//     }
// }
// let add=f(2)
// add(3)

let sum = function(a){
    return function(b){
        if(b){
            return sum(a+b)
        }
        return a
    }
}

//let sum= a=>b=> b?sum(a+b):a
console.log(sum(1)())
console.log(sum(1)(2)())