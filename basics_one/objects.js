//object literals
//symbol declaration
const mysymbol = Symbol("key1")
const Jsuser = {
    name :"Sikander",
    "fullName" : "sam",
    age : 20,
    [mysymbol] : "key2",
    email :"sikander@google.com",
    location :"New York",
    isloggedIn :false,
    lastloginDays :["monday",'friday']
}
//console.log(Jsuser.email)
//console.log(Jsuser["email"])
//console.log(Jsuser["age"]);
//console.log(Jsuser["fullName"]);
//console.log(Jsuser[mysymbol]);
Jsuser.email = "hamid@google.com"
//console.log(Jsuser.email);
Object.freeze(Jsuser)
Jsuser.email = "hell@hbl.com"
//console.log(Jsuser);
const tinderUser = {}
tinderUser.id = "sik123"
tinderUser.name = "sikander"
tinderUser.isLoggedin = false
//console.log(tinderUser)

const regularUser = {
    email:"sikandergmx@google.com",
    fullName:{
        userFullName:{
        firstName:"Tom",
        lastName:"Cruise"
        }
    }
}
//console.log(regularUser.fullName);
//console.log(regularUser.fullName.userFullName.firstName);
const key1 = {1:"a",2:"b"}
const key2 = {3:"c",4:"d"}
const key3 = Object.assign({},key1,key2)
console.log(key3);