//Use this URL - https://example.com/photo to make a fake fetch
//call and show an image on the DOM using the photo link received in the response. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const showOutput = document.querySelector("#output");

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/photo") {
        resolve({
          status: 200,
          data: {
            photo: {
              link: "https://source.unsplash.com/featured/300x201",
              title: "Random Image",
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
    const src = response.data.photo.link;
    console.log(src);
    showOutput.innerHTML = `<img src=${src} alt=${response.data.photo.title} />`;
  } catch (error) {
    showOutput.innerHTML = "<h3>No image</h3>";
  }
};
asyncFunction("https://example.com/photo");

// Output: an image on the DOM
