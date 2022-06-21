"use strict"

const firstInteger = +prompt("Enter first digit(s):")

const secondInteger = +prompt("Enter second digit(s):")

const operation = prompt("What operation do you want to perform?  ( + ,  - ,  * ,  / )")


if(operation === "+"){
    alert(firstInteger + secondInteger)
}else if(operation === "-"){
    alert(firstInteger - secondInteger)
}else if(operation === "*"){
    alert(firstInteger * secondInteger)
}else if(operation === "/"){
    alert(firstInteger / secondInteger)
}else{
    alert("Wrong Operation!")
}