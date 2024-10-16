// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const date = new Date();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


day = date.getDay();
h = date.getHours();
m = date.getMinutes();
s = date.getSeconds();
if (11 < h & h-12) {
  h+"PM";
  console.log(h)
} else {
  h + "AM";
}
console.log("Today is: ", day);
console.log("Current time is :", h, ":", m, ":", s);
