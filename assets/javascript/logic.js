// List of food ingredients
var ingredients = ["Butter", "Milk", "Eggs", "Flour", "Tomato", "Rice", "Apple", "Rice", "Pasta", "Chicken", "Fish"];

var foodItems = "";

$(document).on("click", ".btn-success", function () {
    
    var recipe = $(this).text();
    var queryURL = "https://www.food2fork.com/api/get?key=024036f3c7d4150404b73b0146508369&rId=35382"
        
   
        $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;

            for (var i = 0; i < ingredients.length; i++) {
                var apiDiv = $("<div>");

                var imageURL = results[i].image_url;
                var title = results[i].title;
                var socialRank = results[i].social_rank;

                var recipeImage = $("<img>");

                recipeImage.attr("src", "socialRank");
                recipeImage.attr("src", "ingredients");
                recipeImage.attr("text", "title");


                // Get the api to populate to the top
                apiDiv.prepend(recipeImage);


                $("#recipes-go-here").prepend(apiDiv);

            }

        });
});
var ingredients = ["brocolli", "carrots", "apples"];


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

