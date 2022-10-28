const array_numbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log("***********find total numbaer of element*********");
console.log(`array length =${array_numbers.length}`);
console.log("*********** log the first element*********");
console.log(`array first element =${array_numbers.slice(0,1)}`);
console.log("*********** log the last element*********");
console.log(`array last element =${array_numbers.slice(array_numbers.length-1)}`);
console.log("*********** log the  3rd last element*********");
console.log(`array 3rd last element =${array_numbers.slice(array_numbers.length-3,array_numbers.length-2)}`);
 // find even no from array
 console.log("********** find even no from array *********");
 for (let index = 0; index < array_numbers.length-1; index++) {
    if(array_numbers[index]%2==0)
    {
        console.log(array_numbers[index])
    }
      
    
 }
 console.log("********** find odd no from array *********");
 for (let index = 0; index < array_numbers.length-1; index++) {
    if(array_numbers[index]%2!=0)
    {
        console.log(array_numbers[index]);
        
    }
      
    
 }
 console.log("********** find even  position no from array *********");
 for (let index = 0; index < array_numbers.length-1; index++) {
    if(index%2==0)
    {
    console.log(array_numbers[index]);
    }
      
    
 }
 console.log("********** find odd position no from array *********");
 for (let index = 0; index < array_numbers.length-1; index++) {
    if(array_numbers[index]%2!=0)
    {
        console.log(array_numbers[index])
    }
      
    
 }
 console.log("********** find sum of all element  in  array *********");
let total=0;
 for (let index = 0; index < array_numbers.length-1; index++) 
  {
    total=total +array_numbers[index]

 }
console.log(`additoin of element=${total}`);

console.log("********** find element maltiple of 5  from array *********");
for (let index = 0; index < array_numbers.length-1; index++) {
   if(array_numbers[index]%5==0)
   {
       console.log(array_numbers[index])
   }
     
   
}
console.log("********** Is 115 no avalable in array *********");
console.log(array_numbers.includes(115));
console.log("********** Is 23 no avalable in array *********");
console.log(array_numbers.includes(23));
