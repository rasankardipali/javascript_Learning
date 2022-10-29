class Bank {
    constructor(bank_name,b_location,accountNo,ifsc,b_interest)
    {
        this.bank_name=bank_name;
        this.b_location=b_location;
        this.accountNo=accountNo;
        this.b_interest=b_interest;
        this.ifsc=ifsc;

    }
}
let axis_bank= new Bank("axis bank","mumbai",334289056456,"1.5%","f23145");
let sbi_bank= new Bank("SBI bank","pune",3345425656456,"4.5%","f256445");
let icici_bank= new Bank("icici bank","thane",45674256456,"1.6%","y23045");
let kotak_bank= new Bank("kotak bank","natepute",3345446456,"5.5%","f87145");
let hdfc_bank= new Bank("hdfc bank","nagpur",0834256456,"16.5%","g453145");
let panjab_bank= new Bank("panjab bank","mumbai",789256456,"1.0%","m231674");

let bankarray=[axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,panjab_bank]
for (const element of bankarray) {
    
     console.log(`bank information:bank name=${element.bank_name} bank location =${element.b_location}`);
    
}


for (const bank of bankarray) {
    if(bank.bank_name=="kotak bank")
    {
        console.log(`kotak bank informatio  :  bank name=${bank.bank_name}  bank location=${bank.b_location}  account no=${bank.accountNo} bank inrest=${bank.b_interest}  ifsc code=${bank.ifsc}  `);
    }
    
}

for (const  bank1 of bankarray) {
    console.log(` bank informatio  :  bank name=${bank1.bank_name}  bank location=${bank1.b_location}  account no=${bank1.accountNo} bank inrest=${bank1.b_interest}  ifsc code=${bank1.ifsc}  `);
    
}
