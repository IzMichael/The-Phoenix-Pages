function searchProducts() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchProducts");
    filter = input.value.toLowerCase();
    table = document.getElementById("shopTable");
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

function addShop() {
    var shopDialog = document.getElementById('addShopDialog');
    shopDialog.classList.remove('hidden')
}

function hideDialog() {
    var shopDialog = document.getElementById('addShopDialog');
    shopDialog.classList.add('hidden')
}

$(document).ready(function () {

    // FETCHING DATA FROM JSON FILE 
    $.getJSON("./database.json",
        function (data) {
            var shops = '';
            var dmapURL = 'http://phoenixcraft.serv.nu:10445/index.html?&zoom=6'

            // ITERATING THROUGH OBJECTS 
            $.each(data, function (key, value) {

                //CONSTRUCTION OF ROWS HAVING 
                // DATA FROM JSON OBJECT 
                shops += '<tr>';
                shops += '<td>' +
                    value.ShopName + '</td>';

                shops += '<td>' +
                    value.ShopOwner + '</td>';

                shops += '<td><a href="' + dmapURL + '&x=' + value.ShopLocation[0] + '&y=' + value.ShopLocation[1] + '&z=' + value.ShopLocation[2] + '">' +
                    value.ShopLocation[0] + ' ' + value.ShopLocation[1] + ' ' + value.ShopLocation[2] + ' ' + '</a></td>';

                shops += '<td>' +
                    value.ShopProducts.sort().join(', ') + '</td>';

                shops += '</tr>';
            });

            //INSERTING ROWS INTO TABLE  
            $('#shopTable').append(shops);
        });
});

function sortTable(col) {
    var table, rows, switching, i, x, y, shouldSwitch;
    const cols = ["Name", "Owner", "Location", "Products"]
    var column = cols.indexOf(col)
    table = document.getElementById("shopTable");
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