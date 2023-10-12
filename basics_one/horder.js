const a = [2,6,7]
for(arr of a){
    //console.log(arr);
}

const greetings = "Welcome!"
for (const greet of greetings){
    //console.log(`${greet} back home`);
}

const map = new Map()
map.set("PK","Pakistan")
map.set("FR","France")
//console.log(map);

for (const [key,value] of map){
    //console.log(key,"=",value); maps are iteratable but objects are not
}

const myObj = {
    lang1:"C++",
    lang2:"Java",
    lang3:"Solidity"
}
for(const key in myObj){
    //console.log(key);
}

for(const key in myObj){
    //console.log(myObj[key]);
}

for(const key in myObj){
    console.log(`my fav ${key} is ${myObj[key]}`);
}