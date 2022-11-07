let array1=[10,20,30,40,50,-20,-30];

console.log("***************************************");
array1.forEach(function( currentele ,value,array ) {
    console.log(currentele ,value,array);
});
console.log("****************OR***********************");

     array1.forEach(( currentele ) =>{
        console.log(currentele );
     });


    console.log("***************************************");
     array1.forEach(( currentele ) =>{

        if(currentele<0){
        console.log(currentele );
        }
     });

     //index%2==1 && value <0

     console.log("****************   travling set for each***********************");

    const array2=new Set(array1);
    array2.forEach((currentele1)=>{
        console.log(currentele1);
    })

    console.log("===== Traversing map using forEach() =====");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach( (key, value) => {
    console.log(key, value);
} );
