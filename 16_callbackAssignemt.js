function callbackRevision(callback) {
    console.log("I revised callback concept...");
    callback();
}
 function copycallbackRevision() {

    console.log(" copied  revised callback concept...");
 }
 callbackRevision(copycallbackRevision);

function display() {
    
    console.log("display output");

}
//setInterval(display ,1000);
setTimeout( display, 4000);
