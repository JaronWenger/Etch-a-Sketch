$(document).ready(function() {
    createGrid(16);

    $("#resize").click(function() {
        var newSize = prompt("Enter the new grid size:");
        newSize = parseInt(newSize); // Convert input to a number

        if (!isNaN(newSize) && newSize > 0) {
            clearGrid();
            createGrid(Math.min(newSize, 100)); // Limit size to a maximum of 100
        }
    });
});

function createGrid(size) {
    var container = $(".container");

    for (var i = 0; i < size; i++) {
        var row = $("<div class='row'></div>");
        for (var j = 0; j < size; j++) {
            var square = $("<div class='square'></div>");
            square.data("darkness", 0); // Initialize darkness level

            square.hover(
                function() {
                    var currentDarkness = $(this).data("darkness");
                    if (currentDarkness < 1) {
                        currentDarkness += 0.1;
                        $(this).css("background-color", "rgba(45, 30, 60, " + currentDarkness + ")");
                        $(this).data("darkness", currentDarkness);
                    }
                }
            );

            row.append(square);
        }
        container.append(row);
    }
}

function clearGrid() {
    $(".container").empty();
}
