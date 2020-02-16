var century, year, month, dayOfMonth, dayOfWeek, day;

function getInput() {
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    dayOfMonth = parseInt(document.getElementById("monthday").value);


    if (century == "") {
        alert("Invalid century");

    } else if (year == "") {
        alert("Invalid year");

    } else if (month == "" || month > 12 || month < 1) {
        alert("Invalid month");

    } else if (dayOfMonth == "" || dayOfMonth > 31 || dayOfMonth < 1) {
        alert("invalid date");

    }
    else {
        console.log();
    }
}

function calculateDay() {
    getInput();
    dayOfWeek = ((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 7);
    console.log(dayOfWeek);
    return (Math.floor(dayOfWeek));
}


function checkDayOfWeek() {
    day = calculateDay();
    checkGender();
    console.log("The function runs");
}


let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = [" Akosua", " Adwoa ", "Abenaa", " Akua", "Yaa", "Afua", "Ama"]



function checkGender() {
    var gen = document.getElementsByName("rads");
    if (gen[0].checked == true) {
        var gender = "male";
    } else if (gen[1].checked == true) {
        var gender = "female";
    } else {
        console.log("pass");
    }
    switch (gender) {
        case gender = "male":
            switch (day) {
                case (0):
                    document.getElementById("result").innerHTML = "You were born on a Sunday" + "  " + "and your Akan name is " + maleNames[0];
                    break;
                case (1):
                    document.getElementById("result").innerHTML = "You were born on a Monday" + " " + "and your Akan name is " + maleNames[1];
                    break;
                case (2):
                    document.getElementById("result").innerHTML = "You were born on a Tuesday" + " " + "and your Akan name is " + maleNames[2];
                    break;
                case (3):
                    document.getElementById("result").innerHTML = "You were born on a Wednesday" + " " + "and your Akan name is " + maleNames[3];
                    break;
                case (4):
                    document.getElementById("result").innerHTML = "You were born on a Thursday" + " " + "and your Akan name is " + maleNames[4];
                    break;
                case (5):
                    document.getElementById("result").innerHTML = "You were born on a Friday" + " " + "and your Akan name is " + maleNames[5];
                    break;
                case (6):
                    document.getElementById("result").innerHTML = "You were born on a Saturday" + " " + "and your Akan name is " + maleNames[6];
                    break;
                default:

            }
            break;
        case gender = "female":
            switch (day) {
                case (0):
                    document.getElementById("result").innerHTML = "You were born on a Sunday" + " " + "and your Akan name is " + femaleNames[0];
                    break;
                case (1):
                    document.getElementById("result").innerHTML = "You were born on a Monday " + " " + "and your Akan name is " + femaleNames[1];
                    break;
                case (2):
                    document.getElementById("result").innerHTML = "You were born on a Tuesday" + " " + "and your Akan name is " + femaleNames[2];
                    break;
                case (3):
                    document.getElementById("result").innerHTML = "You were born on a Wednesday" + " " + "and your Akan name is " + femaleNames[3];
                    break;
                case (4):
                    document.getElementById("result").innerHTML = "You were born on a Thursday" + " " + "and your Akan name is " + femaleNames[4];
                    break;
                case (5):
                    document.getElementById("result").innerHTML = "You were born on a Friday" + " " + "and your Akan name is " + femaleNames[5];
                    break;
                case (6):
                    document.getElementById("result").innerHTML = "You were born on a Saturday" + " " + "and your Akan name is " + femaleNames[6];
                    break;

            }
            break
        default:
            console.log("pass");
    }
}