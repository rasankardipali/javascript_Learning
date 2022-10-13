//Q1even odd number
function evenoddnumber(num1){
    
    if(num1%2==0)
    {
        console.log("number is even");
    }else
    {
        console.log("number is odd");
    }
}
console.log("*******Numer=45******");
evenoddnumber(45);
console.log("*******Numer=70******");

evenoddnumber(70);
console.log("*******Numer=67******");

evenoddnumber(67);
console.log("*******Numer=98******");

evenoddnumber(98);



//Q2 Eligible for vote
function eligibleForVote(num2){
    if(num2>=18){
        console.log("you are eligible vote");
    }
    else{
        console.log("you are NOT eligible vote");
    }
}
console.log("*******Numer=18******");
eligibleForVote(18);
console.log("*******Numer=20******");
eligibleForVote(20);
console.log("*******Numer=17******");
eligibleForVote(17);
console.log("*******Numer=40******");
eligibleForVote(40);

//Q3 String count
function strcount1(str){
    if(str.length>10)
    {
        console.log("YES string contain more than 10 charactor ");
    }else{
        console.log("NO string not contain more than 10 charactor "); 
    }
}
console.log("*******String count******");

strcount1("javaScript - ES6");

//Q4 check string start
function strstart(str1){
    if(str1.length>10)
    {
        console.log("YES string start with'java' ");
    }else{
        console.log("NO string not start with'java' "); 
    }
}
console.log("*******String strat******");

strstart("javaScript - ES6");