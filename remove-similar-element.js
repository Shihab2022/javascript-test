const myArray = ['shihab', 'shiraj', 'shihab', 'shiraj', 'nur', 'mamun', 'faruuk', 'khafi', 'nur', 'foysal', 'thorul', 'faruuk', 'khafi', 'nur', 'foysal']

function removeSemilarName(myArray) {
    const uniqeName = [];
    for (const element of myArray) {
        if (uniqeName.indexOf(element) == -1) {
            uniqeName.push(element);
        }
    }
    return uniqeName;
}
const uniqeNames = removeSemilarName(myArray);
console.log(uniqeNames);