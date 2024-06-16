let str= "Good Morning";
let str1= ' How are you';
let str2= " dear."
// let str= 'Good Morning';
// let str=`Good Morning`;
// console.log(str);
// console.log(str[3]);
// console.log(str.length);

// let result = str.toUpperCase();
// console.log(result); // GOOD MORNING
// if we dont want to store in another varibale then, we can reinitalize str variable like this:
// str=str.toUpperCase();  // here str is reinitializes
// console.log(str);

// console.log(str)
// str=str.trim()    // removes extra spaces from start and end
// console.log(str.length);
// console.log(str)

// str= str.indexOf('M')
// console.log(str) // returns index of 'M' if not found else returns -1

// str= str.lastIndexOf('M')
// console.log(str)  // returns index of M but of the latest index that appers in the last
// JavaScript is a case sensitive language, if we write 'M' in smallcase then -1 will return coz 'M' is wriiten in uppercase.

// str = str.charAt(10);
// console.log(str); // returns character at index 10 // return value which is present at the index number

// str = str.charCodeAt(10)
// console.log(str) // returns ascii value of the number

// str = str.concat(str1,str2); // if have to merge more than 2 strings then, "Str= str.concat(str1, str2, str3);"
// console.log(str)



// str = str1.includes("Good")
// console.log(str) // returns boolean value

// str=  str.replace("Good", "Bad");
// console.log(str); //change good morning to bad morning if "good" is present in the string

let str3= "Good BYE Morning";
// console.log(str3);
// str3 = str3. slice(1,4);
// console.log(str3);
// str3 = str.split(" ");
// console.log(str3);

str3 = str.substring(2,5)
console.log(str3)
// both slice and substring is same