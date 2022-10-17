
//W.P. print count the number of ovels in the string?
var str1="Good Morning It Champ  ";
var str=str1.toLowerCase();
console.log(str1);
var count=0;
var ovels=["a,","i","o","u","e"];
for (let char of str) {
     if(ovels.includes(char)){
        count++
     }
    
}
console.log(count);
console.log("*************************************");
//WP FUNCTION TO COUNT NO. OVELS IN THE STRING?
 function countovels(str1){
    var str=str1.toLowerCase();
console.log(str1);
var count=0;
var ovels=["a,","i","o","u","e"];
for (let char of str) {
     if(ovels.includes(char)){
        count++
     }
    
}
console.log(count);

   
 }
 
 countovels("I Love JavaCript  ");

 //WAF TO calculate the sum of 1 to 10 ?
 console.log("***************TO calculate the sum of 1 to 10*********************");
 function sum1(){
    var sum=0;
    for (let index = 1; index <=10; index++) {
         sum=sum+index;
        
    }
    console.log(` the sum of 1 to 10=${sum}`);
 }
sum1();
console.log("***************TO calculate the sum squre 1 to 5*********************");
//WP TO Calculate sum of squre 1 to 5?
function sumofsqure(){
    var sum2=0;
    var sqr=1;
    for (let index = 1; index <=5; index++) {
        sqr=index*index;
        sum2=sum2+sqr;
        
        
    }
    console.log(` the sum squre 1 to 5=${sum2}`);
}
sumofsqure();
console.log("********************************************************");
//even position charactor without space
function evenPositionChars(word){
    var totallen=word.length;
    for (let index = 0; index <=totallen; index++) {
        if(index%2==0 && index!= " ")
        {
            var char=word.charAt(index);
            console.log(char);
        }
    }
}
evenPositionChars("Hard Work always pay back");
console.log("********************************************************");
evenPositionChars("Soon i will be Angulae IT champ");
console.log("********************************************************");
//

//odd position charactor without space
function evenPositionChars(word){
    var totallen=word.length;
    for (let index = 0; index <=totallen; index++) {
        if(index%2!=0 && index!= " ")
           {
            var char=word.charAt(index);
            console.log(char);
        }
    }
}
evenPositionChars("Hard Work always pay back");
console.log("********************************************************");
evenPositionChars("Soon i will be Angulae IT champ");
console.log("********************************************************");


