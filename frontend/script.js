// variables //

// var a = 5;

// var s = "Hello";  // can change
// const c = true;  // cannot change it
// console.log(a);
// console.log(s+a);

// let meaning = {
//     "hello" : "Hi",
//     "Goodbye" : "Bye"
// }

// console.log(meaning);

// var age = 18;

// if(age>=18){
//     console.log("You can Vote");
// }
// else{
//     console.log("You cannot Vote");
// }

// // == -> only compares value , === -> compare value and type both //

// if("3" == 3) console.log(true); // RETURN TRUE
// if("3" === 3) console.log(true); // RETURN FALSE


// for (let index = 0; index < 10; index++) {
//     console.log(index);    
// }
// var output = "";
// for(let i = 0;i<10;i++){
//     output += i + " "; 
// }
// console.log(output);

// let dict = {
//     "name" : "Gaurav",
//     "course" : "Btech",
//     "lang" : "C++"
// }
// for(var key in dict){
//     const ele = dict[key];
//     console.log(ele,key);
// }

// i = 5;

// while(i>0){
//     console.log(i);
//     i--;
// }

// let num = 10;
// do {
//     console.log(num);
//     num++;
// } while (num<5);

// FUNCTIONS //

// function sum(a,b,c = 3){
//     return a+b + c;
// }
// console.log(sum(5,6));
// console.log(sum(5,6,5));

// const func = (x)=>{
//     console.log("This is an arrow function",x);
// }

// func(5);

// var num = Math.random();
// console.log(num);

// STRINGS // 

// let a = "hello";
// // console.log(`i want to say you ${a}`);

// console.log(a.slice(1,5));
// console.log(a.replace("he" , "she"));

// let b = "  Gaur";
// console.log(b.trim()); // removes white spaces //

// FAULTY CALCI //

// let rand = Math.random();

// let a = prompt("Enter First Number: ");
//  let c = prompt("Enter Operation: ");
// let b = prompt("Enter Second Number: ");

// let obj = {
//     "+" : "-",
//     "-" : "*",
//     "*" : "/",
//     "/" : "**"
// }

// if(rand > 0.1){
//     alert(`The result is : ${eval(`${a} ${c} ${b}`)}`);
// }

// else{
//     c = obj[c];
//     alert(`The result is : ${eval(`${a} ${c} ${b}`)}`);
// }

// // Jumble Words // 

// let set1 = {
//     "1" : "Crazy",
//     "2" : "Amazing",
//     "3" : "Fire",
// }

// let set2 = {
//     "1" : "Engine",
//     "2" : "Garments",
//     "3" : "Food",
// }

// let set3 = {
//     "1" : "Bros",
//     "2" : "Limited",
//     "3" : "Hub",
// }

// let a = prompt("Enter a num b/w 1 to 3: ");
// let b = prompt("Enter a num b/w 1 to 3: ");
// let c = prompt("Enter a num b/w 1 to 3: ");

// alert(`Your Business name is : ${set1[a]} ${set2[b]} ${set3[c]}`);

// ARRAY //

// let arr = [1,2,3,4,5,6];
// console.log(arr);   
// console.log(arr.toString());
// console.log(arr.join(" and "));
// console.log(arr.pop()); // removes last element //
// arr.shift() // removes first element //
// arr.push(11); // add at back //
// arr.unshift(0) // add at starting //
// arr.concat(arr1,arr2)

// arr.splice(1,3); // removes from 1 to 3 index //
// console.log(arr);
// arr.splice(1,3,8,9); // insert last elements //
// console.log(arr); 
// arr.forEach((val,ind,arr) =>{
//     console.log(val,ind,arr);
// })

// let a = [1,5,3,2,4,3];

// let b = a.map((e) =>{
//     return e**2;
// })

// console.log(b);

// let a = [1,3,8,41,6,5];

// const greaterThan7 = (e) =>{
//     if(e>7){
//         return true;
//     }
//     else{
//         false;
//     }
// }

// console.log(a.filter(greaterThan7));

// let a = [1,2,3,4,5];

// const red = (a,b) =>{
//     return a*b;
// }
// console.log(a.reduce(red));

// console.log(Array.from("Gaurav"));


// document.body.childNodes[1].childNodes

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// boxes[1].style.backgroundColor = "red";

// document.getElementById("box3").style.backgroundColor = "green"

// document.querySelector(".box").style.backgroundColor = "blue"; // select first element which have class = "Box"
// document.querySelectorAll(".box") // return node list of all html elements having box class

// // to access it //

// document.querySelectorAll(".box").forEach((e) => {
//     e.style.backgroundColor = "blue";
// });

// console.log(document.getElementsByTagName("div")) // returns html collection including parent 

// document.querySelector(".box").innerText; // returns text // 

// let div = document.createElement("div");
// div.innerHTML = "I am the inner Html";
// div.setAttribute("class","created");
// document.querySelector(".container").before(div) // or we can use append or after or prepend or replace

// let cont = document.querySelector(".container");
// cont.insertAdjacentHTML("beforebegin","Hello hii Bye");
// cont.insertAdjacentHTML("afterend","Hello hii Bye Bye");

// TO REMOVE ANY CLASS OR ADD // 

// document.querySelector(".container").classList.add("bg-green")
// document.querySelector(".container").classList.add("hlo")
// document.querySelector(".container").className
// document.querySelector(".container").classList.remove("hlo")

// document.querySelector(".container").classList.toggle("red") // if already there then remove it and if not then add it 


// let btn = document.getElementById("btn");

// btn.addEventListener("click",(e)=>{
//     alert("hello");
// })

// document.addEventListener("keydown",(e) => {
//     console.log(e.key);
// })

// EVENT BUBBLING  => like there are three div within each other so if i implement event ont all three div and if i click on 
// child node than all of them will trigger to avoid that we use e.stopPropagation()//

// TO DO SOMETHING AFTER AN INTERVAL OF TIME //

// let a = setInterval(() => {
//     document.body.style.background = "" // any random color function
    
// }, 3000); // means 3s

// TO STOP IT // use clearInterval(// the no. provided in the console on browser);


