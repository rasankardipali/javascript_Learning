const arrayOfNumbers=[2,3,5,4,6,1];
const newArray=arrayOfNumbers.map((value)=>{
    return value+5
})
console.log(newArray);
console.log(arrayOfNumbers);
console.log("***************************************");
const newArray1=arrayOfNumbers.map((value,index )=>{
    if(index%2==0 )
    { console.log(value);}
    

   

})
