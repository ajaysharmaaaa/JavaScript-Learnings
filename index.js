//1. Ways to print in JavaScript

console.log("hello world");
// alert("Me");
document.write("This is document Write");



//2. JavaScript Console API

console.log("Hello world");
console.warn("this is a warning");
console.error("this is an error");
console.assert(4 == 6);



//3. JavaScript variables
// variables means container to store data values

var number1 = 11;
var number2 = 22;
console.log(number1 + number2);



//4. Data types in JavaScript
//(i). Numbers

var num1 = 11.11;
var num2 = 33.33;
console.log(num1 + num2);

// (ii). String

var str1 = "This is a string";
var str2 = "this is also a string";
console.log(str1, str2);

// (iii). Objects

var runs = {
    Ajay: 333,
    ROhit: 222,
    Virat: 111
};
console.log(runs);

//(iv). Booleans

var a = true;
var b = false;
console.log(a, b);

// (v). undefined

// var und = undefined
var und;
console.log(und);

// (vi). Null

var n = null;
console.log(n);

// At a very high level there are two types of data types
// 1. Primitive Data types: undefined, null, number, string, booleans, symbol.Ajay
// 2. Reference Data types: Arrays, Objects. 

// (vii). Arrays

var arr = [1, 3, 5, 5, "Ajay", "Me"];
console.log(arr);



//5. Operators In JavaScript

// (i). Arithmetic Operators 

var a = 44.44;
var b = 99.99;
console.log("The value of a + b is", a + b);
console.log("The value of a - b is", a - b);
console.log("The value of a * b is", a * b);
console.log("The value of a / b is", a / b);

// (ii). Assignment Operators

var c = b;
c *= 99.99;
console.log(c);

// (iii). Comaprision Operators

var x = 99;
var y = 77;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

// (iv). Logical And operators

console.log(true && true);
console.log(false && false);
console.log(false && true);
console.log(true && false);

// (v), Logical Or Operators

console.log(true || true);
console.log(false || false);
console.log(false || true);
console.log(true || false);

// (vi). Logical Not operators

console.log(!false);
console.log(!true);



// 6. Functions in JavaScript 
// DRY = Do not repeat yourself

function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
c1 = avg(999.999, 888.888);
c2 = avg(111.11, 333.33);
console.log(c1, c2);



//7. Conditionals in JavaScript

// (i). Single If statement

var age = 18;
if (age >= 18) {
    console.log('you can drink');
}

// // (ii). If-Else statement

var age = 17;
if (age >= 18) {
    console.log('you can drink');
}
else {
    console.log('you can not drink');
}

// // (iii). If-Else ladder

var age = 17;
if (age >= 32) {
    console.log('you are not a kid');
}
else if (age >= 26) {
    console.log('bacche nahi rahe');
}
else if (age >= 22) {
    console.log('22 bacche nahi rahe');
}
else if (age >= 18) {
    console.log('18 bacche nahi rahe');
}
else {
    console.log('Bachhe rahe');
}
console.log('End of the ladder');



// 8. Loops
// (i). For Loop

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
for (var i = 0; i < arr.length; i++)
    if (i == 2) {
        break;
    }
{
    console.log(arr[i]);
}

// (ii). ForEach Loop

arr.forEach(function (element) {
    console.log(element);
})

// (iii). While Loop 

let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

// (iv). Do while Loop

do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);




// 9. Break and continue statement

// (i). break

var arr = ["fan", "mobile", 199, null, true];
for (var i = 0; i < arr.length; i++) {
    if (i == 2) {
        break;
    }
    console.log(arr[i]);
}

// (ii). continue statement

var arr = ["fan", "mobile", 199, null, true];
for (var i = 0; i < arr.length; i++) {
    if (i == 2) {
        continue;
    }
    console.log(arr[i]);
}



// 10. Arrays methods

let myarr = ["Ajay", "Cricket:", 99, true];
console.log(myarr.length);
myarr.pop();
console.log(myarr);
myarr.push("hunny");
console.log(myarr);
myarr.shift();
console.log(myarr);
myarr.unshift("hunny");
console.log(myarr);
const newLen = myarr.unshift("hunny")
console.log(newLen)
myarr.sort();
console.log(myarr);



// 11. String methods

let mystring = "Ajay is very cleaver"
console.log(mystring.length);
console.log(mystring.indexOf("cleaver"));
console.log(mystring.slice(5, 20));
d = mystring.replace("Ajay", "Hunny");
d = d.replace("cleaver", "murkh");
console.log(d, mystring);



// 12. Dates in JavaScript

let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getDate());
console.log(myDate.getYear());
console.log(myDate.getFullYear());
console.log(myDate.getMinutes());
console.log(myDate.getDay());
console.log(myDate.getMonth());



// 13. DOM(document object model) Mainuplation

// let element = document.getElementById('click');
// console.log(element);
// let elementclass = document.getElementsByClassName("container");
// console.log(elementclass);
// elementclass[0].classList.add("bg-primary");
// elementclass[0].classList.add("text-success");
// elementclass[0].classList.remove("text-success");
// console.log(element.innerHTML);
// console.log(element.innerText);
// createdelement = document.createdelement('p');
// createdelement.innerHTML = 'This is new para';
// tn[0].appendchlid(createdelement);
// createdelement2 = document.createdelement('b');
// createdelement2.innerText = "this is created bold";
// tn[0].replacechild(createdelement2, createdelement);
// removechild(element); 



// 14. Selecting using Query

sel = document.querySelector('.container');
console.log(sel);
sel = document.querySelectorAll('.container');
console.log(sel);



// 15. Events in JavaScript

// function clicked(){
//     console.log("the buuton was clicked");
// }

// window.onload = function(){
//     console.log("document was loaded")
// }
// Container.addEventListner('click', function(){
//     console.log("click huaa");
// })

// Container.addEventListner('mouseout', function(){
//     console.log("mouse out container");
// })

// Container.addEventListner('mouseover', function(){
//     console.log("mouse on container");
// })

// Container.addEventListner('mouseup', function(){
//     console.log("mouse up container");
// })

// Container.addEventListner('mousedown', function(){
//     console.log("mouse down container");
// })



// 16. Setout and setInterval
// Arrow Function

function sum(a, b){
    return a+b;
    console.log(sum);
}

// setTimeout

sum = (a,b)=>{
    return a+b;
}
 logkaro = ()=>{
    console.log("I am your Log");
 }
setTimeout(logkaro, 2000);

// 17. setInterval

sum = (a,b)=>{
    return a+b;
}
 logkaro = ()=>{
    console.log("I am our Log");
 }
setInterval(logkaro, 2000);
clr = setInterval(logkaro, 2000);



// JavaScript localStorage
 localStorage.setItem('name', 'ajju');
 localStorage.clear();

//  18. JSON

obj = {name: "ajju", length: 1, a: {ajay: "aaju"}}
jso = JSON.stringify(obj);
console.log(jso);
console.log(typeof jso);
parsed = JSON.parse('{"name":"ajju","length":1,"a":{"ajay":"aaju"}}')
console.log(parsed);

