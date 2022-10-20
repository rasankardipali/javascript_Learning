function gradeSystem(score)
{
    if (score<35) {
        console.log("You are Failed");
    } else if(score >=35 && score <= 60)
    {
        console.log("You are pass");
    } else if (score >=60 && score <= 75) {
        console.log("You are pass with gread 'B' ");
    } else if(score >=75 && score <= 90){
        console.log("You are pass with gread 'A' ");
    } else if (score >=90 && score <= 100) {
        console.log("You are pass with gread 'A+' ");
     

     
    }
     else if (score>100) {
        console.log("Invalid Score ");
        
    } else if (score==null || score==undefined) {
        console.log("Inpute in string format is not allow ");
    } else{
        console.log("invalid input");
    }
} 
gradeSystem(66);
console.log("***********************************");
gradeSystem(13);
console.log("***********************************");
gradeSystem(" ");
console.log("***********************************");
gradeSystem(98);
console.log("***********************************");
gradeSystem("fifty five");
console.log("***********************************");
gradeSystem(35);
console.log("***********************************");
gradeSystem(75);
console.log("***********************************");
gradeSystem(null);