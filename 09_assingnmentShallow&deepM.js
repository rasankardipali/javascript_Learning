const array_nums = [20, 3, 4, 56, 90, 400, 49];
var array_nums1 = array_nums;
console.table(array_nums);
console.table(array_nums1);
array_nums.push(55);
array_nums.push(56);
console.table(array_nums);
let otherarray_nums = {
    ...array_nums
};
console.log("*****************************");
console.table(`thers array:${otherarray_nums}`);
console.table(otherarray_nums);
array_nums.push(10);
array_nums.push(25);
console.table(array_nums);

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR",

    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli,431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",

    },
    mobiles: ["+91 8600 3456 88", "1800-4567 32", "+91-9096 5678 77"]
}
console.table(employee_info);//emp_info
console.table(employee_info.address.locality);
console.table(employee_info.address.city);
console.table(employee_info.address.state);
console.table(employee_info.address.country);
console.table(employee_info.mobiles);
 let employee_info1={...employee_info}//creating shallow copy
 console.table(employee_info1);//{... emp_info}
 employee_info.address.locality.street="khaugally,413109";
 console.log( employee_info.address.locality.street);
 employee_info.mobiles=["+91 9561 3323 01", "1800-4567 32", "+91-9096 5678 77"]
 console.table(employee_info.mobiles);
 console.table(employee_info);//updater emp_info
 console.table(employee_info1);//no updation in shallow copy
 let employee_info2=JSON.parse(JSON.stringify(employee_info));//creating deep copy
 console.table(employee_info2);
 employee_info.salary.july_month="80,000INR";//update july month salary
 console.log( employee_info.salary.july_month);
 employee_info.country="United Kingdom";
 console.log(employee_info.country);
 console.table(employee_info);//udated values of july month salary & country
