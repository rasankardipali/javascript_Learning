let bank_sbi={
    b_name:"State Bank of India",
    IFCcode:"F1453",
    Bno:12,
    address:"Natepute",
}
const bank_location={
    street:"khaugalli",
    city:"natepute",
    pincode:413109,

}
let clonebank=Object.assign({},bank_sbi,bank_location);
console.log(` copy/clone  BANK_SBI Details using object.assign`);
console.table(clonebank);

 let clonebank1={...bank_sbi,bank_location};
 console.log(` copy/clone  BANK_SBI Details using ...(spread operator)`);
 console.table(clonebank1);

 let rate_of_interest={
    home_loan_inerest:"1%",
    personal__loan_inerest:"1.5%",
    due_interest:"2%",


 }
 let sbi_Details={}
 let marge=Object.assign(sbi_Details,bank_sbi,bank_location,rate_of_interest);
 console.log(`marge value of object bank_sbi,bank_location,rate_of_interest marge in sbi_details`);
 console.table(marge);
 console.log("****************marge array sbi details**************");
 console.table(sbi_Details);

let arraybank=[sbi_Details]
 for (const bank of arraybank) {

    console.log(`bank name=${bank.b_name}   bankno=${bank.Bno}  badress=${bank.address}   bankstreet=${bank.street}   city=${bank.city}   pincode=${bank.pincode}  home_interest=${bank.home_loan_inerest}   personal_interest=${bank.personal__loan_inerest}  due_interest=${bank.due_interest}`);
 }