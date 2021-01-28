function searchStations() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchStations");
    filter = input.value.toLowerCase();
    table = document.getElementById("stationTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
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

function addStation() {
    var stationDialog = document.getElementById('addStationDialog');
    stationDialog.classList.remove('hidden')
}

function hideDialog() {
    var stationDialog = document.getElementById('addStationDialog');
    stationDialog.classList.add('hidden')
}

$(document).ready(function () {

    // FETCHING DATA FROM JSON FILE 
    $.getJSON("./database.json",
        function (data) {
            var stations = '';
            var dmapURL = 'http://phoenixcraft.serv.nu:10445/index.html?&zoom=6'

            // ITERATING THROUGH OBJECTS 
            $.each(data, function (key, value) {

                //CONSTRUCTION OF ROWS HAVING 
                // DATA FROM JSON OBJECT 
                stations += '<tr>';
                stations += '<td>' +
                    value.StationName + '</td>';

                stations += '<td><a href="' + dmapURL + '&x=' + value.StationLocation[0] + '&y=' + value.StationLocation[1] + '&z=' + value.StationLocation[2] + '">' +
                    value.StationLocation[0] + ' ' + value.StationLocation[1] + ' ' + value.StationLocation[2] + ' ' + '</a></td>';

                stations += '<td>';
                value.StationConnections.sort().forEach(function(entry) {
                    stations += '<a onclick="searchStn(' + "'" + entry + "'" + ')">' + entry + '</a>, ';
                });
                stations += '</td>';

                stations += '</tr>';
            });

            //INSERTING ROWS INTO TABLE  
            $('#stationTable').append(stations);
        });
});

async function searchStn(product) {
    const input = document.getElementById("searchStations");
    input.value = product;
    searchStations();
}

function sortTable(col) {
    var table, rows, switching, i, x, y, shouldSwitch;
    const cols = ["Name", "Location", "Connections"]
    var column = cols.indexOf(col)
    table = document.getElementById("stationTable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[column];
            y = rows[i + 1].getElementsByTagName("TD")[column];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}