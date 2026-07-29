// // print 5 numbers from 1 to 5
// var a=5;
// for (let i = 1; i <= a; i++) {
//     console.log(i);
// }
// function sum(arguments) {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }
// console.log(sum([1, 2, 3, 4, 5])); // Output: 15
// let c=[1,2,3,4,5];
// let b=c.indexOf(3);
// console.log(b); // Output: 

// hello();
// function hello(){
//     console.log("hello tacfsjkxhbdgjcbhachyv hnskjfdacx bns sdahancaczscaizhclzacahc hahcac oahdcn c")
// }
// let z=function (a,b){return a+b;}
// console.log(z(1,2));
// let n=(a,b)=>a+b;
// console.log(n(60,7));
// const a=()=>({x:1,b:2})
// console.log(a());
// function sumx(){console.log(arguments[0]+arguments[1]);
//     console.log(arguments[0]);
// }
//console.log(sumx(1,2));
// const sum=(...rest)=>console.log(rest);
// sum(12,3,4,4,56,7,8,8,68);
// let a=[1,2,3,4,5,6];
// let b=[...a,7,8,9,10]
// console.log(...b);
// console.log(Math.max(...a,...b))

// function a(b){
//     b();
// }
// function b(){
//     console.log("hello");
// }
// const c=a(b);
// console.log(c);

function outer(){
    let a=3;
    return function inner(){
        a++;
        console.log(a);
    }
    inner();
}
const f=outer();
f();
let x=new Array(2,3,435,5,4,433);
console.log(x.at(-1));