function reverseString(word){
    var totalChar=word.length;
    var reverse="";
    for (let index =totalChar-1; index>=0; index--) {
        
        var charAt=word.charAt(index);
        reverse=reverse+word.charAt(index);
        
    }
    console.log(reverse);
}
reverseString("Hard Work always pay back");
console.log("***********************************************");
reverseString("Soon i will be Angular IT Champ");
console.log("***********************************************");
