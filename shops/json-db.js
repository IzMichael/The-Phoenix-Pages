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
                    value.ShopProducts.join(', ') + '</td>';

                shops += '</tr>';
            });

            //INSERTING ROWS INTO TABLE  
            $('#shopTable').append(shops);
        });
});