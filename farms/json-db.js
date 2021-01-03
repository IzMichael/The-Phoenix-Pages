function searchProducts() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchProducts");
    filter = input.value.toLowerCase();
    table = document.getElementById("farmTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function addFarm() {
    var farmDialog = document.getElementById('addFarmDialog');
    farmDialog.classList.remove('hidden')
}

function hideDialog() {
    var farmDialog = document.getElementById('addFarmDialog');
    farmDialog.classList.add('hidden')
}

$(document).ready(function () {

    // FETCHING DATA FROM JSON FILE 
    $.getJSON("./database.json",
        function (data) {
            var farms = '';
            var dmapURL = 'http://phoenixcraft.serv.nu:10445/index.html?&zoom=6'

            // ITERATING THROUGH OBJECTS 
            $.each(data, function (key, value) {

                //CONSTRUCTION OF ROWS HAVING 
                // DATA FROM JSON OBJECT 
                farms += '<tr>';
                farms += '<td>' +
                    value.FarmName + '</td>';

                farms += '<td>' +
                    value.FarmOwner + '</td>';

                farms += '<td><a href="' + dmapURL + '&x=' + value.FarmLocation[0] + '&y=' + value.FarmLocation[1] + '&z=' + value.FarmLocation[2] + '">' +
                    value.FarmLocation[0] + ' ' + value.FarmLocation[1] + ' ' + value.FarmLocation[2] + ' ' + '</a></td>';

                farms += '<td>' +
                    value.FarmProducts.join(', ') + '</td>';

                farms += '</tr>';
            });

            //INSERTING ROWS INTO TABLE  
            $('#farmTable').append(farms);
        });
});