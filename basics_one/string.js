const name = "Sikander"
let repcount = 90
//console.log(name + " has value of" + repcount) not best method to concatenate string
//console.log(`Hello! My name is ${name} and my github repository has ${repcount} value`);

const gameName = new String("Sikander-Hamid") 
//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length)
//console.log(gameName.toUpperCase())
//console.log(gameName.indexOf("h"))
//console.log(gameName.charAt(3))

const newString = gameName.substring(-2,6)
//console.log(newString)

const annString = gameName.slice(-2,6)
//console.log(annString)
const formName = "  Hamid  "
//console.log(formName)
//console.log(formName.trim());

const url = "http//urlgoogle%30345yahoo.com/sikander"
//console.log(url.replace("30345","12345"))
//console.log(url.includes("hello"));
console.log(gameName.split("-"))