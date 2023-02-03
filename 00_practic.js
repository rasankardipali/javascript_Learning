let array=[1,3,4,5,6,7,6,8,9,5];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}
console.log("*************************even element*******************************");

for (let index = 0; index < array.length; index++) {
    if( array[index]%2==0){
  
    console.log(array[index]);
    } 
}

console.log("*************************even nunmber *******************************");
for (let index = 0; index < 100; index++) {
    if( index%2==0){
  
    console.log(index);
    } 
}
console.log("*************************create set()*******************************");
  let set=new Set();
     console.log("add element into set");
     set.add(10);
     set.add(11);
     set.add(12);
     set.add(13);
 
     set.forEach((element) => {
        console.log(element);
        
    });
     
     
   
console.log("*************************create map*******************************"); 
let map=new Map();
console.log("add element into map");
map.set(10,"raj");
map.set(11,"ram");
map.set(12,"prashant");
map.set(13,"monya");

console.log("travalse map");
map.forEach((element,value) => {
    console.log(element,value);
    
});

