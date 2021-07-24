
let element = document.querySelector("#heading");
element.innerHTML  = "<i><b>Welcome to my class in javacript</b></i>"
element.style.color = "white"
element.style.textAlign = "center"
element.style.backgroundColor = "black"
element.style.margin = "0px";
element.style.padding = "0px"
console.log(element)

let bodyStyle = document.querySelector("body");
bodyStyle.style.margin = "0px";
bodyStyle.style.padding = "0px"
console.log(bodyStyle)


let ulStyle = document.querySelector(".childul")
ulStyle.innerText  = "hello bangladesh"
ulStyle.innerHTML  = "<i><b>hello bangladesh</b></i>"

console.log(ulStyle)

let mostImp = document.querySelector("#myfirst")

console.log(mostImp.querySelector(".this").querySelector(".childul"))


