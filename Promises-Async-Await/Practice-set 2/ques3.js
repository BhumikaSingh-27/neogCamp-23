//Use this URL - https://example.com/login to make a fake fetch call and show the status like it is authenticated or not with a message in the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const showOutput = document.querySelector("#output");

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/login") {
        resolve({
          status: 200,
          data: {
            auth: true,
          },
        });
      } else {
        reject({
          status: 404,
          message: "Status not found",
        });
      }
    }, 2000);
  });
};

const asyncFunction = async (url) => {
  try {
    let response = await fakeFetch(url);
    if (response.status === 200) {
      showOutput.innerText = "Verified";
    }
  } catch (error) {
    showOutput.innerText = "error occured!";
  }
};

asyncFunction("https://example.com/login");
// Output on the DOM should be:
// Verified
