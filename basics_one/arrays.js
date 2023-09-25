//const a = [2,8,9,6,9]
//console.log(a);
//const ab = a.slice(2,7)
//console.log(ab);
//console.log(a);
const aheroes = ["batman","spiderman"]
const bheroes = ["allahdin","disney"]
//aheroes.push(bheroes)
//console.log(aheroes)
//console.log(aheroes[2][1])
//const full = aheroes.concat(bheroes)
//console.log(full)

//console.log([...aheroes,...bheroes]);

const another_array = [2,3,6,[4,7,8],11,13,[2,6,[7,8]]]
const full_array = another_array.flat(Infinity)
//console.log(full_array);

console.log(Array.isArray("sikander"));
console.log(Array.from("sikander"));

const score1 = 200
const score2 = 300
const score3 = 400
console.log(Array.of(score1,score2,score3));