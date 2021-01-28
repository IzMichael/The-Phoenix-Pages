var words = [
    "You can click on the coordinates to go to those coordinates on Dynmap",
    "You can add a Shop or PRN Station by clicking the 'Add' button below the database",
    "You can click on the column header to sort that column alphabetically",
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