$(document).ready(function() {
    createGrid(16);
});

function createGrid(size) {
    var container = $(".container");

    for (var i = 0; i < size; i++) {
        var row = $("<div class='row'></div>");
        for (var j = 0; j < size; j++) {
            var square = $("<div class='square'></div>");

            square.on({
                mouseenter: function() {
                    $(this).addClass("active");
                },
                mouseleave: function() {
                    // Do nothing on mouse leave
                }
            });

            row.append(square);
        }
        container.append(row);
    }
}