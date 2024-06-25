// let obj = {
//     name:"Sarthak",
//     age:20,
//     email:"jnsarthak@gmail.com",
//     "mobile no" : 982718729
// }

// console.log(obj.name);
// // console.log(obj.mobile no);    // we have to use here subscript operator because if we use dot operator then it will access "mobile" and will return undefined
// console.log(obj["mobile no"]); 



// let key1 = "firstName";
// let key2 = "age";

// // let obj2 ={
// //     key1:"Sarthak",
// //     key2: 20
// // }  
// // this wil return reference error, firstName is not defined . so to access this we have to use subscript operator at key1 and key inside object
// let obj2 ={
//     [key1]:"Sarthak",
//     [key2]: 20
// }
// console.log(obj2.firstName);



// let obj = {
//     name:"Sarthak",
//     age:20,
//     email:"jnsarthak@gmail.com",
//     "mobile no" : 982718729,
//     arr:["Heyy", "Sarthak", "What's up"],   // we can also store array 
//     details:{                               // this is also array
//         aadhar: 342232,
//         pancard:34863
//     }
// }
// console.log(obj.arr[1]);   // to access array at particular index then, obj.arrray_name[index number]
// console.log(obj.details.pancard);  // to access array inside array key
// for(element in obj){
//     // console.log(obj[element]);  // to access value, but to print both key and value then, 
//     console.log(element,obj[element]);  // "," is used for printing both key and value. Here "element" is a variable. 
// }


// Object destructuring
// let obj = {
//     name:"Sarthak",
//     age:20,
//     email:"jnsarthak@gmail.com",
//     arr:["Heyy", "Sarthak", "What's up"],   // we can also store array 
//     details:{                               // this is also array
//         aadhar: 342232,
//         pancard:34863
//     }
// }
// let {name,age,email, arr,details}=obj;
// console.log(name);




let firstname = "name";
let old ="age";

let person = {
    // [firstname]: ["Sarthak", "Jain"],  // reference variable
    // [old]: 20,  // reference variable 
    name: ["Sarthak", "Jain"],
    age: 20,
    height: "5.6feet",
    weight: "60kg",
    "body details": [1, "nose",2,"eyes", "hair",2,"legs","hands"],
    "hand details": {
        fingers: 8,
        thumb: 2,
        nails: 10,
    }
};
// console.log(person.name);
// console.log(person.name[0]);
// console.log(person.height);
// console.log(person["body details"]);
// console.log(person["body details"][6]);
// to access array inside a array: 
for (element in person){
    console.log(person[element]);
    console.log(person[element, person[element]]);
}
