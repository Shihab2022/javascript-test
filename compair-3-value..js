// simple use if else if else



// var num1 = 3000;
// var num2 = 300;
// var num3 = 19900;
// if (num1 > num2 && num1 > num3) {
//     console.log('number1', num1, 'is big other two number');
// } else if (num2 > num1 && num2 > num3) {
//     console.log('number2', num2, 'is big other two number');
// } else {
//     console.log('number3', num3, 'is big other two number')
// }

// use function

function putValue(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log('number1', num1, 'is big other two number');
    } else if (num2 > num1 && num2 > num3) {
        console.log('number2', num2, 'is big other two number');
    } else {
        console.log('number3', num3, 'is big other two number')
    }
}
putValue(300, 500, 250);