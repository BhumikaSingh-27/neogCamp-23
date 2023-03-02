// clear



//Write a function that takes an array and returns all the numbers in a new array increased by 10.
// const increaseBy10 = num => num+10
// const getArrayIncreasedBy10 = numbers =>numbers.map(increaseBy10)
// const numbers=[1,2,3,4]
// console.log(getArrayIncreasedBy10(numbers))

//Write a function that takes an array and returns a new array having even numbers multiplied by 20 and odd numbers multiplied by 30.

// const getEvenOdd = num => num%2===0? num*20 : num*30
// const getNewArray = numbers => numbers.map(getEvenOdd)
// const numbers=[1,2,3,4]
// console.log(getNewArray(numbers))


//Write a function that takes an array and returns a new array having even indexes numbers subtracted by 2 and odd indexes numbers added by 3.

// const getIndex = (num,index) => index%2 ===0 ? num-2: num+3
// const getNewArray = (numbers,index)=> numbers.map(getIndex)
// const numbers=[1,2,3,4]
// console.log(getNewArray(numbers))



// Write a program using destructing to find a number in this object which is divisible both by 3 and 5
//********incomplte****** */
// const obj = {
//     a: 10,
//     b: 12,
//     arr: [10, 8, 15, 14]
// }

// const checkDivisibility = num => num%3 ===0 && num%5 ===0

// const getNumberBy3and5 = ({a,b,arr:array1}) => { checkDivisibility(a)} array1.find(checkDivisibility)

// console.log(getNumberBy3and5(obj))


// Write a function that takes the above object and returns a new array 
// containing the company names.
// Output: ['Chalo', 'Razorpay', 'No Broker']




// Write a function that takes the above object and returns a new array 
// containing the company names for people having names starting with A.
// Output: ['Chalo']
// const obj = {
//     details: [{name: 'Ankit', company: 'Chalo'},
//                         {name: 'Rohan', company: 'Razorpay'},
//                         {name: 'Shivam', company: 'No Broker'}
//                          ]
// }

// const getNameStartingByA = ({details}) => (details.filter(({name,company})=> (name[0]==='A'))).map(obj=>obj.company)

// console.log(getNameStartingByA(obj))

//*********incomplete******* */
//Given an array of strings, write a program to return a new array containing only the strings that are palindromes.
// Input: ["racecar", "banana", "level", "apple"]
// Output: ["racecar", "level"]
// const array = ["racecar", "banana", "level", "apple"]
// const checkPalindrome = str => {
//     while()
// }
// const getPalindromeString = array => array.filter(checkPalindrome)

// console.log(getPalindromeString(array))

//Given an array of objects, write a code for "getOutput" function to return the first object that contains a specific given key-value pair.
eg: 

const arr = [{name: "John", age: 25}, {name: "Sarah", age: 30}, {name: "Bob", age: 20}]
const key="age"
const value=25

const checkKeyValue = (key,value) => key === key && value === value
const getOutput = (arr,key,value) => arr.find(checkKeyValue)
console.log(getOutput(arr,key,value)); // Output: {name: "John", age: 25}

