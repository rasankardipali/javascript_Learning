
//Q1
var wordLenghtsquare1 = function(word){
    var result=word.length;
    return result*result;
 }



 var ans=wordLenghtsquare1("JavaCript");
 var ans1=wordLenghtsquare1("Google");
 var ans2=wordLenghtsquare1("Developer");

 console.log("************************************************");
console.log(`word lenght square=${ans}`);
console.log("************************************************");

console.log(`word lenght square=${ans1}`);
console.log("************************************************");

console.log(`word lenght square=${ans2}`);
console.log("************************************************");


//Q2.1
var info="I am Angular Developer";
var stroperatoin=function(){
     var result2=info.split('').reverse().join('');
     

     console.log(`Revarse string:${result2}`);
}
stroperatoin();
console.log("************************************************");

//Q2.2
var info1="I am Angular Developer";
var stroperatoin1=function(){
    var length1=info1.length;
    console.log(`length of string:${length1}`);
     var result3=info1.split(' ');
     console.log(`Revarse string:${result3}`);
     var ans3= result3.length;
     console.log(`length of string:${ans3}`);

     var division=length1/ans3;
     console.log(`Division:${division}`);

}
stroperatoin1();
