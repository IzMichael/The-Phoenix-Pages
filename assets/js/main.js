var words = [
    "You can click on the coordinates to go to those coordinates on Dynmap",
    "You can add a shop or farm by clicking the 'Add' button below the database"
];
var i = 0;
var text = "This text changes";

function getChangedText() {
    i = (i + 1) % words.length;
    return text.replace(/This text changes/, words[i]);
}

function changeText() {
    var txt = getChangedText();
    var d = document.getElementById("tips");
    d.innerHTML = 'Tip: ' + txt;
}
setTimeout("changeText()", 100)
setInterval("changeText()", 10000);