
//Q1marrage status

function maleMarrageEligibility( gender,age,boyName){

    var boyinfo= gender=="male" &&age>=21?`Hey${boyName} you arealigible for marrage`:"NOt eligible for marrage"
    return boyinfo;
}
console.log("*****************************");
var result=maleMarrageEligibility("male",25,"Billgates");
console.log(`Male info...=${ result}`);
console.log("*****************************");
var result1=maleMarrageEligibility("male",17,"Stew Jobs");
console.log(`Male info....=${ result1}`);


//Q2 girl marrage status
function girlMarrageEligibility( gender,age,girlName){
    
    if(gender="famale" && age>=16)
    { 
        console.log(`Hey${girlName} you are eiligible for marrage`);
    }
    else
    {
    console.log(`Hey${girlName} you are NOT eiligible for marrage`);
    }
}
console.log("*****************************");
girlMarrageEligibility("female",16,"jenifer");
console.log("*****************************");
girlMarrageEligibility("female",27,"malinda gates");
console.log("*****************************");


