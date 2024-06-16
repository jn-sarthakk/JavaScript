"use strict"

// var x = 10;
// // var x = 70;
// x= 70 // we can re initialize var 

// const x = 10;
// // const x = 70; // we can not re initialize const

// console.log(x);


//global scope and variable scope
for (var i=1;i<=10;i++){   // we can use let and const here 
   console.log(i);
}
console.log(i)  // here we can use x so var is global scope

let x = BigInt(235234345454676754324235256);
console.log(x);
console.log(Number.MAX_SAFE_INTEGER)
console.log(typeof(x));

