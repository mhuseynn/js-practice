/*
Grade Classifier: Write a function that takes a student's score as input and
returns a grade (A, B, C, D, or F) based on the following grading scale:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
*/


function grade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    }
    else if (score >= 80 && score <= 89) {
        return "B";
    }
    else if (score >= 70 && score <= 79) {
        return "C";
    }
    else if (score >= 60 && score <= 69) {
        return "D";
    }
    else if (score >= 0 && score <= 59) {
        return "F";
    }
    else {
        return "Wrong Score!!!";
    }

}



console.log(grade(90));


/*
Time Converter: Write a function that takes a time in 24-hour format (e.g., "13:45")
as input and returns the time in 12-hour format with AM/PM (e.g., "1:45 PM").
*/


function timecon(time) {
    if (time[0] + time[1] > 12) {
        let a = parseInt(time[0] + time[1]) - 12;
        return a + ":" + time[3] + time[4] + " PM";
    }
    else {
        return time;
    }
}

console.log(timecon("13:45"));





/*
Password Strength Checker: Write a function that takes a password as input and returns
a message indicating its strength:
"Weak" if the password has fewer than 8 characters,
"Medium" if it has 8 to 12 characters,
"Strong" if it has more than 12 characters and contains at least one digit, one lowercase
letter, and one uppercase letter.
*/
function checker(password) {
    if (password.length < 8) {
        return "Weak";
    }
    else if (password.length >= 8 && password.length <= 12) {
        return "Medium";
    }
    else if (password.length > 12) {
        if (/[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password)) { //bunu internetde tapdim regex nendi.
            return "Strong";
        } else {
            return "Medium";
        }
    }
}

console.log(checker("huseyn12345"));


/*
Write a function that takes weekday's number (from 1 to 7) as an input and returns the
appropriate weekday name
*/

function week(day) {
    switch (day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number";
    }
}
console.log(week(1));


/*
Taxi Fare Calculator: Write a function that takes the distance traveled (in kilometers)
and the waiting time (in minutes) as input and calculates the taxi fare according to the
following rules:
Base fare: $5
Additional fee: $0.50 per kilometer
Additional fee for every 3 minutes waiting time: $1
*/

function totalFare(distance, waitingTime) {
    const base = 5;
    const cost = 0.50;
    const cost_wait = 1;


    const fare = distance * cost;


    const wait_fare = Math.ceil(waitingTime / 3) * cost_wait;


    const totalFare = base + fare + wait_fare;

    return totalFare;
}

console.log(totalFare(15, 1));
