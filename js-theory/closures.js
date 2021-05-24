//4 the values a b wont be garbage collected they retain there value
function z() {
  var b = 200;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();

//3 corner cases
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}
var z = x();
console.log(z); // 100 becoz the in the lexical scope not the value 7 is returned but the reference to variable a will be shared
z();

// 2
function x() {
    var a=7;
    function y(){
        console.log(a)
    }
    return y; // both function and its lexical env is returned

    /*we can do the above as
    return function y(){
        console.log(a);
    }
    */
}
var z=x(); // after assiging to z the function x is deleted.
// here z along with the function y it also has its lexical environement where reference of value a will be returned
console.log(z);
z()

1
function x() {
    var a=7;
    function y(){
        console.log(a); // function y is bind to x :: here a closure x contains a: 7
    }
    y();
}
x()

//function along with its lexical scope forms a bundle that is called closure


// Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting


// uses of closures:
// 1. modula design pattern
// 2. currying
// 3. functions like once 
// 4. memoize
// 5. maintaining state in async
// 6. setTimeouts
// 7. Iterartors..
