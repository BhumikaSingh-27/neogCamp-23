// // Take an object with your mother’s name and your age. Now create an object for your sibling by age difference
const bhumika = {name:"Savita", age:27}
const sks = {...bhumika, age: bhumika.age-3}

console.log(sks)
console.log(bhumika)

//create a function that takes object and returns an updated new object

const birthday = person => ({...person, age: person.age+1})

console.log(birthday ({name:"bhumika",age:36}))


//Write an ES6 function increaseStock() to take a products’s name and quantity in an object and then increase the quantity by 5.

const increaseStock = product =>({...product, quantity: product.quantity+5})

console.log(increaseStock({name:"notebook", quantity: 900}))

//---------Map function-------------
//Given an array of numbers, return a new array with square root of each number in it.
const numbers =[1,2,3,4]
const newNumbers = numbers.map(num => Math.sqrt(num))
console.log(newNumbers)

//Write an ES6 function that takes an array of strings and returns an array with the length of each string using the map method.

const strLength = arrayOfStrings => arrayOfStrings.map((str) => str.length)
console.log(strLength(["hello","kite"]))

//Map-works with array of objects - eg; extract the names from obj
const anArrayObject =[{name:"Tanay", age:27},{name:"Tanvi", age:20}]
const extractNames = anArrayObject.map((obj)=>obj.name)
console.log(extractNames)

//---------------filter-----------------
//to get the odd numbers in an array
const numbers=[1,3,5,7,28,12]
const isOdd = num => num%2 != 0 
const checkOdd = numbers => numbers.filter(isOdd) //callback function should contain boolean values.
console.log(checkOdd(numbers))

// Write an ES6 function that returns an array with no number less than 10 in it.
const checkLessThan = numbers => number>10
const newArrayWithNumbersMoreThan10 = numbers => numbers.filter(checkLessThan)
const numbers =[1,45,22,5,66]
console.log(newArrayWithNumbersMoreThan10(numbers))

//--------------Find------------
// first element that satisfy the condition 
//Write an ES6 function that takes an array, and returns the first even number in the array.
const numbers = [5, 12, 8, 13, 44]

const firstEven = num => num%2 === 0
const checkFirstEven = numbers => numbers.find(firstEven)
console.log(checkFirstEven(numbers))

//Write an ES6 function that takes an array of fruits and returns the first fruit that is longer than 10 characters.
const fruitArray = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple']
const getLength = str => str.length>=10
const getFruitByLengthGreaterThan10 = fruitArray => fruitArray.find(getLength)
console.log(getFruitByLengthGreaterThan10(fruitArray))

//Given an array of objects, find the object with name “clips”.
const inventory = [
    { name: 'socks', quantity: 12 },
    { name: 'shirts', quantity: 10 },
    { name: 'clips', quantity: 5 },
  ]

  const checkForClicps = objectInventory => objectInventory.name === "clips"

  const getInventory = object => object.find(checkForClips)
  console.log(getInventory(inventory))

//*********************************MA-PRACTICE QUESTIONS************************************************************ */
// //Ankit Singhania — Today at 10:50 PM
// Write a arrow function which takes an object and prints the particular sentence
// My name is Ankit Singhania. I scored 99 in Math and 96 in Computer from ISC board.

const obj = {
  name: "Ankit Singhania",
  school: {
    board: ["ISC"],
    marks: [
      {
        subject: "Math",
        percent: 99,
      },
      {
        subject: "Computer",
        percent: 96,
      },
    ],
  },
};

// const {name, school:{board,marks}} = obj
// const [boardName] = board
const {
  name,
  school: {
    board: [boardName],
    marks: [
      { subject: sub1, percent: marks1 },
      { subject: sub2, percent: marks2 },
    ],
  },
} = obj;
// const [{subject: sub1 , percent: marks1},{subject: sub2 , percent: marks2}]=marks

// console.log(name)
// console.log(boardName)
// console.log(sub1)
// console.log(marks1)
// console.log(sub2)
// console.log(marks2)

// Part 2: What if the marks contain more than 2 objects (more subject marks) then how will you print all the subject details in the sentence

// -==================

//Write a function to calculate sum of n elements where n >=2

const sumOfN = (first, ...rest) => {
  let sum = first;
  for (let i = 0; i < rest.length; i++) {
    sum += rest[i];
  }
  return sum;
};
console.log(sumOfN(1, 2, 3)); // output: 6
console.log(sumOfN(1, 2, 3, 4));

//write a function which will take an array of "n" numbers as an argument and will return the object containing maximum number, minimum number and avg of all numbers in array.
//  sampleOutput -
//  console.log(getOutput([1,2,3,4,5])) // output : {max: 5, min: 1, avg: 3}

const getOutput = (array) => {
  let max = 0;
  let min = 0;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  for (let i = 1; i < array.length; i++) {
    min = array[0];
    if (min > array[i]) {
      min = array[i];
    }
  }
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  avg = sum / array.length;

  return { max, min, avg };
};

console.log(getOutput([1, 2, 3, 4, 5]));


//write a function getArea which will accept either one or two arguments 
// and return the area of geometrical figure.

// if function is called with one arguments then consider it as side of square 
// and 
//   if it is called with two arguments then consider it as 
// length and breadth of rectangle

// sample eg.
// console.log(getArea(4)) // output : 16
// console.log(getArea(4,8)) // output : 32


const getArea = (first,second) =>{
    if(!second){
        return first* first
    }else{
        return first* second
    }
}

console.log(getArea(4)) // output : 16
console.log(getArea(4,8)) //output: 32

//nullish coalescing- If second value null/undefined then second=first so that first * first can give output
const getArea2 = (first,second)=> (second??first) * first

//=================
// write a function to calculate factorial of number using loop

const factorial = n =>{
    let result=1;
    for(let i=n;i>0;i--){
        result*=I
    }
    return result
}
console.log(factorial(5))
const factorial2 = n =>{
    let fact =1
    while(n!=0){
        fact*=n;
        n--;
    }
    return fact
}
console.log(factorial2(5))

//========================
// write a function which will take `n` (provided n>=2) numbers as an argument 
// and will return the the sum of factorial of all the numbers 

// eg.

// console.log(getSumOfFacts(1,2,3)) // output: 9
// console.log(getSumOfFacts(1,2,3,4)) // output: 33

// console.log(factorial(5)) // output: 10)
const getSumOfFacts = (first,...rest)=>{
    let sum=factorial(first)  //factorial function is implemented above
    for(let i=0;i<rest.length;i++){
        sum+=factorial(rest[i])
    }
    return sum
}
console.log(getSumOfFacts(1,2,3)) // output: 9
console.log(getSumOfFacts(1,2,3,4)) // output: 33

//=====
function fakeFetch(msg, shouldReject)
 { return new Promise((resolve, reject) => 
  { setTimeout(() => 
    { if (shouldReject) { reject(`error from server: ${msg}`); 
  } resolve(`from server: ${msg}`); 
}, 3000); }); }


fakeFetch("bumika",true)
.then(data=>console.log(`the dats is ${data}`))
.catch(console.error("error encountered"))