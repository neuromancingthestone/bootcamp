const containerById = document.getElementById('container');
const containerByQuery = document.querySelector('#container');
const conSecond = document.querySelectorAll('.second');
const ol = document.querySelector('ol');
const conThird = ol.querySelector('.third');
let numFive = document.querySelector('#container');
//numFive.innerText = "Hello!";
let footer = document.querySelector('.footer');
footer.classList.add("main");
footer.classList.remove("main");
let newLi = document.createElement('li');
newLi.innerText = "four";
const ul = document.querySelector('ul');
ul.append(newLi);

let greenLis = ol.querySelectorAll('li');
for( let oLis of greenLis ) {
    oLis.style.color = 'green';
}

const removeFooter = document.querySelector('.footer');
removeFooter.remove();