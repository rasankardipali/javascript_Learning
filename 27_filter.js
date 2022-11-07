
const arrayOfNumbers=[2,4,6,8,5];
let array=arrayOfNumbers.filter( (element)=>{
    return element>4;
} )

console.log(array);

console.log("====== reduce()   sum of array elemrnt =====");
let sum =  arrayOfNumbers.reduce( (value, runningTotal) => {
    return  value + runningTotal;
} );
console.log(sum);
console.log("====== reduce()  malti of array elemrnt=====");
let mul =  arrayOfNumbers.reduce( (value, runningTotal) => {
    return  value * runningTotal;
} );
console.log(mul);

