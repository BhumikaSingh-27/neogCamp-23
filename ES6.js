// let a = 100
// function App() {
//   console.log('1', a)
//   let a = 42
//   console.log('2', a)
//   {
//     let a = 100
//   }
//   console.log('3', a)
// }
// App()
// const defaultExample3 = (a, b=5, c) => a + b + c

// console.log(defaultExample3(1, 2, 3));
// console.log(defaultExample3(1, 3));

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const spreadExample2 = (first, second, ...rest) => {
//   console.log(first, second, rest)
// }

// console.log(spreadExample2(array))

// // rest with spread
// // console.log(spreadExample2([...array, 11, 12, 13]))

// const arr =[1,2,3,4]
// const arr2 = [...arr,5,6,7]
// console.log(arr2)

// const arr = [1, 2, 3, 4, 5];
// // let [a, b, c] = arr;
// // console.log(a, b, c); // 1 2 3
// let [a,,,c] =arr
// console.log(a,c)

//

// console.log(a);
// console.log(b);
// function sum (){
// var a =10;
// let b =20;
// return a+b
// }

// function sum(a){
//     let b = getNumber();
//     console.log(a+b);
//     }
//     sum(10);
//     var getNumber = () => {
//     return 20;
//     }

// function sum(a){
//     let b = getNumber();
//     console.log(a+b);
//     }
//     sum(10);
//     const getNumber = () => {
//     return 20;
//     }

// const checkACharacter = (msg, char) => {
//   for (let i of msg) {
//     if (i.toLowerCase() === char || i.toUpperCase() === char) {
//       return "contains";
//     }
//   }
//   return "doesn't contain";
// };
// console.log(checkACharacter("nitin", "b"));

function sum() { 
    const sum = a+b; 
    console.log(sum)
    }
    
    const a = 1;
    const b = 2;
    
    sum();