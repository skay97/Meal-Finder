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
