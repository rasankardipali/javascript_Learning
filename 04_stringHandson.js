
//Q1
var test="   Hey you are doing good,keep it up   ";
console.log("String  as it is");
console.log(test);
//Q2 
var result=test.length;
console.log("length of string");
console.log(result);
//Q3
console.log("Befor trim operation:",test.length);
var result1=test.trim(" ");
console.log("trim size=",result1);
console.log("After trim operation:",result1.length);
//Q4
var spcecount=39-33
console.log("spcecount=",spcecount);
//Q5
var char1=result1.charAt(0);
console.log("first charactoris=",char1);

var char2=result1.charAt(result1.length-1);
console.log("last charactoris=",char2);
//Q6
var word="ram,seeta,pramod,dipali,mehesh ";
var count=word.split(" ");
console.log(" word count =",count);
console.log(word.length);

// OR
var res = "Hey you are doing good keep it up";
var stepSplit =  res.split(" ");
console.log(stepSplit);
console.log(stepSplit.length);
//Q7
var index=result1.indexOf("good");
console.log("index of good=",index);
//Q8

var substr=result1.substring(22);
console.log("substring=",substr);
var sub=result1.slice(22);
console.log("substring=",sub);


//Q9
var end=result1.endsWith("up");
console.log("string end with=",end);

//Q10
var strat=result1.startsWith("Hey");
console.log("string end with=",strat);