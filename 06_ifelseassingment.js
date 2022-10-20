//to cheak elegibility for voting
var voting=function(age)
{
    if(age<18)
    {
        console.log("Not Eligible for Voting");
    }
    else
    {
        console.log(" Eligible for Voting");
    }
}
console.log("************input 45*************");
voting(45);
console.log("************input 17*************");
voting(17);
console.log("************input 8*************");
voting(8);
console.log("************input 20*************");
voting(20);

//To cheak gender of value
var gender=function(gen)
{
    if(gen=="male")
    {
        console.log(`Gender is MALE`);
    }
    else
    {
        console.log(`Gender is FAMALE`);  
    }
}
console.log("************inpute male*************");
gender("male");
console.log("************input female*************");
gender("Female");

//to cheak no. is even or odd
var evenodd=function(num)
{if(num%2==0)
    {
        console.log(`Nuber is even ${num}`);
    }
    else
    {
        console.log(`Nuber is odd ${num}`);
    }

}
console.log("************input no.60*************");
evenodd(60);
console.log("************input no.51************");
evenodd(51);
console.log("************input no.0*************");
evenodd(0);
console.log("************input no.5*************");
evenodd(5);
console.log("************input no.40*************");
evenodd(40);
 

