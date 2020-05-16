alert("Do not reload page till you finish")
// FIRSTTEST
function testYourself1() {
    var question1 = prompt("How many rak'ah of taraaweeh did i pray today");
    if (question1 <= 10 ) {
        answer1 = (question1 * 100) / 10; 
        document.getElementById("answerDisplay1").innerText = " Your percentage for number 1 is " + answer1;
        document.getElementById("answerDisplay1").textContent = " Your percentage for number 1 is " + answer1;
        }
    else  if (question1 > 10 ) {
        document.getElementById("answerDisplay1").innerText = "Your input number is more than the days of a week.....you're a scam";
        document.getElementById("answerDisplay1").textContent = "Your input number is more than the days of a week.....you're a scam";
    }
    else {
        document.getElementById("answerDisplay1").innerText = "Error.....that's not a valid number";
        document.getElementById("answerDisplay1").textContent = "Error.....that's not a valid number";
    }
}

document.write("ajs,vA");

// SECONDTEST
function testYourself2() {
    var question2 = prompt("How many percentage of Suuratul Waqiah did i complete");
if (question2 <= 100 ) {
    var answer2 = (question2 * 100) / 100; 
    document.getElementById("answerDisplay2").innerText =  "Your percentage for number 2 is " + answer2;
    document.getElementById("answerDisplay2").textContent =  "Your percentage for number 2 is " + answer2;
}
else if (question2 > 100 ) {
    document.getElementById("answerDisplay2").innerText =  "Your input number is more than the days of a week.....you're a scam";
    document.getElementById("answerDisplay2").textContent =  "Your input number is more than the days of a week.....you're a scam";
}
else {
    document.getElementById("answerDisplay2").innerText =  "Error.....that's not a valid number " ;
    document.getElementById("answerDisplay2").textContent =  "Error.....that's not a valid number " ;
}
}

// THIRDTEST
function testYourself3() {
var question3 = prompt("How many percentage of Suuratul Mulk did i complete")
if (question3 <= 100 ) {
    var answer3 = (question3 * 100) / 100; 
    document.getElementById("answerDisplay3").innerText = "Your percentage for number 3 is " + answer3;
    document.getElementById("answerDisplay3").textContent = "Your percentage for number 3 is " + answer3;
}
else if (question3 > 100 )  {
    document.getElementById("answerDisplay3").innerText = "Your input number is more than the possible days of a week, you can only have two in a day and 14 times in a week.....you're a goddamn liar";
    document.getElementById("answerDisplay3").textContent = "Your input number is more than the possible days of a week, you can only have two in a day and 14 times in a week.....you're a goddamn liar";
}
else {
    document.getElementById("answerDisplay3").innerText = "Error.....that's not a valid number";
    document.getElementById("answerDisplay3").textContent = "Error.....that's not a valid number";
}

}
//  FOURTHTEST
function testYourself4() {
var minorquestion4 = prompt("How many 'istighfaar' do i plan on doing everyday")
var question4 = prompt("How many 'istighfaar' did i do ")
if (question4 <= minorquestion4 ) {
    var answer4 = (question4 * 100) / minorquestion4; 
    document.getElementById("answerDisplay4").innerText = "Your percentage for number 4 is " + answer4;
    document.getElementById("answerDisplay4").textContent = "Your percentage for number 4 is " + answer4;
}
else if (question4 > minorquestion4 ) {
    document.getElementById("answerDisplay4").innerText = "Your input number is more than the days of a week.....you're a scam"
    document.getElementById("answerDisplay4").textContent = "Your input number is more than the numbers of Rawaatib";
}
else {
    document.getElementById("answerDisplay4").innerText = "Error.....that's not a valid number";
    document.getElementById("answerDisplay4").textContent = "Error.....that's not a valid number";
}
}

//FIFTHTEST
function testYourself5() {
var minorquestion5 = prompt("How many rak'ah of tahajjud am i supposed to pray in a day")
var question5 = prompt("How many did i pray today")
if (question5 <= minorquestion5 ) {
    var answer5 = (question5 * 100) / minorquestion5; 
    document.getElementById("answerDisplay5").innerText = "Your percentage for number 5 is " + answer5;
    document.getElementById("answerDisplay5").textContent = "Your percentage for number 5 is " + answer5;
}
else if (question5 > minorquestion5)  {
    document.getElementById("answerDisplay5").innerText = "Your input number is more than the numbers of Rawaatib";
    document.getElementById("answerDisplay5").textContent = "Your input number is more than the numbers of Rawaatib";
}
else {
    document.getElementById("answerDisplay5").innerText = "Error.....that's not a valid number";
    document.getElementById("answerDisplay5").textContent = "Error.....that's not a valid number";
}  
}


