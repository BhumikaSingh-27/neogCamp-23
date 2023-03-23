//6. EXAMPLE QUESTION: (Solution has been provided for this question for your understanding)
    
// Use this URL - https://example.com/api/itemlist to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question



const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/itemlist") {
          reject({
            status: 404,
            message: "Items list not found."
          });
        } else {
          resolve({
            status: 200,
            data: {
              message: "Success",
              data: [
                { itemName: "Bread", price: 30 },
                { itemName: "Water Bottle", price: 50 },
                { itemName: "Dairy Milk", price: 20 }
              ]
            }
          });
        }
      }, 2000);
    });
  }
  const displayOutput = document.querySelector("#output");
  
  fakeFetch("http://example.com/api/itemlist1")
    .then(({data:{data}}) => data.map((obj)=> displayOutput.innerHTML += `<li>${obj.itemName} ${obj.price}</li>`))
    .catch((error) => {
      if (error.status === 404) {
        displayOutput.textContent =
          "The data you are looking for, does not exist.";
      }
    });
  
//   fakeFetch("http://example.com/api/itemlist1")
//     .then(({data}) => data.data.reduce((acc,obj)=> displayOutput.innerHTML += `<h2>${obj.itemName} ${obj.price}</h2`,``))
//     .catch((error) => {
//       if (error.status === 404) {
//         displayOutput.textContent =
//           "The data you are looking for, does not exist.";
//       }
//     });