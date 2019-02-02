var ingredients = ["Pasta", "Couscous", "Rice", "White sugar", "Brown sugar", "Powdered sugar", "Baking powder", "Active dry yeast", "Chicken stock", "Beef stock", "Milk", "Butter", "Heavy Cream", "Eggs", "Parmesan", "Bacon", "Parsley", "Celery", "Carrots", "Lemons", "Limes", "Orange juice", "Ketchup", "Mayonnaise", "Olive oil", "Vegetable oil", "Canola oil", "Vinegar", "Mustard", "Honey", "Garlic", "Shallots", "Potatoes", "Red onions", "Yellow onions", "Tomatoes", "Diced tomatoes", "Tomato sauce", "Tomato paste", "Crushed tomatoes"];

//List to be pushed to API
var yourList = [];

var foodItems = "";

//function that generates ingredients buttons to page
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


//Hovering over an ingredient button animates it and changes the class
$(".btn-success").hover(function () {
    $(this).addClass("btn-test", 250, "easeOutQuad")
} )

//moving off an ingredient button animates it and removes the class from above
$(".btn-success").mouseout(function () {
    $(this).removeClass("btn-test", 250, "easeInQuad")
})


//click handler that adds a button to the yourList array for API
$(".addIngredient").click(function() {

    //Stores the text of the button in a variable
    var ingredientName = $(this).text();

    //Assigns an attribute of data-name to the button, then stores it in variable dataName
    var dataName = $(this).attr("data-name");

    //Removes any spaces in the dataName variable
    dataName = dataName.replace(/ +/g, "")

    //Assigns an attribute of isAdded to the button, then stores it in variable added
    var added = $(this).attr("isAdded")

    //This adds and removes items from Your List by clicking on ingredient buttons

    //if the item is not already in Your List, 
    if (added==="false") {

        //append it to the did with an id of #id
        $("#list").append(`<li id = ${dataName}><input class="form-check-input" type="checkbox" id="isChecked" value=${ingredientName}>${ingredientName}</input></li>`);

        //change the isAdded attribute's value to true
        $(this).attr("isAdded", true);

        //Push the name of the ingredient to the array that with be fed to the API
        yourList.push(ingredientName);

        //If the item is already in Your List
    } else if (added==="true") {

        //Change the isAdded attribute's value to false
        $(this).attr("isAdded", false);

        //remove the div with an id of the name of the ingredient
        $(`#${dataName}`).remove();

        //Checks for value of ingredient name in yourList array, then returns an array without that ingredient name
        function isMatch(value) {
            return value !== ingredientName;
        }
        yourList = yourList.filter(isMatch);
    } 
    
});

$(".search").on("click", function(){

    var selectedItems = yourList.join();

    selectedItems = selectedItems.replace(/ +/g, "%20")

    var queryUrl= "https://www.food2fork.com/api/search?key=dde951870b4dbfb943f7bb40f23b9a18&q="+selectedItems+"&page=2"

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
            var rank = $("<p>"+"Social Rank:"+recipes[i].social_rank+"<p>")
            $(recipeCard).append(recipeTitle)
            $(recipeCard).append(`<a href=${recipes[i].source_url} target = "_blank"><img src=${recipes[i].image_url}></a> `)
            $(recipeCard).append(rank)
            $(".recipesContainer").append(recipeCard)
        }

    })

})



    
//This allows ingredients to be put in Your List manually via input field
$("#add-button").click(function() {

    //Stores the value of the input field into nameInput
    var nameInput = $("#name-input").val();

    //Only push to the list if there is something in the input field
    if ($("#name-input").val() !== "") {

        //Add the value of the input field to the list
        $("#list").append(`<li id = ${$("#name-input").val()} ><input class="form-check-input" type="checkbox" id="isChecked" >${nameInput}</input></li>`)

        //push that value to the array
        yourList.push($("#name-input").val())

        //clear the input field
        $("#name-input").val("");
    }
});


//This allows ingredients to be removed from the list if they are checked
$("#remove-button").click(function() {
    var ingredientList = $(".form-check-input");

$.each(ingredientList, (element, value) => {
    if (value.checked == true) {
        $(value).parent().remove();
    }
});
 
})

$("#remove-all").on("click", function() {
    $("#list").empty();
})
    var ingredientID = ingredientList.parent().attr("id");
    $.each(ingredientList, (element, value) => {
        var targetLi = $(value).parent()[0]
        var targetText = $(targetLi).text();
        
        console.log(targetText);
        if (value.checked == true) {
            $(value).parent().remove();
            function isMatch(value) {
                return value !== targetText
            }
            yourList = yourList.filter(isMatch);          
        }
        
    });
})
