var attempt = 3;

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var age = today[0] - bthday[0];
    if (today[1] < bthday[1]) age -= 1;
    else if (today[1] == bthday[1] && today[2] < bthday[2]) {
        age -= 1;
    }
    if (username == "admin" && password == "admin") {
        alert("login Succesfully");
        window.open("http://localhost:63342/untitled6/Meun.html?_ijt=g1qp2emdlpgl6je8u68uq8orll");
        return false;
    } else {
        attempt--;
        alert("Login Credentials Incorrect" + "     " + "You have left" + "  " + attempt + "   " + "attempt");
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("Login").disabled = true;
            return false;
        }
    }
}

(function(document) {
    'use strict';

    var LightTableFilter = (function(Arr) {

        var _input;
        var _select;

        function _onInputEvent(e) {
            _input = e.target;
            var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
            Arr.forEach.call(tables, function(table) {
                Arr.forEach.call(table.tBodies, function(tbody) {
                    Arr.forEach.call(tbody.rows, _filter);
                });
            });
        }

        function _onSelectEvent(e) {
            _select = e.target;
            var tables = document.getElementsByClassName(_select.getAttribute('data-table'));
            Arr.forEach.call(tables, function(table) {
                Arr.forEach.call(table.tBodies, function(tbody) {
                    Arr.forEach.call(tbody.rows, _filterSelect);
                });
            });
        }

        function _filter(row) {

            var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
            row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';

        }

        function _filterSelect(row) {

            var text_select = row.textContent.toLowerCase(), val_select = _select.options[_select.selectedIndex].value.toLowerCase();
            row.style.display = text_select.indexOf(val_select) === -1 ? 'none' : 'table-row';

        }

        return {
            init: function() {
                var inputs = document.getElementsByClassName('light-table-filter');
                var selects = document.getElementsByClassName('select-table-filter');
                Arr.forEach.call(inputs, function(input) {
                    input.oninput = _onInputEvent;
                });
                Arr.forEach.call(selects, function(select) {
                    select.onchange  = _onSelectEvent;
                });
            }
        };
    })(Array.prototype);

    document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
            LightTableFilter.init();
        }
    });

})(document);


