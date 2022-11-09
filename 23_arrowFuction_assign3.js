const array_numbers=[1,-7,40,502,-77,91,0,108.89,-601];
console.log("****************** array element with index*************************");
let element1=array_numbers.forEach((element,index )=> {
    console.log(index,element);
    
});
console.log("****************** Negative number*************************");
array_numbers.forEach((element)=> {
    if(element<0){
    console.log(element);
    }
});
console.log("****************** even number*************************");
array_numbers.forEach((element)=> {
    if(element%2==0){
    console.log(element);
    }
});
console.log("****************** sum of array number*************************");
let sum=0;
array_numbers.forEach((element)=> {
    sum=sum+element
    
    
});
console.log(`sum of array element:${sum}`);

console.log("****************** even position element*************************");
array_numbers.forEach((element,index)=> {
    if(index%2==0){
    console.log(element);
    }
});
console.log("****************** odd position element*************************");
array_numbers.forEach((element,index)=> {
    if(index%2!=0){
    console.log(element);
    }
});
