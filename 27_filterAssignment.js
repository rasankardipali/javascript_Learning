const array_numbers=[20,11,40,25,37,49,9,90,60,2,19];

console.log("**********************  greatest number than 50************************");
let newArray=array_numbers.filter((value)=>{
    return value> 50

});
console.log(`Values greater than '50':${newArray}`);
console.log("**********************  EVEN NUMBER ************************");
let newArray1=array_numbers.filter((value)=>{
    return value%2==0;

});
console.log(`Even nubmer:${newArray1}`);


console.log("**********************  numbers maltiple of 5 ************************");
let newArray3=array_numbers.filter((value)=>{
    return value%5==0;

});
console.log(`Maltiple of '5':${newArray3}`);

console.log("**********************  find numbers bitween 20 to 50   ************************");
let newArray4=array_numbers.filter((value)=>{
    if (value> 20 && value<50){
     return value
    }

});
console.log(`numbers bitween 20 to 50:${newArray4}`);