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
 for (const info of com_info) {
    if (info.emp_company==="TCS"){
         console.log(`employinfo= employ name=${info.emp_name}  employ company=${info.emp_company}`);
        
 }
    
 }
 console.log("************************ employ working in finance department*******************************");
for (const dept of com_info) {
    if (dept.emp_dept==="Finance") {
        console.log(`employ  finance dept info= employ name=${dept.emp_name}  employ department=${dept.emp_dept}`); 
        
    }
    
}

console.log("************************ employ whose name strat with 'R'*******************************");

    
for (const dept of com_info) {
if (dept.emp_name.startsWith("R")) {
    console.log(`employ name startwith 'R' info= employ name=${dept.emp_name}  `); 
    
}   
        
}
console.log("************************ employ whose salary >70000*******************************");
for (const dept of com_info) {
    if (dept.emp_salary > 70000) {
        console.log(`employ whose salary >70000 info= employ name=${dept.emp_name}  employ company=${dept.emp_company} employ salasy=${dept.emp_salary}    `); 
        
    }   
            
    }
    console.log("************************ employ whose salary =500000 & dept= 'IT'*******************************");
for (const dept of com_info) {
    if (dept.emp_salary==500000 && dept.emp_dept=="IT") {
        console.log(`employ whose salary =500000 & dept= 'IT'=  employ id=${dept.emp_id}  employ name=${dept.emp_name}   employ dept =${dept.emp_dept}  employ company=${dept.emp_company} employ salasy=${dept.emp_salary}    `); 
       // console.log(dept);
    }   
            
    }
    console.log("************************ employ whose company='Infy'*******************************");
    for (const dept of com_info) {
        if (dept.emp_company==="Infy") {
            console.log(`employ whsoe ' company = Infy' info=  employ id=${dept.emp_id}  employ name=${dept.emp_name}   employ dept =${dept.emp_dept}  employ company=${dept.emp_company} employ salasy=${dept.emp_salary}    `); 
           
        }   
                
        }