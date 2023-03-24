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
                commentBody: "Good going a lot to learn from you awesome"
              },
              {
                email: "ram99@gmail.com",
                commentBody: "Anyone from Vadodara here"
              }
            ]
          });
        } else {
          reject({
            status: 404,
            message: "No Commentes found."
          });
        }
      }, 2000);
    });
  };


  fakeFetch("https://example.com/post/comments").then((data)=> data.data.map(({email})=>console.log(email)))