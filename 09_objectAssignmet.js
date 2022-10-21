// object assingment
let teacher={
    FName:"Raj ",
    address:"pune",
    designation:"Ass.Professor",
    Expriance_year:5,
degrees1:{
    engineering:"CSS",
    PHD:"Adv Computing",
    computer_science:"MCA",
    
    },
    certficates:{
        certficates1:"Hacker Rank Participation",
        certficates2:"certficates in IFE course",
        certficates3:"certficates in Adv Programming",

    },
    degrees2:function(){
        var show=(`All Teacher Degrees are=${engineering},${PHD},${computer_science},`);
        return show;
    }

}

console.table(teacher.Lname="kundra");

teacher.FName="Mahesh";
console.table(teacher);
delete teacher.certficates.certficates1;
console.log("After Delete operstiopn");
console.table(teacher);

console.log("After Adding new  Certificate");
teacher.certficates.certficates1="Best Performance Certificate";
console.table(teacher);
console.table(teacher.certficates);
console.log(typeof(teacher));
console.table(Object.keys(teacher));
var show1="fname"in teacher;

console.log(show1);

