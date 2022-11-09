const array_numbers=[113,45,56,11,32,45,109,799,56,45];
console.log("***************Reverse the array*****************");
 
// for (let index =array_numbers.length-1 ; index >0 ; index--) {
//     const element = array_numbers[index];
//     console.log(element);
//     }

    let reverse1=array_numbers.reverse();
    console.log(reverse1);


    console.log("***************sort the array in Ascending order*****************");
    let sort1=array_numbers.sort();
    console.log(sort1);
    console.log("Using without argument sort method dose not  sort properly");
    
array_numbers.sort((a,b)=>{
    return a>b?1 :-1
});

console.log("sorted array:",array_numbers);
console.log("***************sort the array in Descending order*****************");
let arraySort=array_numbers.sort((a,b)=>{
    return a>b?-1 :1
});
console.log("sorted array:",array_numbers);

console.log("***************sort the array in Descending order using reverse()*****************");
let reverse12=arraySort.reverse();
console.log(reverse12);
console.log("***************find the greatest number in array*****************");
console.log(Math.max(113,45,56,11,32,45,109,799,56,45));
console.log("***************find the smallest number in array*****************");

console.log(Math.min(113,45,56,11,32,45,109,799,56,45));
    