//SIXTHTEST
function testYourself6() {
var question6 = prompt("How many percent of my morning adhkaar did i do today");
if (question6 <= 100) {
    var answer6 = (question6 * 100) / 100; 
    document.getElementById("answerDisplay6").innerText = "Your percentage for number 6 is " + answer6;
    document.getElementById("answerDisplay6").textContent = " Your percentage for number 6 is " + answer6;
}
else if (question5 > 100 ) {
    document.getElementById("answerDisplay6").innerText = "Your input number is more than the numbers of Rawaatib";
    document.getElementById("answerDisplay6").textContent ="Your input number is more than the numbers of Rawaatib";
}
else {
    document.getElementById("answerDisplay6").innerText = "Error.....that's not a valid number";
    document.getElementById("answerDisplay6").textContent = "Error.....that's not a valid number";
}  
}


//  SEVENTHTEST
function testYourself7() {
var question7 = prompt("How many percent of 'Laa ilaa a illa llaha wahdahu laa shariika lahuu lahulmulk walahul hamd wa huwa alaa kulli shayin qadiir");
if (question7 <= 100 ) {
    var answer7 = (question7 * 100) / 100; 
    document.getElementById("answerDisplay7").innerText = "Your percentage for number 7 is " + answer7;
    document.getElementById("answerDisplay7").textContent = "Your percentage for number 7 is " + answer7;
}
else if (question7 > 100 ) {
    document.getElementById("answerDisplay7").innerText = "Your input number is more than the numbers of Rawaatib"
    document.getElementById("answerDisplay7").textContent = "Your input number is more than the numbers of Rawaatib";
}
else {
    document.getElementById("answerDisplay7").innerText = "Error.....that's not a valid number";
    document.getElementById("answerDisplay7").textContent = "Error.....that's not a valid number";
}
}

//  EIGHTHTEST
function testYourself8() {
var minorquestion8 = prompt("How many rak'ah of duhaa do i plan to be my standard per day")
var question8 = prompt("How many rak'ah did i pray today")
if (question8 <= minorquestion8 ) {
    var answer8 = (question8 * 100) / minorquestion8; 
    document.getElementById("answerDisplay8").innerText = "Your percentage for number 8 is " + answer8;
    document.getElementById("answerDisplay8").textContent = "Your percentage for number 8 is " + answer8;
}
else if (question8 > minorquestion8 ) {
    document.getElementById("answerDisplay8").innerText = "Your input number is more than the numbers of Rawaatib"
    document.getElementById("answerDisplay8").textContent = "Your input number is more than the numbers of Rawaatib";
}
else {
    document.getElementById("answerDisplay8").innerText = "Error.....that's not a valid number";
    document.getElementById("answerDisplay8").textContent = "Error.....that's not a valid number";
}
}

//  NINTHTEST
function testYourself9() {
var question9 = prompt("How many of 'subhaanallah wa bihamdihi' did i complete today")
if (question9 <= 100 ) {
    var answer9 = (question9 * 100) / 100; 
    document.getElementById("answerDisplay9").innerText = "Your percentage for number 9 is " + answer9;
    document.getElementById("answerDisplay9").textContent = "Your percentage for number 9 is " + answer9;
}
else if (question9 > 100 ) {
    document.getElementById("answerDisplay9").innerText = "Your input number is more than the numbers of Rawaatib"
    document.getElementById("answerDisplay9").textContent = "Your input number is more than the numbers of Rawaatib";
}
else {
    document.getElementById("answerDisplay8").innerText = "Error.....that's not a valid number";
    document.getElementById("answerDisplay8").textContent = "Error.....that's not a valid number";
}
}

//  TENTHTEST
function testYourself10() {
var question10 = prompt("How many percentage of my evening adhkaar did i complete today")
if (question10 <= 100 ) {
    var answer10 = (question10 * 100) / 100; 
    document.getElementById("answerDisplay10").innerText = "Your percentage for number 10 is " + answer10;
    document.getElementById("answerDisplay10").textContent = "Your percentage for number 10 is " + answer10;
}
else if (question10 > 100 ) {
    document.getElementById("answerDisplay10").innerText = "Your input number is more than the numbers of Rawaatib"
    document.getElementById("answerDisplay10").textContent = "Your input number is more than the numbers of Rawaatib";
}
else {
    document.getElementById("answerDisplay10").innerText = "Error.....that's not a valid number";
    document.getElementById("answerDisplay10").textContent = "Error.....that's not a valid number";
}
}

function getArrays() {
    var arrayOfAnswers = [answer1, answer2]
    document.getElementById("finalAnswerDisplay").innerText = "Your percentage for number 10 is " + answer1;
    document.getElementById("finalAnswerDisplay").textContent = "Your percentage for number 10 is " + arrayOfAnswers;
}


/*var arrayOfAnswers = [answer1, answer2, answer3, answer4, answer5, 
                      answer6, answer7, answer8, answer9, answer10]
console.log(arrayOfAnswers);
console.log(arrayOfAnswers[2]);
*/
// function that makes my answer display
function displayAnswer() {
    var change = document.getElementById("answerDisplay");
    change.style.visibility = "visible";
}
   

// this is what made my prompt  not to refresh
window.addEventListener("beforeunload", function(event) {
    event.preventDefault(); //returnValue = "\o/";
});
window.addEventListener("beforeunload", function(e) {
    var confirmationMessage = "\o/";
    e.returnValue = confirmationMessage;
    return confirmationMessage;
});