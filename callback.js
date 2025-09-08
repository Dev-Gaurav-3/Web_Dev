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

async function getdata() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(455);
        }, 3500);
    })
}

async function main() {
    console.log("1st");
    console.log("2nd");
    console.log("3rd");
    let data = await getdata(); // wait till getdata() gets executed //
    console.log(data);
    console.log("4th");
}
main();

