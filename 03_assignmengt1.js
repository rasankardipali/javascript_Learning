//Q1
console.log("ans of Q1");
function personal_Info()
{
    var myFullname="Dipali  Hemant Rasankar";
    var myAddress="A/p Natepute";
    var age=30;
    var emailid="rasankardipali@gmial.com";
    var gender="female";
    var isMarrid='true';
    var myProject="college Management";
    console.log("thise are my information:");
    console.log(myFullname,myAddress,age,emailid,gender,isMarrid,myProject);
}
personal_Info();

//Q2
console.log("ans of Q2");
function myDetail(firstName,lastName,contact)
{
    console.log(firstName,lastName,contact);
}

myDetail("Dipali","Rasanakar",9561234151);

//Q3
console.log("ans of Q3");
 function swap_values(arg1,arg2)
 {
    console.log("Before swap");
    console.log(arg1,arg2);
    var temp;
    temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log("after swap ");
    console.log(arg1,arg2);

 }

swap_values("viraj","anushka");
swap_values(1000,2000);

//Q4
console.log("ans of Q4");

function add_three_number( arg1,arg2,arg3)
{
    console.log(arg1+arg2+arg3);


}
add_three_number(10.23,600,40);
add_three_number("Hello","Good","Morning")