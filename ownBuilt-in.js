//length method
const getLength = num => {
    let i = 0;
    while(num[i] != undefined){
     i++;
    }
    return i;
}

console.log(getLength("Minakshi")) //8
console.log(getLength([1,3,8,9])) //4

//indexOf
