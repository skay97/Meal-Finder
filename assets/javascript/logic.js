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
    
});

$("#search").on("click", function(){

    var queryUrl= "https://www.food2fork.com/api/search?key=ff19b0555b6cda447e11ade9c8664bf8&q=chicken%20breast&page=2"

    $.ajax({
        url : queryUrl,
        method: "get"
    }).then(function(response){
        
        var results = JSON.parse(response)
        console.log(typeof results)

        var recipes = results.recipes

        for (var i = 0; i<5; i++){

            var recipeDiv = $("<div class=recipeDiv>");
            var showRecipe = $("<img>");
            showRecipe.attr("src",recipes[i].image_url);
            showRecipe.addClass("recipe");
            $(recipeDiv).append(showRecipe)
            $(".recipesContainer").append(recipeDiv)
        }

    })

})



