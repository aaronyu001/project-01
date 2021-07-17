let a = 6;
let b = 9;

function simpleTag(strings, aValExpression, bVaExpression, sumExpreeion){
    console.log(strings);
    console.log(aValExpression);
    console.log(bVaExpression);
    console.log(sumExpreeion);

    return 'foobar';
}

let untaggedResult = `${a} +${b} = ${a + b}`;
let taggedResult = simpleTag`${a} +${b} = ${a + b}`;
console.log(untaggedResult)
