// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   // pass in the variable i so that each function
//   // has access to the correct index
//   setTimeout(function(i_local) {
//     return function() {
//       console.log('The index of this number is: ' + i_local);
//     }
//   }(i), 3000);
// }

// for(var i=0;i<3;i++){
//     setTimeout(()=>console.log(i),5000)
// }

function func1() {
  setTimeout(() => {
    console.log(x);
    console.log(y);
  }, 2000);
}
var x = 2;
let y = 12;
