var id = [1, 2, 3, 6, 9, 8, 7, 4];
var rotate = [1, 2, 3, 6, 9, 8, 7, 4];

var button = document.getElementById("btn5");

button.onclick = function () {
  rotate.unshift(rotate.pop()); //pops the last element of the array and keeps in the 1st place

  for (let i = 0; i < rotate.length; i++) {
    document.getElementById("btn" + id[i]).innerHTML = rotate[i];
  }
};
