var a=89; //stored in global memory
let b =79; //stored in Script memory
const c=99 //stored in Script 
{
    var a=10; //stored in global memory
    let b=20; //stored in block memory
    const c=30;//stored in block 
    console.log('a=',a);
    console.log('b=',b);
    console.log('c=',c);
}
console.log('a=',a); //10
console.log('b=',b); //shadowing 
console.log('c=',c);//shadowing


//function shadowing
const d =100;
function x() {
    const d =30;
    console.log(d);

}
x();
console.log(d)

//illegal shadowing
let e =20;
{
    var e =30;
}

//this is valid becoz var is having its own scope
let g=20;
function y(){
    var g=34;
}

//this is valid
var f=20;
{
    let f=89;
}


//lexical block scope
const h=10;
{
    const h =100;
    {
        const h=200;
    }
}