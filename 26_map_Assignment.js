const array_numbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log("******************  add 10 into each element*********************************");
let array_numbers1=array_numbers.map((element)=>{
    return element+10;

});
console.log(`array element adding 10 to each :${array_numbers1}`);

console.log("***************** squre of  each element*********************************");
let array_numbers2=array_numbers.map((element)=>{
    return element*element

});
console.log(`squre of each elment :${array_numbers2}`);


console.log("***************** add index value  corresponding element*********************************");
let array_numbers3=array_numbers.map((element ,index)=>{
   
    return element+index
    

});
console.log(`adding index to  corresponding elment :${array_numbers3}`);