// // // // Take an object with your mother’s name and your age. Now create an object for your sibling by age difference
// // const bhumika = {name:"Savita", age:27}
// // const sks = {...bhumika, age: bhumika.age-3}

// // console.log(sks)
// // console.log(bhumika)

// // //create a function that takes object and returns an updated new object

// // const birthday = person => ({...person, age: person.age+1})

// // console.log(birthday ({name:"bhumika",age:36}))

// // //Write an ES6 function increaseStock() to take a products’s name and quantity in an object and then increase the quantity by 5.

// // const increaseStock = product =>({...product, quantity: product.quantity+5})

// // console.log(increaseStock({name:"notebook", quantity: 900}))

// // //---------Map function-------------
// // //Given an array of numbers, return a new array with square root of each number in it.
// // const numbers =[1,2,3,4]
// // const newNumbers = numbers.map(num => Math.sqrt(num))
// // console.log(newNumbers)

// // //Write an ES6 function that takes an array of strings and returns an array with the length of each string using the map method.

// // const strLength = arrayOfStrings => arrayOfStrings.map((str) => str.length)
// // console.log(strLength(["hello","kite"]))

// // //Map-works with array of objects - eg; extract the names from obj
// // const anArrayObject =[{name:"Tanay", age:27},{name:"Tanvi", age:20}]
// // const extractNames = anArrayObject.map((obj)=>obj.name)
// // console.log(extractNames)

// // //---------------filter-----------------
// // //to get the odd numbers in an array
// // const numbers=[1,3,5,7,28,12]
// // const isOdd = num => num%2 != 0
// // const checkOdd = numbers => numbers.filter(isOdd) //callback function should contain boolean values.
// // console.log(checkOdd(numbers))

// // // Write an ES6 function that returns an array with no number less than 10 in it.
// // const checkLessThan = numbers => number>10
// // const newArrayWithNumbersMoreThan10 = numbers => numbers.filter(checkLessThan)
// // const numbers =[1,45,22,5,66]
// // console.log(newArrayWithNumbersMoreThan10(numbers))

// // //--------------Find------------
// // // first element that satisfy the condition
// // //Write an ES6 function that takes an array, and returns the first even number in the array.
// // const numbers = [5, 12, 8, 13, 44]

// // const firstEven = num => num%2 === 0
// // const checkFirstEven = numbers => numbers.find(firstEven)
// // console.log(checkFirstEven(numbers))

// // //Write an ES6 function that takes an array of fruits and returns the first fruit that is longer than 10 characters.
// // const fruitArray = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple']
// // const getLength = str => str.length>=10
// // const getFruitByLengthGreaterThan10 = fruitArray => fruitArray.find(getLength)
// // console.log(getFruitByLengthGreaterThan10(fruitArray))

// // //Given an array of objects, find the object with name “clips”.
// // const inventory = [
// //     { name: 'socks', quantity: 12 },
// //     { name: 'shirts', quantity: 10 },
// //     { name: 'clips', quantity: 5 },
// //   ]

// //   const checkForClicps = objectInventory => objectInventory.name === "clips"

// //   const getInventory = object => object.find(checkForClips)
// //   console.log(getInventory(inventory))

// // //*********************************MA-PRACTICE QUESTIONS************************************************************ */
// // // //Ankit Singhania — Today at 10:50 PM
// // // Write a arrow function which takes an object and prints the particular sentence
// // // My name is Ankit Singhania. I scored 99 in Math and 96 in Computer from ISC board.

// // const obj = {
// //   name: "Ankit Singhania",
// //   school: {
// //     board: ["ISC"],
// //     marks: [
// //       {
// //         subject: "Math",
// //         percent: 99,
// //       },
// //       {
// //         subject: "Computer",
// //         percent: 96,
// //       },
// //     ],
// //   },
// // };

// // // const {name, school:{board,marks}} = obj
// // // const [boardName] = board
// // const {
// //   name,
// //   school: {
// //     board: [boardName],
// //     marks: [
// //       { subject: sub1, percent: marks1 },
// //       { subject: sub2, percent: marks2 },
// //     ],
// //   },
// // } = obj;
// // // const [{subject: sub1 , percent: marks1},{subject: sub2 , percent: marks2}]=marks

// // // console.log(name)
// // // console.log(boardName)
// // // console.log(sub1)
// // // console.log(marks1)
// // // console.log(sub2)
// // // console.log(marks2)

// // // Part 2: What if the marks contain more than 2 objects (more subject marks) then how will you print all the subject details in the sentence

