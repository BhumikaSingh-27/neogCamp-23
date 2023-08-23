//define variables - number/boolean/string/null/symbol/void/bigint/undefined

let variableName: number = 1

//using interface in the function call
// Define a function displayPerson that takes a parameter of type Person and consoles a message like "Name: [Name], Age: [Age]".

interface Person{
    name: string;
    age:number
}

function displayPerson(person:Person){
    return `Name:${person.name} age: ${person.age}`
}

displayPerson({name:"bhumika",age:30})


//functions - generic
function identity<T>(value:T){
    return value
}

// const identity2 = <T>(value:T):T =>{
// }