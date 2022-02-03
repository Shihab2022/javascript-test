/*************************************** * (7) 7 to 19 odd number prind********************************/


/*let num1 = 7;
while (num1 <= 19) {
    if (num1 % 2 != 0) {
        console.log(num1);
    }
    num1++;
}*/


/*************************************** *  (8) declear array and its position********************************/


// let myArray = [2, 6, 6, 8, 8, 3, 86, 53, 34, 7, 5, 433, 567, 7, 55562, 3456, 332]

// length
/*let lengthArray = myArray.length;
console.log(lengthArray);*/

// change 4th position element

/*myArray[4] = 30000;
console.log(myArray);*/

// array push

/*myArray.push(5000, 50);
console.log(myArray);*/


// array pop

/*myArray.pop();
console.log(myArray);*/

/***********************  (9) for  loop array ,for of loop array and its position******************/

/*let names = ['shihab', 'shiraj', 'faruk', 'thorul', 'khafi', 'mamun'];

for (const name of names) {
    console.log(name);
}*/


/***********************  (10) print the value gater than 80 and its position******************/

/*let elements = [2, 6, 450, 666, 6, 80, 80, 3, 86, 53, 34, 7, 5, 433, 567, 7, 55562, 3456, 332]

for (const element of elements) {
    if (element >= 80) {
        console.log(element);
    }
}*/


/***********************  (11) multifikaytion 3 valuse ******************/

/*function multifikaytion(num1, num2, num3) {
    let multi = num1 * num2 * num3;
    return multi;
}
let value = multifikaytion(10, 20, 30);
console.log(value);
*/


/***********************  (12) change object property    problem******************/

/*education = [
    { examName: 'PSE', bord: 'rajshahi', year: 2011, gpa: 4.41 },
    { examName: 'JDC', bord: 'madrasah', year: 2015, gpa: 4.82 },
    { examName: 'DHAKIL', bord: 'madrasah', year: 2017, gpa: 4.61 },
    { examName: 'HSC', bord: 'rajshahi', year: 2019, gpa: 4.42 },

]
console.log(education.examName);
let txt = education[0];
for (const eName of education) {
    txt = education.examName;
    console.log(txt);
}

console.log(txt);*/




/*********************** special (1) create a function and feet transfer to inch******************/

/*function feetToInch(feet) {
    let inch = feet / 12;
    return inch;
}
let putValue = feetToInch(25);
console.log(putValue);
*/


/*********************** specisl (2)create a function  centimeter To Meter ******************/
/*function centimeterToMeter(centimeter) {
    metter = centimeter / 100;
    return metter;
}
let putValue = centimeterToMeter(200);
console.log(putValue);
*/



/*********************** special (3) create a function and paper Requirements ******************/

/*function paperRequirements(book1, book2, book3) {
    let book1Paper = 100;
    let book2Paper = 200;
    let book3Paper = 300;

    let allPaperForBook1 = book1Paper * book1;
    let allPaperForBook2 = book2Paper * book2;
    let allPaperForBook3 = book3Paper * book3;

    let sumAllPaper = allPaperForBook1 + allPaperForBook2 + allPaperForBook3;
    return sumAllPaper;
}

let myBook = paperRequirements(3, 2, 1);
console.log(myBook); 
*/


/*********************** special (4) create a function and value an array  and name bestFriend******************/

/*let allFriends = ['shihab', 'shiraj', 'saifur', 'samad', 'robiul', 'shamsujjaman', 'kafi']

function bestFriend(friends) {
    let newarray = friends[0];
    for (const friend of friends) {
        if (friend.length > newarray.length) {
            newarray = friend;
        }
    }
    return newarray;
}
let bigName = bestFriend(allFriends);
console.log(bigName);*/


/*********************** special (5) write a array and show that who valus geter than 0 ******************/

let allNumbers = [1, 2, 3, 0, 4, 5, 6, 7, 55, 62, 4, 2, 4535, -1, -3, -455, 45, 45, 0, 5454, 54, 4, -754, 0]


/*function bestFriend(numbers) {
    let newArray = [];
    for (i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element >= 0) {
            newArray.push(element);
            //ay khanay jodi if ay jai taholay 0 soman ba 0 thakay boro holay print korbay but 0 thakay choto hoay galay else ay say function kay bbreak ar maddo may bondho korY dibay
        } else {
            break;
        }

    }
    return newArray;
}
let bigName = bestFriend(allNumbers);
console.log(bigName);

*/





/***********************  (10) print the value gater than 80 and its position******************/