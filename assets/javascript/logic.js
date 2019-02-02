// List of food ingredients
var ingredients = ["Butter", "Milk", "Eggs", "Flour", "Tomato", "Apple", "Rice", "Pasta", "Chicken", "Fish"];

var foodItems = "";

$(document).on("click", ".addIngredient", function () {
    
    var recipe = $(this).text();
    // var queryURL = "https://www.food2fork.com/api/search?key=024036f3c7d4150404b73b0146508369&rId=35382&q=chicken%20breast&page=2"
        
   
        $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (res) {
            var results = JSON.parse(res);
            console.log(results.count);
            console.log(results)
            var recipes = results.recipes;

            for (var i = 0; i < recipes.length; i++) {
                var apiDiv = $("<div>");

                var imageURL = recipes[i].image_url;
                console.log(imageURL);
                var title = recipes[i].title;
                

                var recipeImage = $("<img>");

                recipeImage.attr("src", imageURL);

                // Get the api to populate to the bottom
                apiDiv.prepend(recipeImage);


                $("#recipes-go-here").prepend(apiDiv);

            }

        });
});

// var ingredients = ["brocolli", "carrots", "apples"];


function makeButton() {
    $("#button-holder").empty();

    for (var i=0; i < ingredients.length; i++) {
        var createButton = $(`<button>${ingredients[i]}</button>`);
        createButton.addClass("addIngredient")
        createButton.attr("data-name", ingredients[i]);
        createButton.attr("isAdded", false);
        $("#button-holder").append(createButton);
    }
}

makeButton();

$(".addIngredient").click(function() {
    //check box
    var ingredientName = $(this).text();
    var dataName = $(this).attr("data-name");
    var added = $(this).attr("isAdded")
    if (added==="false") {
        $("#list").append(`<ul id = ${dataName}><input class="form-check-input" type="checkbox" >${ingredientName}</input></ul>`);
        $(this).attr("isAdded", true);

    } else if (added==="true") {
        $(this).attr("isAdded", false);
        $(`#${dataName}`).remove();  
    } 
    //append an li to ul
    
});

// Button click sound
$(document).ready(function() {
    
    var audio  = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3');
    var audio2 = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3')
  
    $("button").mousedown(function() {
      audio2.load();
      audio2.play();
    });
      
    $("button").mouseup(function() {
      audio.load();
      audio.play();
    });
  });