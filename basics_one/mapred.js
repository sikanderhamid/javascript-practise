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

const codes = [12,55,77,99,11]
const newCode = codes.map((num)=>num*2)
                .map((num)=>num+1)
                .filter((num)=>num>120)
//console.log(newCode);                
                 