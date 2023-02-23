let userYearOfBirth = prompt("What is your year of birth?");
if (userYearOfBirth === null) {
    alert("It is sad, if u can not tell me your year of birth.");
}  else if (userYearOfBirth.trim() === "") {
    alert("It is sad, if u can not tell me your year of birth.");
}
let userQuestionCity = prompt("Where are you living now?");
if (userQuestionCity === null) {
    alert("It is sad, if u can not tell me where are you living.");
}  else if (userQuestionCity.trim() === "") {
    alert("It is sad, if u can not tell me where are you living.");
}
let userQuestionSport = prompt("What is your favorite sport?");
if (userQuestionSport === null) {
    alert("It is sad, if u can not tell about your favorite sport.");
}  else if (userQuestionSport.trim() === "") {
    alert("It is sad, if u can not tell about your favorite sport.");
}
let userAge = "You should be " + +(2022 - userYearOfBirth) + " years old.";
if (userYearOfBirth === null) {
    userAge = "";
}  else if (userYearOfBirth.trim() === "") {
    userAge = "";
}
if (userQuestionCity === "Kyiv") {
    userCity = "You are living in the capital of Ukrain.";
}  else if (userQuestionCity === "Washington") {
    userCity = "You are living in the capital of USA.";
}  else if (userQuestionCity === "London") {
    userCity = "You are living in the capital of Great Britan.";
}  
   else if (userQuestionCity === null) {
    userCity = "";
}  else if (userQuestionCity.trim() === "") {
    userCity = "";
}
   else {
    userCity = "You are living in " + userQuestionCity + " now.";
}
if (userQuestionSport === "football") {
    userSport = "Cool! Do you want to be like Lionel Messi?";
}  else if (userQuestionSport === "boxing") {
    userSport = "Cool! Do you want to be like Mike Tyson?";
}  else if (userQuestionSport === "running") {
    userSport = "Cool! Do you want to be like Usain Bolt?";
}  else {
   userSport = "";  
}
if (userYearOfBirth === null && userQuestionCity === null && userQuestionSport === null) {
    alert("You should tell me more about yourself.");
}
let arrey = [userAge,userCity,userSport];
alert(arrey.join(" "));