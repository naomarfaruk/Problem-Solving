



{
// 2. Write a JavaScript program to print the current window contents.
document.body.style.background= 'grey'
const button = document.createElement("button");
button.innerText = "print";
button.style.background = "red";
button.style.color = "white";
button.style.padding='40px';
button.style.cursor= 'pointer'
button.style.justifyContent= 'center'

button.addEventListener("click", () => {
  window.print();
});

document.body.appendChild(button);
}


{
  // 1. Write a JavaScript program to display the current day and time in the following format.
  // Sample Output : Today is : Tuesday.
  // Current time is : 10 PM : 30 : 38

  const currentTime = new Date();

  let daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day = currentTime.getDay();

  console.log("Today is: ", daylist[day] + ".");

  hour = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

  const prepand = hour >= 12 ? " PM " : " AM ";

  hour = hour >= 12 ? hour - 12 : hour;

  if (hour === 0 && prepand === "PM") {
    if (min === 0 && sec === 0) {
      hour = 12;
      prepand = "noon";
    } else {
      hour = 12;
      prepand = "PM";
    }
  }
  if (hour === 0 && prepand === "AM") {
    if (min === 0 && sec === 0) {
      hour = 12;
      prepand = "Midnight";
    } else {
      hour = 12;
      prepand = "AM";
    }
  }

  console.log("Current time is: " + hour + prepand + ":" + min + ":" + sec);
}
