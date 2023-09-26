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
console.log(Jsuser.email);
Object.freeze(Jsuser)
Jsuser.email = "hell@hbl.com"
console.log(Jsuser);
