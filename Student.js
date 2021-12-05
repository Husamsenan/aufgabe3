function addStudent() {
    var id = document.getElementById("Id").value;
    var fn = document.getElementById("First Name").value;
    var ln = document.getElementById("Last Name").value;
    var dob = document.getElementById("DOB").value;
    var gender = document.getElementById("Male").value;
    var departement = document.getElementById("department").value;
    var email = document.getElementById("email").value;
    var join = document.getElementById("joindate").value;

    var table = document.getElementById("Studens");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    cell1.innerHTML = id;
    cell2.innerHTML = fn;
    cell3.innerHTML = ln;
    cell4.innerHTML = dob;
    cell5.innerHTML = gender;
    cell6.innerHTML = departement;
    cell7.innerHTML=email;
    cell8.innerHTML=join;
    ageCalculator();
}


function ageCalculator() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if (userinput == null || userinput == '') {
        return false;
    } else {

        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff);
        var year = age_dt.getUTCFullYear();
        var age = Math.abs(year - 1970);
        if (age <= 17 || age > 60) {
            alert("only between 17 and 60");
        }

    }

}