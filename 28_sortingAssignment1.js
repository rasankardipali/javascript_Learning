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
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");



let array_employees=[emp_anil,emp_monika,emp_radha,emp_rishi,emp_sonsli,emp_viny,emp_mahi];
console.log("***************************sorted array_employee by emp_ID************************************");
var  sortedArray=array_employees.sort((a,b)=>{
    return a.emp_id-b.emp_id
});
console.log(sortedArray);
var sortedArray1=sortedArray.forEach((value) => {
    console.log(`Emp_id:${value.emp_id} emp_name:${value.emp_name} emp_dept:${value.emp_dept}`);
    
});
console.log("***************************sorted array_employee in ascending order*****************************");
var array=array_employees.sort((a,b)=>{
   var  fa= a.emp_dept;
   var fb= b.emp_dept;
   if(fa<fb){
    return  -1
   }
   if(fa>fb){
   return 1
   }
   return 0
})
console.log(array);
var array2=array.forEach((value)=>{
    console.log(`emp_id:${value.emp_id} emp_dept:${value.emp_dept}  emp_company:${value.emp_company}`)
});

console.log("***************************sorted array_employee in descending order*****************************");
var arrayA=array_employees.sort((a,b)=>{
 return a.emp_salary-b.emp_salary
})
 arrayA.forEach((value)=>{
    console.log(`emp_name:${value.emp_name} emp_salary:${value.emp_salary}  emp_company:${value.emp_company}`)
 });
 console.log("***************************sorted array_employee in emp_name ascending order***************************");
 var arrayB=array_employees.sort((a,b)=>{
    var fa=a.emp_name;
    var fb=b.emp_name;
    if(fa<fb){
        return 1
    }if(fa<fb)
    {
        return -1
    }
    return 0
 });
 
 arrayB.forEach((value)=>{
    console.log(`Emp_id:${value.emp_id} emp_name:${value.emp_name}   emp_salary:${value.emp_salary} emp_dept:${value.emp_dept}`);  
 })