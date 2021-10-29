let name = {
  firstName: "Divya",
  lastName: "Reddy",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

name.printFullName();

let name2 = {
  firstName: "Nancheri",
  lastName: "Reddy",
};
name.printFullName.call(name2);

let displayFullName = function (hometown, state) {
  console.log(this.firstName + " " + this.lastName+ " "+ hometown+ " "+ state);
};
displayFullName.call(name2, "hyderabad","Telangana")

// call: used to invoke a function directly by passing the reference to this variable
//call method: we can do function borrowing
// we can borrow functions from other objects and use it with some other objects
// each and every function has an access to the special function called call
// the 1st argument to call method is with reference to the this variable
// the 2nd will be extra argumnent like hometown which it not refereneced to this variable

//apply same as call method except it takes the 2nd argument as arraylist
// in call method we pass arguments comma separated whereas in apply we send as list
// displayFullName.call(name2, "hyderabad","Telangana")
// displayFullName.apply(name2, ["hyderabad","Telangana"])
displayFullName.apply(name2, ["hyderabad","Telangana"])

//bind: does not directly invoke the method but gives us a copy of method which can be invoked later
//only diff between call and bind is
// bind gives us a copy of function binding to the object passed which can be invoked later
let details = displayFullName.bind(name2, "hyd","Telangana")
console.log(details) // prints function copy
details();