{
  // 13. Write a JavaScript exercise to create a variable using a user-defined name.  

let user_name = "Omar";
n= 102;

this[user_name]=n;

console.log(this[user_name])

}



{
  // 12. Write a JavaScript program to get the website URL (loading page).  

  // alert(document.URL);
}


{
  // 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  
  

  // const p = document.createElement("p");
  // p.id = 'hello1';
  // p.innerHTML=
  // `w3resource`;
  // document.body.appendChild(p);
  // onload()
  // function onload(){
  //   let text = p.data;
  // }
  // setInterval( function(){
  //   text=text[text.lenght-1]+ text.substring(0, text.lenght -1);
  //   p.data=text
  // },100)


}



{
  // 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
  let side1 = 5; 
  let side2 = 6; 
  let side3 = 7; 

let s = ( side1+ side2+ side3)/2

areas = Math.sqrt(s* ((s-side1)*(s-side2)*(s-side3)));
console.log (areas);
}



{

// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let currentTime = new Date();
mon = currentTime.getMonth()+1;
date = currentTime.getDate();
year = currentTime.getFullYear();
if (date < 10) {
  date = '0' + date;
}
if (mon < 10) {
  mon = '0' + mon;
}

console.log(mon + "-" + date + "-" + year)
console.log(mon + "/" + date + "/" + year)
console.log(date + "-" + mon + "-" + year)
console.log(date + "/" + mon + "/" + year);

}

{
  // 2. Write a JavaScript program to print the current window contents.
  document.body.style.background = "grey";
  const button = document.createElement("button");
  button.innerText = "print";
  button.style.background = "red";
  button.style.color = "white";
  button.style.padding = "40px";
  button.style.cursor = "pointer";
  button.style.justifyContent = "center";

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
