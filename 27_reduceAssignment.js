const array_numbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log("****************reduce()   sum of array elements **************");
var sum=0;
let total=array_numbers.reduce((currentvalue,array)=>{
    return sum=currentvalue+array;
});
console.log("sum=",total);
console.log("****************reduce()   sum of array even elements **************");
 let filteredArray=array_numbers.filter((element1)=>{
    if(element1%2==0){
    return element1
    }
 });
 console.log("even numbers",filteredArray);
 var sum1=0;
let total1=filteredArray.reduce(( current ,value)=>{
    
    return sum1=current+value;
});
console.log(" sum of even numbers",total1);
