const user = {
    username:"Sikander",
    price:500,
    welcomeMessage:function(){
        console.log(`Hi ${this.username}, welcome to this website`);
        console.log(this);
    }
}
//user.username = "Sam"
//user.welcomeMessage()
//console.log(this);

const addTwo = (num1,num2)=>num1 + num2
console.log(addTwo(2,1));