// import obj from "./mymodule.js"

// console.log(obj);

const fs = require("fs");

// console.log(fs); 
console.log("starting")

fs.writeFile("gaur.txt" , "Gaur is an animal" ,() => {
    console.log("done");

    fs.readFile("gaur.txt", (error,data) => {
        console.log(error,data.toString());
    })
})

fs.appendFile("gaur.txt" , "Hello , how r u ?" , (e,d)=>{
    console.log(d);
})

console.log("ending");