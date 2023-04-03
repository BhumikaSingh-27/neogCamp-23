
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
// const obj = {
//     a: 10,
//     b: 12,
//     arr: [10, 8, 15, 14]
// }

// const {a,b, arr} = obj
// const array1 = [a,b,...arr]
// const checkDivisibleBy = array =>array.filter(ele=>ele%3===0 && ele%5 ===0)
// console.log(checkDivisibleBy(array1))


// const obj = {
//     details: [{name: 'Ankit', company: 'Chalo'},
//                         {name: 'Rohan', company: 'Razorpay'},
//                         {name: 'Shivam', company: 'No Broker'}
//                          ]
// }
// Write a function that takes the above object and returns a new array 
// containing the company names.
// Output: ['Chalo', 'Razorpay', 'No Broker']

// const getCompanyNames = ({details}) => details.map(obj=>obj.name)
// console.log(getCompanyNames(obj))



// Write a function that takes the above object and returns a new array 
// containing the company names for people having names starting with A.
// Output: ['Chalo']

// const getCompanyNameForPerson = ({details}) => details.filter(({name})=> name[0]==='A').map(obj=>obj.company)

// console.log(getCompanyNameForPerson(obj))



//Given an array of strings, write a program to return a new array containing only the strings that are palindromes.
// Input: ["racecar", "banana", "level", "apple"]
// Output: ["racecar", "level"]
// const array = ["racecar", "banana", "level", "apple"]
//// const checkPalindrome = str =>{
//   let i=0;
//   let j=str.length-1;
//     while(i<j){
//     if(str[i]===str[j]){
//       i++;
//       j--;
//       }
//     else{
//      return false
//     }
//   }
//   return true
// }
// const getPalindromeString = array => array.filter(checkPalindrome)
// console.log(getPalindromeString(array))


//Given an array of objects, write a code for "getOutput" function to return the first object that contains a specific given key-value pair.

// const arr = [{name: "John", age: 25}, {name: "Sarah", age: 30}, {name: "Bob", age: 20}]
// const key="age"
// const value=25

// // const arr = [{name:"bhumi",age:25},{name: "John", age: 25}, {name: "Sarah", age: 30}, {name: "Bob", age: 20}]
// // const key="age"
// // const value=25


// const checkKeyValue = (obj,key,value) => obj[key] === value 
// const getOutput = (arr,key,value) => arr.find((obj)=>checkKeyValue(obj,key,value))

// console.log(getOutput(arr,key,value)); 

//----------------
//write a function which removes all letters between first and last letter of a word and replace with number of letters
// const input = "Every developer likes to mix kubernetes and javascript";
// const getLength = (word) => word.length -2
// const replace = word => word[0] + getLength(word) +word[word.length-1]

// const replaceInt = str => str.map(replace)

// console.log(replaceInt(input.split(" ")).join(" "))

//--------------------

//09/03
// ```ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
// // ```
// const validatePIN = input => {
//   if ( input.length === 4 || input.length === 6){
//     for(let i of input){
//       if (i<9 && i>=0){
//         return true
//       }else{
//         return false
//       }
//     }
//   }else{
//     return false
//   }
// }

// console.log(validatePIN('1.3234'))


const delayedLoop = (msg)=>{
    for(let i=1;i<=3;i++){
      setTimeout(()=> console.log(msg),i*1000)
    }
  }
  delayedLoop("bhumika")