// // // -==================

// // //Write a function to calculate sum of n elements where n >=2

// // const sumOfN = (first, ...rest) => {
// //   let sum = first;
// //   for (let i = 0; i < rest.length; i++) {
// //     sum += rest[i];
// //   }
// //   return sum;
// // };
// // console.log(sumOfN(1, 2, 3)); // output: 6
// // console.log(sumOfN(1, 2, 3, 4));

// // //write a function which will take an array of "n" numbers as an argument and will return the object containing maximum number, minimum number and avg of all numbers in array.
// // //  sampleOutput -
// // //  console.log(getOutput([1,2,3,4,5])) // output : {max: 5, min: 1, avg: 3}

// // const getOutput = (array) => {
// //   let max = 0;
// //   let min = 0;
// //   let sum = 0;
// //   let avg = 0;
// //   for (let i = 0; i < array.length; i++) {
// //     if (max < array[i]) {
// //       max = array[i];
// //     }
// //   }
// //   for (let i = 1; i < array.length; i++) {
// //     min = array[0];
// //     if (min > array[i]) {
// //       min = array[i];
// //     }
// //   }
// //   for (let i = 0; i < array.length; i++) {
// //     sum += array[i];
// //   }
// //   avg = sum / array.length;

// //   return { max, min, avg };
// // };

// // console.log(getOutput([1, 2, 3, 4, 5]));

// // //write a function getArea which will accept either one or two arguments
// // // and return the area of geometrical figure.

// // // if function is called with one arguments then consider it as side of square
// // // and
// // //   if it is called with two arguments then consider it as
// // // length and breadth of rectangle

// // // sample eg.
// // // console.log(getArea(4)) // output : 16
// // // console.log(getArea(4,8)) // output : 32

// // const getArea = (first,second) =>{
// //     if(!second){
// //         return first* first
// //     }else{
// //         return first* second
// //     }
// // }

// // console.log(getArea(4)) // output : 16
// // console.log(getArea(4,8)) //output: 32

// // //nullish coalescing- If second value null/undefined then second=first so that first * first can give output
// // const getArea2 = (first,second)=> (second??first) * first

// // //=================
// // // write a function to calculate factorial of number using loop

// // const factorial = n =>{
// //     let result=1;
// //     for(let i=n;i>0;i--){
// //         result*=I
// //     }
// //     return result
// // }
// // console.log(factorial(5))
// // const factorial2 = n =>{
// //     let fact =1
// //     while(n!=0){
// //         fact*=n;
// //         n--;
// //     }
// //     return fact
// // }
// // console.log(factorial2(5))

// // //========================
// // // write a function which will take `n` (provided n>=2) numbers as an argument
// // // and will return the the sum of factorial of all the numbers

// // // eg.

// // // console.log(getSumOfFacts(1,2,3)) // output: 9
// // // console.log(getSumOfFacts(1,2,3,4)) // output: 33

// // // console.log(factorial(5)) // output: 10)
// // const getSumOfFacts = (first,...rest)=>{
// //     let sum=factorial(first)  //factorial function is implemented above
// //     for(let i=0;i<rest.length;i++){
// //         sum+=factorial(rest[i])
// //     }
// //     return sum
// // }
// // console.log(getSumOfFacts(1,2,3)) // output: 9
// // console.log(getSumOfFacts(1,2,3,4)) // output: 33

// // //=====
// // function fakeFetch(msg, shouldReject)
// //  { return new Promise((resolve, reject) =>
// //   { setTimeout(() =>
// //     { if (shouldReject) { reject(`error from server: ${msg}`);
// //   } resolve(`from server: ${msg}`);
// // }, 3000); }); }

// // fakeFetch("bumika",true)
// // .then(data=>console.log(`the dats is ${data}`))
// // .catch(console.error("error encountered"))

// //============extra questions==============
// // Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// // Write a function which takes a list of strings and returns each line prepended by the correct number.

// // The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// // Examples: (Input --> Output)

// // [] --> []
// // ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// const letterArray = ["a", "b", "c"]

// const fancyArray = arr => arr.reduce((acc,cur,index)=>{
//   const str = `${index+1} : ${cur}`
//   return [...acc, str]
// } ,[])

// console.log(fancyArray(letterArray))

// //==================
// // Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// // Examples:
// // a = "xyaabbbccccdefww"
// // b = "xxxxyyyyabklmopq"
// // longest(a, b) -> "abcdefklmopqwxy"

// // a = "abcdefghijklmnopqrstuvwxyz"
// // longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"

