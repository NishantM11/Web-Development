console.log ("Hello, World!");

// Learning about var, let and const
var a=1; 
a =2;               // var can be reassigned
console.log(a);

let b=3;
b=4;                // let can be reassigned
console.log(b);

const c=5;
//c=6;             // const cannot be reassigned, this will throw an error
console.log(c);

// let and const is what we should use in modern JavaScript


// Data Types in JavaScript
let Fname= "Nishant";
let age = 25;
let isStudent = true;

console.log("The name of the person is " + Fname+ " ,the age of the person is "+ age + " ,is the person a student? " + isStudent);


// if-else statement
if (isStudent==true){
    console.log(Fname + " is a student.");
}else{
    console.log(Fname + " is not a student.");
}

// for loop
ans=0;
for (let i=0; i<=100; i++){
    ans=ans+1;
}
console.log("The final value of ans is: " + ans);