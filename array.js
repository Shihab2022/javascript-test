// sum of all numers in an array

// let numbers = [10, 25, 91, 77, 10, 50, 60, 25, 14, 80, 75, 94];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     sum = sum + element
// }
// console.log(sum);


// sum of  all numbers in an array by function


// function arrayTotal(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         sum = sum + element;
//     }
//     return sum;
// }
// const total = arrayTotal([10, 25, 91, 77, 10, 50, 60, 25, 14, 80, 75, 94]);
// console.log(total);


// find the largest element of an array

function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const ages = [10, 25, 91, 77, 10, 50, 60, 25, 14, 80, 75, 94];
const oldest = largestElement(ages);
console.log(oldest);