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

