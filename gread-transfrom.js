function getMark(mark) {
    if (mark >= 80 && mark <= 100) {
        console.log('Your mark :' + mark + '\n' + 'You grade A+' + "\n" + 'Your  GPA 5')
    } else if (mark >= 70 && mark <= 79) {
        console.log('Your mark :' + mark + '\n' + 'You grade A' + '\n' + 'Your  GPA 4')
    } else if (mark >= 60 && mark <= 69) {
        console.log('Your mark :' + mark + '\n' + 'You grade A-' + '\n' + 'Your  GPA 3.5')
    } else if (mark >= 50 && mark <= 59) {
        console.log('Your mark :' + mark + '\n' + 'You grade B' + '\n' + 'Your  GPA 3')
    } else if (mark >= 40 && mark <= 49) {
        console.log('Your mark :' + mark + '\n' + 'You grade C' + '\n' + 'Your  GPA 2')
    } else if (mark >= 33 && mark <= 39) {
        console.log('Your mark :' + mark + '\n' + 'You grade D' + '\n' + 'Your  GPA 1')
    } else if (mark >= 0 && mark <= 32) {
        console.log('Your mark :' + mark + '\n' + 'You grade F' + '\n' + 'Your  GPA 0')
    } else {
        console.log('Your mark is undefined')
    }
}
var putMark = getMark(49);