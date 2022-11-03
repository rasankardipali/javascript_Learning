let is_married = true;
let promise1 = new Promise(function (resolve, reject) {
    if (is_married) {
        console.log(" I am married..........");
    } else {
        console.log(" I am  not married..........");
    }
})
promise1.then(function (success) {
    console.log(success);
}).catch(function (failure) {
    console.log(failure);
})
.finally()
    console.log("Done.............");
