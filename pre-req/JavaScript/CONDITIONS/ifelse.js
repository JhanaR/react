let age = 17;
let verificationMessage;
if (age > 18) {
  verificationMessage ="Hi Buddy!! You must vote"
  //console.log("user is valid to vote");
} else {
  verificationMessage ="Hi Buddy!! Sorry you are not enough to vote"
  //console.log("user age is not enough to vote!!");
}
  document.getElementById("test").innerHTML = verificationMessage;
