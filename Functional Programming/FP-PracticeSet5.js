const movieList = [
    {id:1, title:"The Lord of the Rings",director:"Peter Jackson" },
    {id:2, title:"12 Angry Men",director: "Sidney Lumet"},
    {id:3, title:"City of God",director: "Fernando Meirelles"},
    {id:4, title:"The Godfather",director:"Francis Ford Coppola" },
    {id:5, title:"Se7en",director: "David Fincher"},
]


export default function movieWatchlist(){
    return (
        <div><h1>Movie Watch List</h1>
        <ul>
            {movieList.map(item =>(
            <li>{item.title} : {item.director}</li>)
            )}
            </ul>
            </div>
    )
}


//q2
const products = [
    { name: "Toothbrush", price: 29, category: "health" },
    { name: "Coffee Maker", price: 99, category: "home" },
      { name: "iPad", price: 799, category: "electronics" },
    { name: "Smartwatch", price: 199, category: "electronics" },
  ];
  
  export default function displayProductDetails(){
    return (
        <div>
            <h1>Product Details</h1>
            {products.map(item => (
                <li>{item.name} {item.price} {item.category}</li>
            ))}
        </div>
    )
  }

  //q3
  const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", rating: 8 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", rating: 9.2 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", rating: 8.1 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", rating: 7.2 },
  ];

  export default function showBookDetails(){
    return (
        <div><h1>Book Details</h1></div>
        { books.map(item => (
            <li>
                {item.title} : {item.authour} :{item.rating}
            </li>
        ))}

    )
  }
  

  //q4
  //q5
//q6
const cars = [
    { id:1 ,make: "Toyota", model: "Corolla",  price: 2010 },
    { id:2, make: "Honda", model: "Civic",  price: 2012 },
    { id:3 ,make: "Toyota", model: "Camry", price: 2015 },
    { id:4 ,make: "Ford", model: "Mustang", price: 2018 },
  ];
  
  export default function carDetails(){
    return (
        <div>
            <h1>
                Car Details
            </h1>
            <ul>
                {cars.map(({id,make,model,price})=>
                (<li key={id}> {make} {model} {price}
  
                </li>))}
            </ul>
        </div>
    )
  }

  //q7
  const students = [
    { id:1,name: "Alice", grade: 90, attendance: true},
    { id:2,name: "Bob", grade: 80 ,attendance: false},
    { id:3,name: "Charlie", grade: 95, attendance:true},
    { id:4,name: "David", grade: 85, attendance:true},
  ];

  export default function studentDetails(){
    return (
        <div>
            <h1>
                Student Details
            </h1>
        <ol>
            {studentNames.map(({name,grade,attendance})=>(
                <li key={id}>
                    {name} : {grade} : {attendance}
                </li>
            ))}
        </ol>
        </div>
    )
  }

  //q8
  const movieList = [
    { id: 1, title: "The Lord of the Rings", director: "Peter Jackson" , runtime:"120 mins"},
    { id: 2, title: "12 Angry Men", director: "Sidney Lumet" , runtime:"190 mins"},
    { id: 3, title: "City of God", director: "Fernando Meirelles" , runtime:"150 mins"},
    { id: 4, title: "The Godfather", director: "Francis Ford Coppola" , runtime:"129 mins"},
    { id: 5, title: "Se7en", director: "David Fincher" , runtime:"120 mins"}
  ];
  
  export default function movieList(){
    return (
      <div>
        <h1>Movie WatchList</h1>
        <ol>
            {movieList.map(({id,title,director,runtime})=>
            (
                <li key={id}> {title} : {director} : {runtime}

                </li>
            ))}
        </ol>
        </div>
    )
  }

  //q9
  const products = [
    { id: 1,name: "Toothbrush", price: 29, category: "health" },
    { id: 2,name: "Coffee Maker", price: 99, category: "home" },
      { id: 3 ,name: "iPad", price: 799, category: "electronics" },
    { id: 4 ,name: "Smartwatch", price: 199, category: "electronics" },
  ];

  export default function showDetails(){
    return (
        <div>
          <h1>Movie WatchList</h1>
          <ol>
              {products.map(({id,name,price,category})=>
              (
                  <li key={id}> {name} : {price} : {category}
  
                  </li>
              ))}
          </ol>
          </div>
      )
    }
  
    //10
    const recipes = [  
        { 
            id: 1,    
            name: "Spaghetti with Meatballs",    
            ingredients: [      
                "1 lb spaghetti",      
                "1 lb ground beef",     
                "1 cup breadcrumbs",      
                "1 egg",      
                "1/4 cup chopped parsley",      
                "1/4 cup grated Parmesan cheese",      
                "1/4 cup milk",      
                "1/2 teaspoon salt",      
                "1/2 teaspoon black pepper",      
                "2 tablespoons olive oil",      
                "1 onion, chopped",      
                "3 cloves garlic, minced",      
                "1 can (28 oz) crushed tomatoes",      
                "1 teaspoon sugar",      
                "1/4 teaspoon red pepper flakes",      
                "1/4 cup chopped fresh basil",    
            ],
        instructions: [
          "1. Cook the spaghetti according to package instructions until al dente.",
          "2. In a large bowl, combine the ground beef, breadcrumbs, egg, parsley, Parmesan, milk, salt, and pepper. Mix until well combined and form into meatballs.",
          "3. In a large skillet, heat the olive oil over medium heat. Add the onion and garlic and cook until softened, about 5 minutes.",
          "4. Add the crushed tomatoes, sugar, and red pepper flakes. Bring to a simmer and add the meatballs. Cover and simmer for 15-20 minutes, until the meatballs are cooked through.",
          "5. Serve the meatballs and sauce over the cooked spaghetti. Garnish with fresh basil.",
        ],
      },
      {
        id: 2,
        name: "Chocolate Chip Cookies",
        ingredients: [
          "2 1/4 cups all-purpose flour",
          "1 teaspoon baking soda",
          "1 teaspoon salt",
          "1 cup unsalted butter, at room temperature",
          "3/4 cup white sugar",
          "3/4 cup brown sugar",
          "2 large eggs",
          "2 teaspoons vanilla extract",
          "2 cups semisweet chocolate chips",
        ],
        instructions: [
          "1. Preheat the oven to 375 degrees F (190 degrees C). Line a baking sheet with parchment paper.",
          "2. In a medium bowl, whisk together the flour, baking soda, and salt.",
          "3. In a large bowl, beat together the butter, white sugar, and brown sugar until light and fluffy, about 2-3 minutes.",
          "4. Add the eggs one at a time, beating well after each addition. Stir in the vanilla extract.",
          "5. Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
          "6. Stir in the chocolate chips.",
          "7. Drop the dough by rounded tablespoons onto the prepared baking sheet, spacing the cookies about 2 inches apart.",
          "8. Bake for 10-12 minutes, until the edges are golden brown and the centers are set.",
          "9. Cool the cookies on the baking sheet for 5 minutes, then transfer to a wire rack to cool completely.",
        ],
      },
    ];