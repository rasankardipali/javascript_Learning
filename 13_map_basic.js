let map=new Map();
map.set(22,"sachin");
map.set(23,"dipali");
map.set(24,"rupali");
map.set(25,"yash");


console.log("******adding duplicate kry********");
map.set(22,"pramod");
console.log(map);

console.log("******Retrieving value******");
let value=map.get(25);
console.log(value);


console.log("******delete record*******");
map.delete(22);
console.log(map);


console.log("******is available******");
let d=map.has(24);
console.log(d);



console.log("------ Traversing over map collection --------");
let setOfKeys = map.keys();
console.log(setOfKeys);
for (const key of setOfKeys) {
    console.log(map.get(key));
}

