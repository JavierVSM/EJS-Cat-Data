const express = require( 'express' );
const { brotliDecompress } = require('zlib');
const app = express();

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/cat1", function (request, response){
    let cat_info = {
        pic:"cat1.jpg",
        food: "Spaghetti", 
        age: 3, 
        spot: ['under the bed', 'in the sunbeam']
    };
    response.render('details', {cat: cat_info});
})

app.get("/cat2", function (request, response){
    let cat_info = {
        pic:"cat2.jpg",
        food: "Pizza", 
        age: 4, 
        spot: ['with the dog', 'in the dark']
    };
    response.render('details', {cat: cat_info});
})

app.get("/cat3", function (request, response){
    let cat_info = {
        pic:"cat3.jpg",
        food: "Ice Cream", 
        age: 2, 
        spot: ['on the roof', 'into the wash machine']
    };
    response.render('details', {cat: cat_info});
})

app.listen(8000, function() {
    console.log("listening on port 8000");
  })