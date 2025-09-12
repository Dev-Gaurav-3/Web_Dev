// console.log("I am hacker")
// console.log("You are hecker")

// setTimeout(() => {
//     console.log("This will print after 3s");
// }, 3000); // even if this is 0 this will execute later

// console.log("helllo");

// const fn = () => {
//     console.log("Nothing");
// }


// const callback = (arg,fn) => {
//     console.log(arg);
//     fn();
// }


// const loadScript =  (src,callback) => {
//     let sc = document.createElement("script");
//     sc.src = src;
//     sc.onload = callback("Gaurav",fn);
//     document.head.append(sc);
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);

// PROMISE // 

// let prom1 = new Promise((resolve,reject) => {

//     setTimeout(() => {
//         console.log("I am Done");
//         resolve("Gaur");  
//     }, 3000);
// })

// prom1.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log("Error");
// })

// function getData(){

//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     })
// }

// console.log("1st");
// console.log("2nd");
// console.log("3rd");

// let data = getData();

// data.then((v) => {            // But this is also callback approach 
//     console.log(data);
//     console.log("4th");

// })

// ASYNC AWAIT // 

// async function getdata() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     })
// }

// // ASYNC FUNCTION RETURNS PROMISE NECESSARILY // 

// async function main() {
//     console.log("1st");
//     console.log("2nd");
//     console.log("3rd");
//     let data = await getdata(); // wait till getdata() gets executed //
//     console.log(data);
//     console.log("4th");
// }
// main();

// let a = prompt("Enter a num: "); // by defaut String //
// let b = prompt("Enter a num: ");
// // what if user gives the wrong input //

// if(isNaN(a) || isNaN(b)){
//     throw SyntaxError("Sorry this is not allowed");
// }

// let sum = parseInt(a) + parseInt(b);
// console.log("The sum is :" , sum)
// // console.log("The sum is :" , sum*x) // here x is not defined so how to catch it //

// try {
//     console.log("The sum is:", sum*x);
// } catch (error) {
//     console.log("Error aa gaya")
// }

// // like we have function and we are retunning some value and we want to execute something after return statement //

// function main(){

//     let x = 2;
//     try {
//         console.log("The sum is:", sum*x);
//         return true;
//     } catch (error) {
//         console.log("Error aa gaya")
//         return false;
//     }
//     finally{
//         console.log("Executed !! ");
//     }
// }

// main();

// we get promise from APIs and then we do .. //

// function asynFunc(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//         console.log("Some data 1");
//         // resolve("sucess");
//         reject("Some Error")
//     }, 3000);
//     })
// }

// let p1 = asynFunc();
// p1.then((res) =>{
//     console.log(res);
// })
// p1.catch((res) =>{
//     console.log(res);
// })

// function asynFunc1(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//         console.log("Some data 1");
//         resolve("sucess");
//     }, 3000);
//     })
// }
// function asynFunc2(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//         console.log("Some data 2");
//         resolve("sucess");
//     }, 4000);
//     })
// }

// asynFunc1().then((res) => {
//     console.log("fetching data 1");
//     console.log(res);
//     asynFunc2().then((res2) => {
//     console.log("Fetching data 2");
//     console.log(res2);
// })
// })

// API //


const URL = "https://meowfacts.herokuapp.com/";

// let promise = fetch(URL);
// console.log(promise);

const getFacts = async() =>{
    let promise = await fetch(URL);
    console.log(promise); // currently it is in JSON Format //
    // console.log(promise.status);
    let data = await promise.json();
    console.log(data);
    console.log(data[1]);

}

getFacts();