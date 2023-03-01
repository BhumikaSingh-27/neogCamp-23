// // Take an object with your mother’s name and your age. Now create an object for your sibling by age difference
// const bhumika = {name:""}



// //Ankit Singhania — Today at 10:50 PM
// Write a arrow function which takes an object and prints the particular sentence
// My name is Ankit Singhania. I scored 99 in Math and 96 in Computer from ISC board.

// const obj ={
//     name: 'Ankit Singhania',
//     school: {
//         board:['ISC'],
//         marks: [{
//             subject: 'Math',
//             percent: 99
//         },
//                 {
//             subject: 'Computer',
//             percent: 96
//         }]}
// }

const {name, school:{board, marks}} = obj
console.log(name)
console.log(board)
console.log(marks)
// Part 2: What if the marks contain more than 2 objects (more subject marks) then how will you print all the subject details in the sentence