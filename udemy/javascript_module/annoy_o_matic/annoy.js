alert("Connected");

// //Version 1
// 
// var answer = prompt("are we there yet?");
// while(answer !== "yes" && answer!== "yea") {
//     var answer = prompt("are we there yet?");
// }
// alert("Yay, we made it!");

//Version 2 [Checks for 'yea' in any part of user input string]

var answer = prompt("are we there yet?");
while(answer.indexOf("yes") === -1) {
    var answer = prompt("are we there yet?");
}
alert("Yay, we made it!");