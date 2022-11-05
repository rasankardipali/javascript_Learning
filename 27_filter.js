const arrayOfNumbers=[2,4,6,8,5];
console.log("====== reduce()=====");
let sum =  arrayOfNumbers.reduce( (value, runningTotal) => {
    return  value + runningTotal;
} );
console.log(sum);
// console.log("====== reduce()=====");
// let sum =  arrayOfNumbers.reduce( (value, runningTotal) => {
//     return  value * runningTotal;
// } );
// console.log(sum);

