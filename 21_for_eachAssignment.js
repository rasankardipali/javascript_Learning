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


let com_info=[emp_anil,emp_monika,emp_radha,emp_rishi,emp_sonsli,emp_viny];
console.log("************************ employ working in tcs*******************************");
let newArray=com_info.forEach((Employee)=>{
    if(Employee.emp_company="TCS")
    {
        console.log(`employinfo= employ name: ${Employee.emp_name}  employ company=${Employee.emp_company}`);
    }


});
console.log("************************ employ whose salary >= 50000*******************************");
 com_info.forEach((dept)=>{
    if(dept.emp_salary>=50000){
        console.log(`employ whsoe  salary >= 50000:  employ id=${dept.emp_id}  employ name=${dept.emp_name}   employ dept =${dept.emp_dept}  employ company=${dept.emp_company} employ salasy=${dept.emp_salary}    `); 
           
    }

 });
 
console.log("************************ find sum of employee salary*******************************");

var newArray1=com_info.forEach((dept1)=>{
    
    return dept1.emp_salary+dept1.emp_salary ;
  
  
    
    
}  );
console.log(newArray1 );
console.log("************************ Average salary*******************************");

var newArray2=com_info.forEach((dept)=>{
    
    return dept.emp_salary+dept.emp_salary/com_info.length ;
  
  
    
    
}  );
console.log(newArray2 );

console.log("************************ employ whose salary =500000 & dept= 'IT'*******************************");
com_info.forEach((dept)=>{
    if (dept.emp_dept=="HR" || dept.emp_dept=="IT") {
        console.log(`employ whose dept= 'HR' & dept= 'IT'=  employ id=${dept.emp_id}  employ name=${dept.emp_name}   employ dept =${dept.emp_dept}  employ company=${dept.emp_company} employ salasy=${dept.emp_salary}    `); 
       // console.log(dept);
    }   
})


