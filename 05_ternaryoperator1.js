//Q1

var tarnaryexp = function(arg,arg1){
    var result = arg>arg1?arg:arg1
    return result;
}
var result2=tarnaryexp(10,-10);
console.log("****************  greatest number ********************");
console.log(`greatest number is:${result2}`);
var result4=tarnaryexp(800,899);
console.log("****************  greatest number ********************");
console.log(`greatest number is:${result4}`);
//Q2
var numtype=function(num){
    var ans=num/2?true:false
    return ans;
}
var oddeven=numtype(29);
console.log("**************** odd/even********************");
console.log(`even odd no is:${oddeven}`);

var oddeven1=numtype(44);
console.log("**************** odd/even********************");
console.log(`even odd no is:${oddeven1}`);

var oddeven2=numtype(0);
console.log("**************** odd/even********************");
console.log(`even odd no is:${oddeven2}`);

var oddeven3=numtype(101);
console.log("**************** odd/even********************");
console.log(`even odd no is:${oddeven3}`);


//Q3
//even odd number
var show=function(word){
  console.log(word.length);
  var ans=word.length %2 ==0?"even":"odd"
  console.log(ans);
}
show("javactript");
show("developer");
show("google");


