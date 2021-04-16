var words = [
    "You can click on coordinates to go to those coordinates on Dynmap",
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
// setTimeout("changeText()", 1000)
setInterval("changeText()", 10000);

var fullscreen = false;

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        togglefullscreen()
        console.log('esc')
    }
    return
})
function togglefullscreen() {
    var header = document.getElementsByTagName('header')[0]
    var footer = document.getElementsByTagName('footer')[0]
    if (fullscreen === false) {
        header.style.display = 'none';
        footer.style.display = 'none';
        fullscreen = true;
        Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: 'Press "Esc" to return',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        header.style.display = 'flex';
        footer.style.display = 'flex';
        fullscreen = false;
    }
}