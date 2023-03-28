// Use this URL - https://example.com/winner-team to make a fake fetch call to the
// get names of winner group members and show a nice message on the DOM congratulating all of them. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const showOutput = document.querySelector("#output");

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/winner-team") {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: ["Jhon", "Raju", "Anjali", "Sakshi"],
          },
        });
      } else {
        reject({
          status: 404,
          message: "No Users found.",
        });
      }
    }, 2000);
  });
};

// const asyncFunction = async () => {
//     try{
//   let response = await fakeFetch("https://example.com/winner-team");
//   const names = response.data.data;
//   //   const winner = [...names];
//   //   console.log(names);
//   //   console.log(winner);
//   showOutput.innerText = `Congratulation to the members of winning team ${names}, great work keep it up`;
// }catch(error){
//     showOutput.innerText="error ocuured";
// }
// }
// asyncFunction();

// const asyncFunction = async () => {
//   try {
//     let response = await fakeFetch("https://example.com/winner-team");
//     const tag = response.data.data.reduce(
//       (acc, cur, index, arr) =>
//         index !== arr.length - 1 ? acc + cur + "," : acc + "and" + cur,
//       ""
//     );
//     showOutput.innerText = `Congratulation to the members of winning team ${tag}great work keep it up`;
//   } catch (error) {
//     showOutput.innerText = "error occured!";
//   }
// };
// asyncFunction();
// Output on the DOM should be:
// Congratulation to the members of winning team Jhon, Raju, Anjali, Sakshi, great work keep it up.

// const asyncFunction = async () => {
//   try {
//     let response = await fakeFetch("https://example.com/winner-team");
//     const names = response.data.data;
//     let tag = "";
//     for (let i = 0; i < names.length; i++) {
//       if (i === names.length - 1) {
//         tag = tag + "and " + names[i];
//       } else {
//         tag = tag + names[i] + ", ";
//       }
//     }
//     showOutput.innerText = `Congratulation to the members of winning team ${tag} great work keep it up`;
//   } catch (error) {
//     showOutput.innerText = "error occured!";
//   }
// };
const asyncFunction = async () => {
  try {
    let response = await fakeFetch("https://example.com/winner-team");
    const names = response.data.data;
    let listOfNames = names.join(",");
    showOutput.innerText = `Congratulation to the members of winning team ${listOfNames} great work keep it up`;
    showOutput.innerText = `Congratulation to the members of winning team ${names} great work keep it up`;

  } catch (error) {
    showOutput.innerText = "error occured!";
  }
};
asyncFunction();
