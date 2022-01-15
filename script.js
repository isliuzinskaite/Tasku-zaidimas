"use strict";

var heading = document.getElementById ("heading");
var to = document.getElementById ("to");
var input = document.getElementById ("input");
var one = document.getElementById ("one");
var two = document.getElementById ("two");
var reset = document.getElementById ("reset");

var number = 0;
var maxNumber = input.value;
heading.textContent = `${number} to ${number}`;

input.addEventListener("change", function(){
to.textContent = `Playing to: ${document.getElementById("input").value}`;  
}
)

one.addEventListener("click", function (){
    if(number < maxNumber){
        number++;
        heading.textContent = `${number} to ${number}`;
        maxNumber = input.value;
    } else {
        maxNumber = 10;
    }
})