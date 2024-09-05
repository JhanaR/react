
const time = new Date().getHours();
console.log("current time: " + time);
let message;
if (time < 12) {
  message = "Hi Buddy!! Good morning";
} else if (time < 20) {
  message = "Hi Buddy!! Good NooN";
} else {
  message = "Hi Buddy!! Good evening";
}
document.getElementById("test").innerHTML = message;