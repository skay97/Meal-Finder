var ingredients = ["Pasta", "Couscous", "Rice", "All-purpose flour", "White sugar", "Brown sugar", "Powdered sugar", "Baking powder", "Baking powder", "Active dry yeast", "Chicken stock", "Beef stock", "Milk", "Butter", "Heavy Cream", "Eggs", "Parmesan", "Bacon", "Parsley", "Celery", "Carrots", "Lemons", "Limes", "Orange jiuce", "Ketchup", "Mayonnaise", "Olive oil", "Vegetable oil", "Canola oil", "Vinegar", "Mustard", "Honey", "Garlic", "Shallots", "Potatoes", "Red onions", "Yellow onions", "Tomatoes", "Diced tomatoes", "Tomato sauce", "Tomato paste", "Crushed tomatoes"];
var yourList = [];

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
        $("#list").append(`<li id = ${dataName}><input class="form-check-input" type="checkbox" id="isChecked">${ingredientName}</input></li>`);
        $(this).attr("isAdded", true);
        yourList.push(dataName);
    } else if (added==="true") {
        $(this).attr("isAdded", false);
        $(`#${dataName}`).remove();  
        yourList.splice(dataName);
    } 
    //append an li to ul
    
});

$("#add-button").click(function() {
    var nameInput = $("#name-input").val();
    if ($("#name-input").val() !== "") {
        $("#list").append(`<li id = ${$("#name-input").val()} ><input class="form-check-input" type="checkbox" id="isChecked" >${nameInput}</input></li>`)
        yourList.push($("#name-input").val())
        $("#name-input").val("");
    }
});

$("#remove-button").click(function() {
    var ingredientList = $(".form-check-input");
$.each(ingredientList, (element, value) => {
    if (value.checked == true) {
        $(value).parent().remove();
    }
});
 
})