// const longest = (s1, s2) => (s1+s2).split("").reduce((acc,cur)=> !acc.includes(cur) ? [...acc,cur] : acc,[]).sort().join("")
// console.log(longest(a,b))

// // const longest = (s1, s2) =>{
// //   const concatStr = s1+s2
// //   const arr =[]
// //   for(let i=0;i<concatStr.length;i++){
// //     if(!arr.includes(concatStr[i])){
// //       arr.push(concatStr[i])
// //   }
// // }
// //   return (arr.sort().join(""))

// //   }

// //   console.log(longest(a,b))

// // ============

// const calculateSum = array =>{
//   let sumOfInt=0
//   let sumOfStr = 0
//   for(let i of array){
//       if(typeof(i) === "number"){
//           // console.log(i)
//           sumOfInt += i
//       }else{

//           //ssumOfStr += parseInt(i)
//           sumOfStr =+ Number(i)
//           // sumOfStr+= +i
//           // console.log(i)
//       }
//   }
//   console.log(sumOfInt-sumOfStr)
// }

// calculateSum([9, 3, '7', '3'])
// calculateSum(['5', '0', 9, 3, 2, 1, '9', 6, 7])

//

//  const mostActivePerson = (arr) => {
//     // Your ES6+ code here
//     let sum=0;
//     let max = 0;
//     let maxIndex =0
//     for(let i=0;i<arr.length;i++){
//         const {hours} = arr[i];
//         sum=0
//         for(let j = 0; j<hours.length; j++){
//             sum= sum+hours[j]
//         }
//         if(max<sum){
//             max=sum
//             maxIndex=i
//         }
//     }
//     return arr[maxIndex]
//   };
// const mostActivePerson = arr =>{
//     return arr.reduce((acc,cur)=>{
//          const accTotal = acc.hours.reduce((acc,cur)=>acc+cur)
//          const curTotal = cur.hours.reduce((acc,cur)=>acc+cur)
//          if(accTotal>curTotal){
//              return acc
//          }
//          return cur
//      })
//  }

//   const neogCommunity = [
//     { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
//     { name: "Aakash", role: "mentor", hours: [1, 2, 3, 1, 2, 3, 0] },
//     { name: "Ramesh", role: "student", hours: [1, 2, 3, 1, 2, 3, 3] },
//     { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
//     { name: "Harsh", role: "student", hours: [1, 7, 3, 2, 2, 3, 0] },
//     { name: "Akshay", role: "student", hours: [1, 6, 3, 1, 2, 3, 0] },
//     { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
//     { name: "Mohan", role: "student", hours: [1, 8, 3, 0, 2, 3, 0] }
//   ];

//   console.log(mostActivePerson(neogCommunity));

//===========================================

// const sumOfEvenNumbers = (arr)=>{
//     return (arr.reduce((acc,cur)=>{
//         // console.log(acc)
//         if(cur%2 ===0){
// //         acc+=cur
// //         return acc
// //     }
// //     console.log(acc)
// //     return acc
// // },0)) ?? 0
// // }
// // // return (arr.reduce((acc,cur) => cur % 2 === 0 ? acc+=cur : acc,0)) ?? 0

// // // console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])) // 12
// // console.log(sumOfEvenNumbers([])) // 0

// //===================
// // your ES6+ code here

// const neogCommunity = [
//     { name: 'Raju', role: 'student', hours: [1, 2, 3, 1, 2, 3, 0] },
//     { name: 'Aakash', role: 'mentor', hours: [1, 2, 3, 4, 5, 6, 7] },
//     { name: 'Ramesh', role: 'student', hours: [4, 5, 6, 4, 5, 6, 0] },
//     { name: 'Jiten', role: 'TA', hours: [2, 2, 3, 5, 2, 3, 0] },
//     { name: 'Harsh', role: 'student', hours: [7, 8, 9, 7, 8, 9, 0] },
//     { name: 'Akshay', role: 'student', hours: [1, 3, 5, 7, 9, 0, 2] },
//     { name: 'Rohan', role: 'mentor', hours: [1, 2, 3, 12, 2, 3, 0] },
//     { name: 'Mohan', role: 'student', hours: [4, 6, 8, 0, 1, 9, 2] },
//   ]

//   const tagRegularStudents = (arr) => {
//     // Your ES6+ code here

//     return arr.map((element) => {
//       if (element.role === "student") {
//         const totalActiveHours = element.hours.reduce((acc, cur) => acc + cur);
//         if (totalActiveHours > 20) {
//           return { ...element, tag: "regular" };
//         }
//       }
//       return element;
//     });
//   };

