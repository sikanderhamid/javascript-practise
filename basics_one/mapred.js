const myNumbers = [1,2,3,4,5,6,7,8,9,10]
//const abc = myNumbers.filter((num)=> num > 3)
//console.log(abc);
const newNum = []
myNumbers.forEach((num)=>{
    if (num > 3){
        newNum.push(num)
    }
})
//console.log(newNum);