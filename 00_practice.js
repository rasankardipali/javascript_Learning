let arrary=[1,2,2,3,5,4,5,6,];
for(let i=0;i<arrary.length;i++){
    var ele=arrary[i];
    console.log(ele);
}
console.log("++++++++++++++++++++++find unique array++++++++++++++++++++++++++++++++++++++");

console.log(...new Set(arrary));
console.log("******************************swap no*********************************************");
 function swapNo( a, b){
    var temp;
    temp=a;
    a=b;
    b=temp;
    console.log('A=',a);
    console.log('B=',b);
 }
 swapNo(20,30);
 console.log("******************************log the reverse no*********************************************");

var no=234;
 var s=0,r;

 while (no>0) {
    r=no%10;
    s=s+r;
    no=no/10;
 }

 console.log("reverse no=",s);
console.log("***********************************************");
  let array=[2,34,67,78,90,10];
  let arrNew=array.sort((a,b)=>{
    if(a>b){
        return 1
    }
    else if (a<b) {
       return -1 
    } else {
      return 0  
    }
  })

  console.log(arrNew);
 console.log("*****************************************************"); 
 function primeNumber(no){
   for (let index = 2; index < no; index++) {
      if(no%index==0){
         return false;
      }
      
   }
   return true;
 }

 let Number1=primeNumber(11);
   if(Number1==true){
      console.log("no is prime");
   }
   else
   {
      console.log("no is  not prime");
   }

 
console.log("*******************************class********************************");
class Emp{
 constructor(name,address,city,age){
   this.name=name;
   this.address=address;
   this.age=age;
   this.city=city;
 }
 show(){
   console.log(`emp dataile= ${this.name} ${this.address}  ${this.city} ${this.age}`);
 }
}

let emp1= new Emp('mahesh', 'pune', 'satara','30');
let emp2= new Emp('mahesh1', 'pune1', 'satara1','301');
let emp3= new Emp('mahesh2', 'pune2', 'satara2','302');

console.log(emp1.show());//method call



let array1=[emp1,emp2,emp3];

for (let index = 0; index < array1.length; index++) {
   const element = array1[index];
   if(element.name=='mahesh1'){
      console.log(`${element.name} ${element.address} ${element.city}`);
   }
}

console.log("******************************************************");
let person={
   name:'ramesh',
   add:'Pune',
   marks:{
      maths:200,
      hindi:100,
   }

}

console.log('person detail=', person.name,person.add,person.marks.maths,person.marks.hindi);