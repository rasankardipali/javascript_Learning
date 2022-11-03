function higher_Or_function(callback1) 
{    console.log("In  outer function....");
    callback1();
   
  
    return function returnFunction() {
        console.log("In  return  function.......");
        
    }
}
var inner_fun=function() {
    console.log("In  inner fuction function.....");
   
}
let ansFuction=higher_Or_function(inner_fun);
ansFuction();