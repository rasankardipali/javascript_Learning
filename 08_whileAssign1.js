let str="I am vary good It devloper";
let str1=str.length;
let ovels="aioue"
let count=0;
let char=0;
while (char<=str1) {
    if (str1.includes(ovels)) {
        
       count++; 
       char++;
       console.log(count);
    }
    
}
