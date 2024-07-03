// Function to get the current time in UTC
function updateTime() {
  const currentTime = new Date().toUTCString();
  document.querySelector('[data-testid="currentTimeUTC"]').textContent =
    currentTime;
}

// Function to get the current day of the week
function updateDay() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = days[new Date().getUTCDay()];
  document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}

// Initialize the functions
updateTime();
updateDay();

// Update the time every second
setInterval(updateTime, 1000);

// Image dimensions
var image = document.getElementById("slackProfilePicture"); // get the image element
var dimentions = getImageDimentions(image); // get the dimentions
alert("width: " + dimentions.width + ", height: " + dimentions.height); // give the user a visible alert of the dimentions
