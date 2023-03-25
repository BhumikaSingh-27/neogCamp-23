//Use this URL - https://example.com/api/productlist to make a fake fetch call and print the total price of all the products. A fake
//Fetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const showOutput = document.querySelector("#output");

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/productlist") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { itemName: "Shoes", price: 100, quantity: 2 },
            { itemName: "Hat", price: 350, quantity: 1 },
            { itemName: "Tshirt", price: 410, quantity: 5 },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      }
    }, 2000);
  });
};

const asyncFunction = async (url) => {
  try {
    let response = await fakeFetch(url);
    const total = response.data.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0
    );
    // console.log(total);
    showOutput.innerText = `Total: INR ${total}`;
  } catch (error) {
    // console.log("error");
    showOutput.innerText = `${error.message}`;
  }
};
asyncFunction("https://example.com/api/productlis");

// Output on the DOM should be:
// Total: INR 2600
