var words = [
    "You can click on the coordinates to go to those coordinates on Dynmap",
    "Click on a shop product to see all the shops that sell that product",
    "Right Click on the search box to clear the search",
    "You can add a Shop or PRN Station by clicking the 'Add' button below the database",
    "You can click on the column header to sort that column alphabetically",
    "Click on a PRN Station connection to see that station",
    "You can see every change made by going to the 'Logs' page"
];
var i = 0;
var text = "This text changes";

function getChangedText() {
    i = (i + 1) % words.length;
    return words[i];
}

function changeText() {
    var txt = getChangedText();
    var d = document.getElementById("tips");
    d.innerHTML = 'Tip: ' + txt;
}
setTimeout("changeText()", 1000)
setInterval("changeText()", 10000);