console.log(document);
document.getElementById("hello").innerHTML = "hey Divya";

a = "hi";
b = a + 78;
console.log(b);
console.log(typeof b);

function x() {
  console.log("hi");
}

x();

var y = function (a, b) {
  return a * b;
};
console.log(y(6, 7));

var dog = {
  name: "tommy",
  breed: "golden retriver",
  bark: function () {
    console.log("woof");
  },
};
dog.bark();
var clg = function (x) {
  console.log(x);
};
clg(dog);

var list = [1, 2, 3];
list.push(6);
clg(list.length);
