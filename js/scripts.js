src="node_modules/jquery/dist/jquery.slim.min.js"

$(function() {
    $("#reserveButton").click(function() {
        $("#reserveModal").modal("show");
    });

    $("#loginButton").click(function() {
        $("#loginModal").modal("show");
    })
});