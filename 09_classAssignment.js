//create class vehicle
console.log("*********************vehicle class******************************");
class Vehicle{

    constructor(model_no,m_name,capacity, average,speed ,colour)
    {
        this.model_no=model_no;
        this.m_name=m_name;
        this.capacity=capacity;
        this.average=average;
        this.speed=speed;
        this.colour=colour;
    }
}
let bike=new Vehicle(1,"bike","twowhiler",40,"median" ,"green");
console.log(bike);
let car=new Vehicle(2,"car","fourwhiler",45,"fast" ,"green");
console.log(car);
let pickup=new Vehicle(3,"pickup","fourwhiler",80,"median" ,"green");
console.log(pickup);
let bus=new Vehicle(4,"bike","twowhiler",90,"slow" ,"green");
console.log(bus);
let bulero=new Vehicle(5,"bike","twowhiler",50,"fast" ,"green");
console.log(bulero);


console.log("*********************college class******************************");
//create college class
class college{
    constructor(c_name,c_rank,address,department,greade)
    {
        this.c_name=c_name;
        this.c_rank=c_rank;
        this.address=address;
        this.department=department;
        this.greade=greade;


    }
}
let c1= new college("SMSMP",1,"NATEPUTE","COMP.SCIENCE","A");
console.log(c1);
let c2=new college("SG COLLEGE",2,"PUNE","MATHS","B");
console.log(c2);
let c3=new college("DAHIWADI COLLEGE",1,"DAHIVADI","CROP","A");
console.log(c3);
let c4=new college("VIKAS COLLGE",3,"BARAMATI","SCIENCE","A");
console.log(c4);

//travels object

console.log("*********************college object1******************************");
for (const key in c1) {
    if (Object.hasOwnProperty.call(c1, key)) {
        const element = c1[key];
        console.log(element);
        
    }
}

console.log("*********************college object2******************************");
for (const key in c2) {
    if (Object.hasOwnProperty.call(c2, key)) {
        const element = c2[key];
        console.log(element);
        
    }
}

console.log("*********************college object3******************************");
for (const key in c3) {
    if (Object.hasOwnProperty.call(c3, key)) {
        const element = c3 [key];
        console.log(element);
        
    }
}

console.log("*********************college object4******************************");
for (const key in c4) {
    if (Object.hasOwnProperty.call(c4, key)) {
        const element = c4[key];
        console.log(element);
        
    }
}
console.log("*********************fibonaciseries 7 ******************************");

//wp to print fibonacci series
function fibonaciseries(num)
{
var num1=0;
var num2=1;
var sum;
var i=0;
console.log(num1);
console.log(num2);
for (let i = 0; i < num ;i++) {
    sum=num1+num2;
    console.log( sum);
    num1=num2;
    num2=sum;
    
}

}
fibonaciseries(7);
//console.log(result);