//   console.log(tagRegularStudents(neogCommunity))
//   // Output: [
//   //   { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
//   //   { name: "Aakash", role: "mentor", hours: [1, 2, 3, 4, 5, 6, 7] },
//   //   { name: "Ramesh", role: "student", hours: [4, 5, 6, 4, 5, 6, 0], tag: "regular" },
//   //   { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
//   //   { name: "Harsh", role: "student", hours: [7, 8, 9, 7, 8, 9, 0] tag: "regular" },
//   //   { name: "Akshay", role: "student", hours: [1, 3, 5, 7, 9, 0, 2] tag: "regular" },
//   //   { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
//   //   { name: "Mohan", role: "student", hours: [4, 6, 8, 0, 1, 9, 2] tag: "regular" }
//   //
// const sumOfEvenNumbers = (arr) => {
//     return arr.reduce((acc, cur) => {
//         const val = (cur ?? 0)
//         console.log(val)
//       if ( val % 2 !== 0) {
//         return acc;
//       }
//       acc += cur;
//       return acc;
//     }, 0);
//   };
// //   console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
// //   console.log(sumOfEvenNumbers([1, 3, 5]));
//   console.log(sumOfEvenNumbers([undefined, 1, 2, 3, 4, undefined, 6]))

// ============
// your ES6+ code here

// const employees = [
//     { name: 'Raju', salary: 154, role: 'dev' },
//     { name: 'Aakash', salary: 200, role: 'dev' },
//     { name: 'Ramesh', salary: 3077, role: 'pm' },
//     { name: 'Jiten', salary: 487, role: 'qa' },
//   ]

//   const filterBySalary = arr => arr.reduce((acc,cur)=> {
//     if(cur.salary % 2 === 0){
//         return [...acc,cur.name]
//     }
//     return acc
//   },[])
//   console.log(filterBySalary(employees)) // Output: ["Raju", "Aakash"]

// Your ES6+ code here

// const products = [
//     { name: 'Bread', price: 150, quantity: 20 },
//     { name: 'Hoodie', price: 200, quantity: 50 },
//     { name: 'Pyjama', price: 307, quantity: 10 },
//     { name: 'Slipper', price: 480, quantity: 30 },
//   ]

//   const filterProducts = arr => arr.reduce((acc,cur)=> {
//     if(cur.quantity>10 && cur.name.length > 5){
//         return [...acc, cur.name]
//     }
//     return acc
//   },[])

//   console.log(filterProducts(products)) // Output: ["Hoodie", "Slipper"]

// const products = [
//     { name: 'Bread', price: 480, quantity: 3 },
//     { name: 'Clips', price: 200, quantity: 5 },
//     { name: 'green Bread Knife', price: 3077, quantity: 1 },
//     { name: 'Slipper', price: 150, quantity: 2 },
//   ]

//   const filterByKeyword = arr => arr.reduce((acc,cur)=> cur.name.toLowerCase().includes("bread") ? [...acc,cur.name] : acc,[])
//   console.log(filterByKeyword(products))
//   // Output: ["Bread", "green Bread Knife"]

//=============useReduce==============
//find odd and even sum
const numList = [1, 3, 55, 22, 44];

function oddAndEvenSumReducer(acc, value) {
  if (value % 2 !== 0) {
    return { ...acc, odd: acc.odd + value };
  } else {
    return { ...acc, even: acc.even + value };
  }
}

const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer, { even: 0, odd: 0 });
console.log(oddAndEvenSum);

const numList2 = [
  { type: "odd", payload: 1 },
  { type: "odd", payload: 3 },
  { type: "odd", payload: 55 },
  { type: "even", payload: 22 },
  { type: "even", payload: 44 },
];

const calculateSum = (acc, cur) => {
  if (cur.type === "odd") {
    return { ...acc, odd: cur.payload + acc.odd };
  } else {
    return { ...acc, even: acc.even + cur.payload };
  }
};

// const reducer = (state,action)=>{
//   if(action.type==='even'){
//     return {...state,even:state.even+action.payload}
//   }else{
//     return {...state, odd:state.odd+action.payload}
//   }
// }

const state = { even: 0, odd: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "even":
      return { ...state, even: action.payload + state.even };
    case "odd":
      return { ...state, odd: action.payload + state.odd };
    default:
      return state;
  }
};
const sumOfOddEven = numList2.reduce(reducer, state);

console.log(sumOfOddEven);
