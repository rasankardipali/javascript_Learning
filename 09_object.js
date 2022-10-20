let sachin={
    fullname:"schin tendulkar",
    
eat:function(){
    console.log(" i am  vigitirian");
         },
         details:function(){
            let show=(`detail are${this.fullname}`);
         }

 }

 sachin.details();
sachin.eat();
console.log(sachin);
console.log(sachin.fullname);
console.log(sachin.address);
console.log(sachin.age);
var text=sachin["address"];
console.log(text);
sachin.proffetion="angular developer";
console.log(sachin);
//sachin.fullname="asdafsghj";
//delete sachin.age;

//console.log(object.keys());