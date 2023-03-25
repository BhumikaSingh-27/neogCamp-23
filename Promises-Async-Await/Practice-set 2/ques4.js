//Use this URL - https://example.com/order/status/OR00A12 to make a fake fetch call
//and show the order status using the user name on the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const showOutput = document.querySelector("#output");

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/order/status/OR00A12") {
        resolve({
          status: 200,
          data: {
            order: {
              orderId: "OR00A12",
              status: "delivery pending",
              userName: "Kajal Kumari",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "No order found",
        });
      }
    }, 2000);
  });
};

const asyncFunction = async (url) => {
  try {
    let response = await fakeFetch(url);
    let orders = response.data.order;
    console.log(orders);
    showOutput.innerText = `Hello ${orders.userName} your order status is ${orders.status}`;
  } catch (error) {
    showOutput.innerText = "error occured!";
  }
};

asyncFunction("https://example.com/order/status/OR00A12");

// Output on the DOM should be:
// Hello Kajal Kumari your order status is delivery pending.
