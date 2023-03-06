//ES6+ Practice Question Set 1
// 1. Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).
function isEligibleToVote(age) {
    if(age>=18){
        return "Eligible to vote"
    }
    else{
        return "not Eligible to vote"
    }
}

//short-hand/ arrow function
const isEligibleToVote = age => age>=18 ? "Eligible to vote" : " Not Eligible to vote";

console.log(isEligibleToVote(20)) // Eligible to vote
console.log(isEligibleToVote(18)) // Eligible to vote
console.log(isEligibleToVote(17)) // Not eligible to vote


//2. Write a function that takes two numbers as input and determines which one is greater.
const isGreater = (num1,num2) => num1>num2 ? `${num1} is greater than ${num2}` : `${num2} is greater than ${num1}`

const isGreater = (num1,num2) =>{
    if(num1>num2){
       return `${num1} is greater than ${num2}` 
    } else if(num1<num2){
        return `${num2} is greater than ${num1}`
    }else{
        return `both are equal`
    }
}
console.log(isGreater(2, 5)) // 5 is greater than 2
console.log(isGreater(10, 5)) // 10 is greater than 5 

//3. Write a function that takes a number as input and determines if it is positive or negative.
const checkNum = num => num>0 ? "positive number" : "negative number"

const checkNum = num =>{
    if(num>0){
        return `positive number`
    }else if(num<0){
        return `negative number`
    } else{
        return `The number is 0`
    }
}
console.log(checkNum(9)) // Positive Number
console.log(checkNum(-8)) // Negative Number
console.log(checkNum(22)) // Positive Number

//4. Write a function that takes a number as input and determines if it is even or odd.

const isEvenOdd = num => num%2 === 0 ? "even number" : "odd number";

const isEvenOdd = num =>{
    if (num%2 === 0){
        return `even number`
    }else{
        return `oddd number`
    }
}
console.log(isEvenOdd(5)) // Odd Number
console.log(isEvenOdd(8)) // Even Number
console.log(isEvenOdd(10)) // Even Number

//5. Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

// const checkForAlphabetA = str => str.split("").includes("a"||"A") ? "includes A": "doesnot include A"
const checkForAlphabetA = str =>{
    let flag=0
    for(let i=0;i<str.length;i++){
       
        if(str[i] === 'a' || str[i] ==='A'){
            flag=1
            break;
        }
    }
    if(flag===1){
        return (`Includes A`)
    }
    else{
        return(`Doesnot includes A`)
    }
}
console.log(checkForAlphabetA("Tanay")) // Includes a 
console.log(checkForAlphabetA("Jeep")) // Does not include a 
console.log(checkForAlphabetA("Jane")) // Includes a  

//6. Write a function that takes a string as input and determines if it is longer than 5 characters.

const checkLength = num => num.length>5 ? "length is greater than 5" : "length is not greater than 5";

console.log(checkLength("Programming")) // more than 5 characters 
console.log(checkLength("Jeep")) // less than 5 characters


//7. Write a function that takes a number as input and determines if it is between 1 and 10.
const isBetweenOneAndTen = num => num>0 && num<=10 ? true : false;

const isBetweenOneAndTen = num =>{
    if(num>0 && num>=10){
        return true;
    }else 
    
    
    {
        return false;
    }
}
console.log(isBetweenOneAndTen(5)); // true
console.log(isBetweenOneAndTen(11)); // false


//8. Write a function that takes a string as input and determines if it contains the word "hello".
const isHelloPresent = str => str.toLowerCase().indexOf("hello") === -1 ? false: true;

const isHelloPresent = str =>{
    const check="hello" //hello world
    let count = 0;
    for(let i=0;i<str.length;i++){
        for(let j=0;j<check.length;j++){
            if( str[i].toLowerCase() === check[j]){
                i++;
                count++;
                continue;
            }else{
                count=0;
                break;
            }
        }
        if(count===check.length){
            return true;
        } else{
            return false;
        }
    }
}
console.log(isHelloPresent("Hello World")) // true
console.log(isHelloPresent("World")) // false


//9. Write a function that takes a number as input and determines if it is a multiple of 3.
const isMultipleOfThree = num => num%3 ===0 ? "multiple of 3" : "not a multiple of 3"

const isMultipleOfThree = num =>{
    if(num%3 ===0){
        return `multiple of 3`
    } else{
        return `not a multiple of 3`
    }
}

console.log(isMultipleOfThree(5)); // false
console.log(isMultipleOfThree(9)); // true

//10. Write a function which takes in a number as input and returns it after multiplying by 10

const multiplyByTen = num => num*10

const mutipleByTen = num =>{
    const result= num*10
    return result
}

console.log(multiplyByTen(20)) // 200
console.log(multiplyByTen(40)) // 400


//11. Console individual values of the product object using object destructuring.
const product = {
    title: "iPhone",
    price: 5999,
    description: "The iPhone is a smartphone developed by Apple"
  }
  
  const {title,price,description} = product
  
  
  console.log(title); // iPhone
  console.log(price); // 5999
  console.log(description); // The iPhone is a smartphone developed by Apple

  //12. Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.

  const book ={
    title:" Think Like A Monk",
    autor:"Jay Shetty",
    pages: 200
  }

  const getBookDetails = ({page}) => page>100 ? true :false;
  console.log(getBookDetails(book))

  //13. Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

  const person={
    name:"bhumika",
    age:25,
    occupation: "engineer"
  }
  const changeOccupation = (obj,str) => {
    obj.occupation = str;
    return obj;

  }

console.log(person)
changeOccupation(person,"dancer")
console.log(person)

//14. Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.
const numbers = [1,2,3]
const [a,b,c] = numbers
console.log(a,b,c)

//15. Convert the given function into ES6 with least amount of characters.
function defaultParamsFunc(a, b, c) {
    if (c === undefined) {
        c = 4;
    }
    return a * b * c;
	};
	//or

const defaultParamsFunc = (a,b,c=4) => (a*b*c);
console.log(defaultParamsFunc(3, 1)); // 12
	console.log(defaultParamsFunc(3, 10)); // 120
