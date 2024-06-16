// let a = [10, 'a', null, 'Hello', undefined, 3435323434354n, 12.5, true];
// console.log(Array.isArray(a));  // to check 'a' is array or not

// let b = new Array(3); // here new is keyword and 'new' is used to create an array and 'new' is a constructor function
// b[0]= "hii";

// b[1]= "hello",

// for (let i=0; i<b.length;i++){
//     b[i] = prompt ("Enter your name");   // prompt always takes string input 
// }
// console.log(b)

// let c = new Array(3);
// for (let i=0; i<c.length;i++){
//     c[i] = prompt ("Enter your name");   // prompt always takes string input 
//     console.log(c[0]+c[1]);
// }
// console.log(c);


// conversion of number to string
// let x=10;
// console.log(typeof(x));
// let str = String(x);
// console.log(typeof(str));


//Conversion of string to number
// let x="Sarthak";
// console.log(typeof(x));
// let str = Number(x);
// console.log(typeof(str));

// let x=prompt("Enter a number");
// console.log(typeof(x));
// output of this will be string but to take number as a output by prompt simply add "+" after "=". like this
// let x=+prompt("Enter a number");
// console.log(typeof(x));
// and to convert number to string then simply add empty strings. like this:
// let x= +""prompt("Enter a number");
// console.log(typeof(x));

// Array methods

// push, pop, shift and unshift methods
// console.log(a);
// a.push("Good Evening", "all of you");  // push return length
// a.push("Nothing");
// console.log(a);
// a.pop();   // pop return element
// a.unshift("new element");
// console.log(a);
// a.shift();
// console.log(a);

// // concat method
// let d =['raju', 'bheem', 23, 4535n]
// let e= [11,12,13];
// let newArray= d.concat([32323,454,"Shubham"]);
// console.log(newArray);

let arr = [10 ,'a', null, 'Hello', undefined, 3435323434354n, 12.5, true];
let[a,,b] = arr;   // this is called array destructuring. this will store value of index 0 in a, and index 1 value in b. but if we want index value 3 is stored in b then add 'let [a,,b]' comma seperator to jump to next value
console.log(a,b);

// // console.log(arr.fill(0,2,6 ));    // arr.fill(start, value, fill) 

// console.log(arr.includes('Hello'));
// console.log(arr.indexOf('Hello'));
// console.log(arr.join(","));

// arr= arr.slice(3,6)  // arr.slice(start, end) used to delete items from start index to end index
// console.log(arr);

// arr= arr.splice(3,6)  // arr.splice(start, count)  used to delete items but takes first start index and from that start inex how many items we have to delete i.e 2 elements/ 3 elements
// console.log(arr);

// arr = arr.splice(3,0, "item1", "item2", "item3")  // used to add elements also. arr.splice(4,0, items to add)  
// console.log(arr);

