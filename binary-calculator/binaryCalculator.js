document.getElementById("btn0").onclick = function () {
  document.getElementById("res").innerHTML =
    document.getElementById("res").innerHTML + 0;
};

function result() {
  var value = document.getElementById("res").innerHTML;
  let re = /\d+/g; //numbers
  let re2 = /[\+\-\*\/]+/g; //operators
  var numbers = value.split(re2);
  var operators = value.split(re);
  var op = operators[1];
  var a = parseInt(numbers[0], 2);
  var b = parseInt(numbers[1], 2);
  var result = Math.floor(eval(a + op + b));
  var resBinary = parseInt(result, 10).toString(2);
  document.getElementById("res").innerHTML = resBinary;
}

function action(e) {
  var btn = e.target;
  document.getElementById("res").innerHTML =
    document.getElementById("res").innerHTML +
    document.getElementById(btn.id).innerHTML;
}

function clear() {
  document.getElementById("res").innerHTML = "";
}

document.getElementById("btn1").onclick = action;
document.getElementById("btnSum").onclick = action;
document.getElementById("btnSub").onclick = action;
document.getElementById("btnMul").onclick = action;
document.getElementById("btnDiv").onclick = action;
document.getElementById("btnEql").onclick = result;
document.getElementById("btnClr").onclick = clear;
