src="node_modules/jquery/dist/jquery.slim.min.js"

//Login and Reserve Campsite buttons
$(function() {
    $("#reserveButton").click(function() {
        $("#reserveModal").modal("show");
    });

    $("#loginButton").click(function() {
        $("#loginModal").modal("show");
    })
});