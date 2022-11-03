
let number=100;//globle variable

function outerClosure()
{
     let number1=200;
    let innerClosure= function ()
     {

        let number2=300;
        console.log(`globle variable=${number}   outer function varible=${number1} inner function varible=${number2}  `);
    }
return innerClosure ;
}
let ans=outerClosure();
ans();
