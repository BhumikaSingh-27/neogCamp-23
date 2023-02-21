//ES6+ Practice Question Set 3

//1. Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.
const formatArray = ([first, ...rest]) => `The array has ${rest.length +1} and the first item is ${first}, and the last item is ${rest[rest.length -1]}`
const items = ['apple', 'banana', 'orange'];
const message = formatArray(items);
console.log(message);

//2. Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.

const formatProduct = ({price}) => `Socks costs INR ${price} and is in stock`

const product = {
    name: 'Socks',
    price: 249,
    inStock: true,
  };
  
  const message = formatProduct(product);
  console.log(message);
  // Socks costs INR 249 and is in stock.


  //3. Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.
  const findPerson = (arr,name) => {
    for ( let user of arr){
        if(user.name === name){
            return user;
        }
    }
    return null
}

console.log(findPerson([{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 }], "Akhil"))


//4. Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.
const pickFirstAndSecond = ([first,second]) =>({first, second})

console.log(pickFirstAndSecond(["orange", "banana", "apple"]))
// {first: 'orange', second: 'banana'}
console.log(pickFirstAndSecond(["red", "blue", "green"]))
// {first: 'red', second: 'blue'}


//5. Convert the following code to ES6+ syntax with minimum number of characters.
function startsWithA(str) {
    if(str.charAt(0) === 'A') {
          return true;
      } else {
          return false
      }
  }
  
  const startsWithA = str => str.charAt(0) === 'A';

  console.log(startsWithA("Akshita"))// true
  console.log(startsWithA("Jeena"))// false

//6. Write an ES6 function to return only the first character of the given array.
const printFirstCharacter = ([first])=> first
console.log(printFirstCharacter([1, 2, 3, 5, 8]))// 1

//7. Write a function to return the last 5 characters as an array from the given array.
const printLastFive = ([first, ...rest]) => {
    const arr = []
    let counter=0;
    for(let i =rest.length-1;i>0;i--){
        arr.unshift(rest[i])
        counter++;
        if (counter === 5) {
            break;
        }
    }
    return arr
}

console.log(printLastFive([0, 1, 1, 2, 3, 5, 8,3,4]))