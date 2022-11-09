class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;

    }
  

}
const emp_anil=new Employee(22,"Anil","IT",500000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonsli=new Employee(66,"sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");


let array_emps=[emp_anil,emp_monika,emp_radha,emp_rishi,emp_sonsli,emp_viny];
console.log("**********************WIPRO company employee**********************************");
array_emps.filter((dept)=>{
   if(dept.emp_company=="Wipro"){
    console.log(`employ whose department 'wipro'=  employ id=${dept.emp_id}  employ name=${dept.emp_name}   employ dept =${dept.emp_dept}  employ company=${dept.emp_company} employ salasy=${dept.emp_salary}    `); 
 }

});
console.log("********************* employee from 'IT' OR 'HR'**********************************");
array_emps.filter((dept)=>{
    if(dept.emp_dept=="IT" || dept.emp_dept=="HR"){
     console.log(`employ whose department 'wipro'=  employ id=${dept.emp_id}  employ name=${dept.emp_name}   employ dept =${dept.emp_dept}  employ company=${dept.emp_company} employ salasy=${dept.emp_salary}    `); 
  }
 
 });
 console.log("********************* employee ID >50**********************************");
array_emps.filter((dept)=>{
    if(dept.emp_id>50){
     console.log(`employ whose department 'wipro'=  employ id=${dept.emp_id}  employ name=${dept.emp_name}   employ dept =${dept.emp_dept}  employ company=${dept.emp_company} employ salasy=${dept.emp_salary}    `); 
  }
 
 });



console.log("********************* employee name start with 'A' OR 'V' OR 'M'**********************************");
array_emps.filter((dept)=>{
    if (dept.emp_name.startsWith("A")||dept.emp_name.startsWith("V") ||dept.emp_name.startsWith("M")){
     console.log(`employ whose department 'wipro'=  employ id=${dept.emp_id}  employ name=${dept.emp_name}   employ dept =${dept.emp_dept}  employ company=${dept.emp_company} employ salasy=${dept.emp_salary}    `); 
  }
 
 });
 console.log("*******************find the average salary of All department**********************************");

 let array=array_emps.filter((dept)=>{
   
   return dept.emp_salary;
 });
 
 console.log(array);
 var array1=[];
 array.forEach((dept)=>{
    array1.push(dept.emp_salary)
 })
 console.log(array1);

 var array2=array1.reduce((a,b)=>{
    return a+b;
 })
console.log(array2/array1.length);
 
 

  
console.log("*******************find the average salary of IT  departmemt**********************************");
let averageArray1=array_emps.filter((value)=>{
    return value.emp_dept==="IT"
});
console.log(averageArray1);
var averageArray2=[];
averageArray1.forEach((value)=>{
    averageArray2.push(value.emp_salary);
});
console.log(averageArray2);
 let averageArray3=averageArray2.reduce((a,b)=>{
    return a+b;
 });
 console.log(averageArray3/averageArray2.length);