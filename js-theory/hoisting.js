getName2();
console.log(x); // undefined for var x,  reference error for let x
console.log(getName2)

var x= 8;
// the copy of getname2 is stored in memory phase for functions
function getName2() {
    console.log("Namaste Javascript");
}

// for arrow functions and this type of method definition
// the functions are treated as variables so stores as undefined
var getName3 = function () {

}

var getName = () => {
    console.log("Namaste Javascript");
} 

//Hoisting is a phenomemnon in JS by which you can access the variables
//  and functions even before they are initialized. We can access them without getting any error

/*
1. Variable declarations are scanned and are made undefined
2. Function declarations are scanned and are made available

*/