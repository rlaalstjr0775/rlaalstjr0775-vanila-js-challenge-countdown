// Get the clock element from DOM
const clockTitle = document.querySelector(".js-clock");

// Function to update the D-Day clock
function countdown() {
    // set the target date
    const targetDate = new Date("2023-12-25")

    // Get the current date and time
    const currentDate = new Date();

    // Calculate the difference between the target and current date
    const timeDiff = targetDate - currentDate;

    // Convert the time difference to days, hours, minutes, seconds
    const daysDiff = String( Math.floor(timeDiff / (1000 * 60 * 60 * 24))).padStart(3,"0") ; 
    const hoursDiff = String(Math.floor(timeDiff / (1000 * 60 * 60) % 24)).padStart(2,"0");
    const minutesDiff = String(Math.floor(timeDiff / (1000 * 60) % 60)).padStart(2,"0");
    const secondsDiff = String(Math.floor(timeDiff / 1000 % 60)).padStart(2,"0");

    // Format the strings 
     const countdownString =  `${daysDiff}d ${hoursDiff}h ${minutesDiff}m ${secondsDiff}s `;

    // Paint into the screen
    clockTitle.innerText = countdownString;
}

// Call the countdown function
countdown();

// Call the countdown function in every seconds for updating
setInterval(countdown, 1000)