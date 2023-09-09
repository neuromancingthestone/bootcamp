// try{
//     throw new Error("I AM THE ERROR!!!");
//     // undefined.pop();
// } catch(e) {
//     console.log("there was an error...", e)
//     console.dir(e);
// }

// function greet() {
//     console.log("HI!! I LOVE YOU!")
// }

// function diss() {
//     console.log("you are the worst :(")
// }

// let funcs = [greet,diss]

// const myFunc = function add(x,y) {
//     return x + y;
// }

// function giveBirth() {
//     console.log("GIVING BIRTH!")
//     return function cry() {
//         return "WAAAHHHHH"
//     }
// }

// function makeMultiplyFunc(num){
//     return function mult(x) {
//         return num * x;
//     }
// }

// function doubleDiss() {
//     diss();
//     diss();
// }

// greet();
// alert("I AM ALERT!")
// diss();

// greet();
// setTimeout(function() {
//     diss();
//     diss();
//     diss();
// }, 1000);
// greet();

function countDown(x) {
    let intervalID = setInterval(function(){
        x--;
        console.log(x);
        if( x == 0) {
            console.log("DONE");
            clearInterval(intervalID); 
        }
    }, 1000); 
}

function randomGame() {
    let count = 1;
    let intervalID = setInterval(function(){
        let randomNum = Math.random();
 //       console.log(randomNum);        
        if(randomNum > .75) {
            console.log(count);
            clearInterval(intervalID);            
        } else {
            count++;
        }
    }, 1000)
}

// const id = setInterval(diss, 2000);

// function DateError(message) {
//     this.message = message;
//     this.name = 'DateError';
// }

// function getMonthName(mo) {
//     if(typeof mo !== 'number'){
//         throw new DateError("Must be a number!");
//     }
//     mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
//     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
//                     'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     if (months[mo]) {
//         return months[mo];
//     } else {
//         throw new DateError("Month out of bounds")
//     }
// }

// function displayInitials(user) {
//     let firstNameLetter; 
//     let lastNameLetter;
//     try {
//         firstNameLetter = user.firstName[0].toUpperCase();
//         lastNameLetter = user.lastName[0].toUpperCase();
//     } catch(e) {
//         return "Invalid Input!";
//     }
//     return `Hello ${firstNameLetter}.${lastNameLetter}`;
// }

// displayInitials({ firstName: 'Jason', lastName: "Momoa" })

// try{
//     undefined.pop();
//     let msg = 'HELLO!'     
// } catch (e) {
//     console.log("OH NO ERROR!!!");
//     console.log(e);  
//     let msg = 'GOODBYE!'     
// }

// console.log("did we make it?")

// let grades = [99, 98, 76, 54, 66, 90, 81];
// let sum = 0;
// for (let i = 0; i < grades.length; i++){
//     sum += grades[i];
//     // console.log("i", i);
//     // console.log("grade", grades[i]);
//     // console.log("sum", sum);
// }
// let avg = sum / grades.length;

// function hasEnoughFundsToBuy(price, qty, balance) {
//     const subtotal = Math.round(price * qty * 100)/100;
//     console.log("subtotal:", subtotal);
//     console.log("balance:", balance);
//     if (subtotal <= balance) {
//         return 'YOU HAVE ENOUGH MONEY!'
//     }
//     return 'SORRY, YOU NEED MORE MONEY TO BUY THAT'
// }

// // NOT ENOUGH MONEY
// hasEnoughFundsToBuy(50.5, 10, 300)
// hasEnoughFundsToBuy(200.3, 5, 600.9)

// // ENOUGH MONEY
// hasEnoughFundsToBuy(10, 6, 60)
// hasEnoughFundsToBuy(30, 3, 100)
// hasEnoughFundsToBuy(200.3, 3, 600.9)

// let n = 10;

// if(n > 0) {
//     console.log('n is valid')
// } 

// if (n < 100) {
//     console.log('n is valid')
// } else {
//     console.log('n is not valid')
// }

// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }

// let array = "dipmyballsinit";
// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }

// let matrix = [
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i'],
// ]

// for (let i = 0; i < matrix.length; i++) {
//     let subArr = matrix[i];

//     for (let j = 0; j < subArr.length; j++) {
//         console.log(subArr[j]);        
//     }
// }

// function printReceipt(product, qty, price){
//     return `${product}($${price}) * ${qty} = $${qty * price}`
// }

// let colors = ['red', 'teal', 'cyan', 'yellow']

// // for(let i=0; i<colors.length; i++){
// //     console.log(colors[i])
// // }

// // for(let color of colors) {
// //     console.log(color)
// // }

// // for(let char of "PURPLE RAIN!"){
// //     console.log(char)
// // }

// const chicken = {
//     name: "Lady Gray",
//     age: 4,
//     color: "Black"
// }

// for(let prop in chicken){
//     console.log(`${prop}->${chicken[prop]}`)
// }
// for(let key in colors){
//     console.log(key)
// }