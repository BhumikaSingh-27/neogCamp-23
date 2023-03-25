//Use this URL - https://example.com/welcome to make a fake fetch call and display a welcome message to the user on the DOM. Welcome message (if provided) should be used else the default message of Welcome to the servershould be shown. Message should be only shown if the user is logged in. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const showOutput = document.querySelector("#output");

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!(url === "https://example.com/welcome")) {
        //!of string is false so (!url === "https:...") doesn't resolve the promise it will not go in if block
        reject({
          status: 511,
          message: "Network auth required",
        });
      } else {
        resolve({
          status: 200,
          data: {
            logged: true,
          },
        });
      }
    }, 2000);
  });
};

const asyncFunction = async (url, msg) => {
  try {
    let response = await fakeFetch(url);
    if (response.data.logged) {
      showOutput.innerText = `${msg ?? "Welcome to the server"}`;
    } else {
      showOutput.innerText = `user is not logged in`;
    }
  } catch (error) {
    showOutput.innerText = `${error.message}`;
  }
};

asyncFunction("https://example.com/welcome", "Welcome Ashwin");

// Output: As per the response from server
