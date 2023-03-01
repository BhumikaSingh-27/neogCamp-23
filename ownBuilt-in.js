//length method
const getLength = (num) => {
  let i = 0;
  while (num[i] != undefined) {
    i++;
  }
  return i;
};

console.log(getLength("Minakshi")); //8
console.log(getLength([1, 3, 8, 9])); //4

//concat
const myConcat = (str1, ...str2) => {
  for (let str of str2) {
    str1 += str;
  }
  return str1;
};

//toUpperCase
const myUpperCase = (str) => {
  let newStr = "";
  let code = 0;
  for (let i = 0; i < str.length; i++) {
    code = str[i].charCodeAt();
    if (code < 97) {
      newStr += str[i];
    } else {
      newStr += String.fromcCharCode(code - 32);
    }
  }
  return newStr;
};

//concat
const myConcat = (a, ...b) => {
  for (let str of b) {
    a += str;
  }
  return a;
};

//myIndexOf

const myIndexOf = str =>{
    
}