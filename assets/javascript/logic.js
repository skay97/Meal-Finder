// List of food ingredients
var ingredients = ["Butter", "Milk", "Eggs", "Flour", "Tomato", "Rice", "Apple", "Rice", "Pasta", "Chicken", "Fish"  ];

var foodItems = "";

$(document).on("click", ".btn-success", function () {
    
    var recipe = $(this).text();
    var queryURL = "https://rapidapi.com/spoonacular/api/recipe-food-nutrition?endpoint=55e1b3e1e4b0b74f06703be6" +
    recipe + "&api_key=a9a42c721fmshc3f701a061f5b6dp174603jsn54a9e6431932";
        
   
        $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            for (var i = 0; i < ingredients.length; i++) {
                var apiDiv = $("<div>");

                var imageURL = recipe.image_url;
                var title = recipe.title;
                var socialRank = recipe.social_rank;
                var ingredients = recipe.ingredients;

                var recipeImage = $("<img>");

                recipeImage.attr("src", imageURL);
                recipeImage.attr("alt", "imageURL");
                recipeImage.attr("src", "title");
                recipeImage.attr("src", "socialRank");
                recipeImage.attr("src", "ingredients");
                recipeImage.addClass("receipe-image");


                $("placeholder").prepend(recipeImage);
                $("placeholder").prepend(title);
                $("placeholder").prepend(socialRank);
                $("placeholder").prepend(ingredients);

                // Get the api to populate to the top
                apiDiv.prepend(p);
                apiDiv.prepend(recipeImage);


                $("#recipes-go-here").prepend(apiDiv);

            }

        });
});