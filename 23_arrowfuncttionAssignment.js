console.log("*****************   use of arrow function*************************");

let arrow=()=>{
    console.log(`"Good Evening,Today is Friday"`);
}
arrow(); 
console.log("********************   mailtiplication of 3 arguments**********************");
let maltiplication=(a,b,c=10)=>{
    let result=a*b*c;
    console.log(`maltiplication=${result}`);

}
maltiplication( 5,5,2);
maltiplication( 10,4);

console.log("******************* addition of 5 arguments***********************");
let addition=(a,b,c,d,e)=>{
    let result=a+b+c+d+e;
    return result;

}
let addition1=addition(100,100,200,349,756);
console.log(`Addition of 5 number=${addition1}`);
let concat=addition("i am ","learning","ES6",'features',"in depth");
console.log(`Cancatinatin of string=${concat}`);