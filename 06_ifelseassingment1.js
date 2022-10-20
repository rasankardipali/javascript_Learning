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
console.log("************input no.2*************");
evenodd(2);
console.log("************input no.45************");
evenodd(45);
console.log("************input no.0*************");
evenodd(0);
console.log("************input no.13*************");
evenodd(13);
console.log("************input no.70*************");
evenodd(70);

//to cheak greatest no among 3 number
var greatestNo=function(a,b,c)
{
    if(a>b&&a>c)
    {
        console.log(`A is greter`);
    }else if( b>a&&b>c)
    {
        console.log(`B is greter`);
    }else
    {
        console.log(`C is greter`);
    }
}
console.log("************input no.56,70,80*************");
greatestNo(56,70,80);
console.log("************input no.20,90,0*************");
greatestNo(20,90,0);

//To cheak year is leap or not
var leap=function(year)
{
    if(year%2==0)
    {
        console.log(`Year is leap ${year}`);
    }
    else
    {
        console.log(`Year is not leap ${year}`);
    }
}
console.log("************inpute year 2020*************");
leap(2020);
console.log("************inpute year 1999*************");
leap(1999);
console.log("************inpute year 2022*************");
leap(2022);
console.log("************inpute year 1945*************");
leap(1945);
