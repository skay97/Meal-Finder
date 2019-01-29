var ingredients = [];

function makeButton() {
    $(buttons id).empty();

    for (i=0; i < ingredients.length; i++) {
        var createButton = $(`<button>${ingredients[i]}</button>`);
        createButton.attr("id", "addIngredient");
        createButton.attr("data-name", ingredients[i]);
        createButton.attr("isAdded", false);
    }
}

$(".food").click(function() {
    //check box
    console.log($(this).text());
    console.log($(this).buttonState);
    if (this.buttonState = false) {
        $("#ingredientList").append(this.text);
        this.buttonState = true;
    } else {
        $("#ingredientList").remove(this.text);
        this.buttonState = false
    }
    //append an li to ul
    
});