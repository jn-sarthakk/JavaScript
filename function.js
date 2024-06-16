// This is called rest parameter and "..." is spread operator which create "d" array automatically through rest parameter
// let hello =function (a,b,c,...d){
//     console.log(a+b+c);
//     console.log(d);
// }
// hello (10,20,30,40,50,60,70);

// function hello (){
//     return 10;  // return function should be only one in entire function. return should be the last line of the funcion, no other statements should be after return function
// }
// hello();
// console.log(hello()); // output: 10

// function hello (...x){
//     console.log(x);
// }
// hello(10,20,30,40,50);

// ques: take array as a input and print array in the console.log
// let hello = function(...a){
//     console.log(a);
// }
// hello(10,20,30,40);

//Arrow Function
// let hello = a => a;
// console.log(hello(20));  // we can print the outout in both form either console.log or by making new variable.
// let res = hello(10);
// console.log(res);

// IIF : Immediate Invoke Function
// (a=> console.log("hii"))();
// (a=> console.log(a))(10);

// This is called function inside a function
// function outer(a){
//     function inner(){

//     }
//     inner();
// }
// console.log(outer(20));