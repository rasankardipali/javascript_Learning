//odd position charactor without space
function evenPositionChars(word){
    var totallen=word.length;
    for (let index = 0; index <=totallen; index++) {
        var char=word.charAt(index);
        if(index%2==0 && char!="  ")
           {
           
            console.log(char);
        }
    }
}
evenPositionChars("Hard Work always pay back");
console.log("********************************************************");
evenPositionChars("Soon i will be Angulae IT champ");
console.log("********************************************************");
