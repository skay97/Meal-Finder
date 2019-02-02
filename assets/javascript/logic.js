
var ingredients = ["Pasta", "Couscous", "Rice", "All-purpose flour", "White sugar", "Brown sugar", "Powdered sugar", "Baking powder", "Active dry yeast", "Chicken stock", "Beef stock", "Milk", "Butter", "Heavy Cream", "Eggs", "Parmesan", "Bacon", "Parsley", "Celery", "Carrots", "Lemons", "Limes", "Orange juice", "Ketchup", "Mayonnaise", "Olive oil", "Vegetable oil", "Canola oil", "Vinegar", "Mustard", "Honey", "Garlic", "Shallots", "Potatoes", "Red onions", "Yellow onions", "Tomatoes", "Diced tomatoes", "Tomato sauce", "Tomato paste", "Crushed tomatoes"];
var yourList = [];

var foodItems = "";

// $(document).on("click", ".btn-success", function () {
    
//     var recipe = $(this).text();
//     var queryURL = "https://www.food2fork.com/api/get?key=024036f3c7d4150404b73b0146508369&rId=35382"
        
   
//         $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//         .then(function (response) {
//             var results = response.data;

//             for (var i = 0; i < ingredients.length; i++) {
//                 var apiDiv = $("<div>");

//                 var imageURL = results[i].image_url;
//                 var title = results[i].title;
//                 var socialRank = results[i].social_rank;

//                 var recipeImage = $("<img>");

//                 recipeImage.attr("src", "socialRank");
//                 recipeImage.attr("src", "ingredients");
//                 recipeImage.attr("text", "title");


//                 // Get the api to populate to the top
//                 apiDiv.prepend(recipeImage);


//                 $("#recipes-go-here").prepend(apiDiv);

//             }

//         });
// });

function makeButton() {
    $("#button-holder").empty();

    for (var i=0; i < ingredients.length; i++) {
        var createButton = $(`<button class='btn btn-success'>${ingredients[i]}</button>`);
        createButton.addClass("addIngredient")
        createButton.attr("data-name", ingredients[i]);
        createButton.attr("isAdded", false);
        $("#button-holder").append(createButton);
    }
}

makeButton();

$(".btn-success").hover(function () {
    $(this).addClass("btn-test", 250, "easeOutQuad")
} )
$(".btn-success").mouseout(function () {
    $(this).removeClass("btn-test", 250, "easeInQuad")
})

$(".addIngredient").click(function() {
    //check box
    var ingredientName = $(this).text();
    var dataName = $(this).attr("data-name");
    dataName = dataName.replace(/ +/g, "")
    var added = $(this).attr("isAdded")
    if (added==="false") {
        $("#list").append(`<li id = ${dataName}><input class="form-check-input" type="checkbox" id="isChecked">${ingredientName}</input></li>`);
        $(this).attr("isAdded", true);
        yourList.push(ingredientName);
    } else if (added==="true") {
        $(this).attr("isAdded", false);

        $(`#${dataName}`).remove();
        function isMatch(value) {
            return value !== ingredientName;
        }

        yourList = yourList.filter(isMatch);
        console.log(yourList);
    } 
    
});

$(".search").on("click", function(){

    var queryUrl= "https://www.food2fork.com/api/search?key=ff19b0555b6cda447e11ade9c8664bf8&q=chicken%20breast&page=2"

    $.ajax({
        url : queryUrl,
        method: "get"
    }).then(function(response){
        
        var results = JSON.parse(response)
        console.log(typeof results)

        var recipes = results.recipes

        for (var i = 0; i<5; i++){

            var recipeCard = $("<div class=recipeCard>");
            var recipeTitle = $("<h3>"+recipes[i].title+"<h3>")
            var showRecipe = $("<img>");
            var rank = $("<p>"+"Social Rank:"+recipes[i].social_rank+"<p>")
            showRecipe.attr("src",recipes[i].image_url);
            $(recipeCard).append(recipeTitle)
            $(recipeCard).append(showRecipe)
            $(recipeCard).append(rank)
            $(".recipesContainer").append(recipeCard)
        }

    })

})



    //append an li to ul
    

$("#add-button").click(function() {
    var nameInput = $("#name-input").val();
    if ($("#name-input").val() !== "") {
        $("#list").append(`<li id = ${$("#name-input").val()} ><input class="form-check-input" type="checkbox" id="isChecked" >${nameInput}</input></li>`)
        yourList.push($("#name-input").val())
        $("#name-input").val("");
    }
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
  
$("#remove-button").click(function() {
    var ingredientList = $(".form-check-input");
$.each(ingredientList, (element, value) => {
    if (value.checked == true) {
        $(value).parent().remove();
    }
});
 
})
