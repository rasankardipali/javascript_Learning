let str="I am vary good It devloper";
let str2=str.toLowerCase();
console.log(str2);
let str1=str.length;
console.log(str1);

let index=0;
let ovels="aioue";
while (index<=str2.length-1) {
    var count=0;
   if(ovels.includes(str2.charAt(index))){
     count++;
     console.log(count);
   }
    let char=str2.charAt(index);
      console.log(char);
    
    index++;
}

