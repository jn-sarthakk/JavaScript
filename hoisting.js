// console.log(a);  //this will show reference error
// console.log(b);  // this will also show reference error. because let and const cannot be hoisted 
// console.log(c);  //  this will show undefined because variable created with var is assigned "undefined". this is ES6 feature
// let a = "good"
// const b = "Excellent"
// var c = "nice"

// // hii();
// console.log(hii);
// var hii = function(){
//     console.log("This is hii function");
// }


hii();
var hii =()=>{
    console.log("This is hii function");
}
// arrow functions cannot be hoisted
