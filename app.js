// Set the date
var dateToCountdownTo = new Date("December 25, 2023").getTime();

// Get the DOM elements
const dateField = document.getElementById('date');
const timer = document.getElementById("timer");

// Update the timer every second
var countdown = setInterval(function() {
    getTime();
}, 1000);

// Function to get the time
function getTime() {

    // Get todays date and time
    var currentTime = new Date().getTime();

    // Find the difference between the selected date and the current time.
    var difference = dateToCountdownTo - currentTime;

      // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Set the countdown to the new time.
    timer.innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
}