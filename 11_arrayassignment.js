


let arrayOfNames=['Kamat','Memon','Nashpati','Taimur','Memon','Kamat','Taimur','Andy'];
console.log(`Array=${arrayOfNames}`);
console.log("********************** length before removing duplicate elements************************");  
    

    let  beforemoveelementlength1=arrayOfNames.length;
    console.log(`before remove element=${beforemoveelementlength1}`);


console.log("**********************  Removing duplicate names************************");
    var removeduplicateiteams=[...new Set(arrayOfNames)];
    console.log(removeduplicateiteams);
    console.log("**********************  length of set duplicate element remove************************");  
    let count= arrayOfNames.length-removeduplicateiteams.length;
    console.log("After remove duplicate element =",count);
    console.log("**********************  how many duplicate element remove************************");  
    

    let  afterremoveelementlength1=removeduplicateiteams.length;
    console.log(` After remove element=${afterremoveelementlength1}`);


