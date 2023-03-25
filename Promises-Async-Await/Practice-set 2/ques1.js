//Use this URL - https://example.com/post/comments to make a fake fetch call and
//list out all the emails of users on the DOM in ordered list.
//A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const showOutput = document.querySelector("#output");

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/post/comments") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
            {
              email: "hello@outlook.com",
              commentBody: "Good going a lot to learn from you awesome",
            },
            {
              email: "ram99@gmail.com",
              commentBody: "Anyone from Vadodara here",
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "No Commentes found.",
        });
      }
    }, 2000);
  });
};

// fakeFetch("https://example.com/post/comments")
//   .then((response) => {
//     // console.log(response);
//     let tag = "";
//     for (let data of response.data) {
//       tag += `<li>${data.email}</li>`;
//     //   console.log(tag);
//     }
//     showOutput.innerHTML = `<ol>${tag}</ol>`;
//   })
//   .catch((error) => (showOutput.innerText = "error occured!"));

// const callback = async () => {
//   try {
//     let response = await fakeFetch("https://example.com/post/comments");
//     let tag = "";
//     for (let data of response.data) {
//       tag += `<li>${data.email}</li>`;
//     }
//     showOutput.innerHTML = `<ol>${tag}</ol>`;
//   } catch (error) {
//     showOutput.innerText = "error!";
//   }
// };

// callback();

const callback = async () => {
  try {
    let response = await fakeFetch("https://example.com/post/comments");
    let tag = response.data.reduce(
      (acc, cur) => acc + `<li>${cur.email}</li>`,
      ""
    );
    showOutput.innerHTML = `<ol>${tag}</ol>`;
  } catch (error) {
    showOutput.innerText = "error!";
  }
};

callback();
