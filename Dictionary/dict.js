$(document).ready(function () {
    $("#search").click(function (event) {
        event.preventDefault();

        var word = document.getElementById("word").value;
        $.post("http://localhost:8080/search", { word })
            .done(function (data) {
                showresult(data);
            })
            .fail(function (err) {
                showError(err);
            });
    });
});

function showresult(obj) {
    $(".divTable").empty();
    for (let i = 0; i < obj.length; i++) {
        $(".divTable").append(
            `<div class="divRow">${i + 1}(${obj[i].wordtype}):: ${ obj[i].definition}</div>`
        );
    }
}
function showError(err) {
    $(".divTable").empty();
    console.log(err);
    $(".divTable").append(
        `<div class="divRow">${
            err.responseText ? err.responseText : err.statusText
            }`
    );
}
