// get required elements that enable us to switch and interface the pages

var start_btn = document.querySelector(".quiz_start_btn button");
var quiz_info_container = document.querySelector(".quiz_info_container");
var exit_btn = quiz_info_container.querySelector(".buttons .exit");
var continue_btn = quiz_info_container.querySelector(".buttons .btn");
var quiz_container = document.querySelector(".question_list_wrapper");
var choiceList = document.querySelector(".choice_list");

// When the start button is clicked, we are taken to the quiz's rules page
start_btn.onclick = function () {
  quiz_info_container.classList.add("activeInfo");
};

// When the exit button is clicked, we are taken back to the start page
exit_btn.onclick = function () {
  quiz_info_container.classList.remove("activeInfo");
};

// If the continue button is clicked, we are taken forward to the actual quiz page
continue_btn.onclick = function () {
  quiz_info_container.classList.remove("activeInfo");
  quiz_container.classList.add("activeQuiz");
  fetchQuestions(0);
};

// Adding a method to get an array that returns questions and answers and displays them in the user interface
var numberOfQuestion = 0;
// numberOfQuestion = next.onclick.numberOfQuestion++;

function fetchQuestions(index) {
  var questionClassName = document.querySelector(".question");

  var questionNumberClassName = document.querySelector(".number_of_question");
  questionItself =
    "<p>" + questions[index].no + ". " + questions[index].question + "</p>";
  var questionNumber =
    "<p>" +
    "Question" +
    " " +
    questions[index].no +
    " " +
    "of" +
    " " +
    questions.length +
    "</p>";

  let optionLists =
    '<div class="choice">' +
    questions[index].options[0] +
    "<p></p></div>" +
    '<div class="choice">' +
    questions[index].options[1] +
    "<p></p></div>" +
    '<div class="choice">' +
    questions[index].options[2] +
    "<p></p></div>" +
    '<div class="choice">' +
    questions[index].options[3] +
    "<p></p></div>";
  questionClassName.innerHTML = questionItself;
  choiceList.innerHTML = optionLists;
  questionNumberClassName.innerHTML = questionNumber;

  const option = choiceList.querySelectorAll(".choice");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(answer) {
  let userSelectedAnswer = answer.textContent;
  let rightAnswer = questions[numberOfQuestion].answer;
  if (userSelectedAnswer == rightAnswer) {
    answer.classList.add("correct");
    console.log("correct");
  } else {
    answer.classList.add("wrong");
  }
  let allChoices = choiceList.children.length;
}

// One chance is given to the user to choose the answer; once the answer is selected, options are disabled

//   if (userSelectedAnswer == rightAnswer) {
//     answer.classList.add("correctAnswer");
//     console.log("Correct!");
//   } else answer.classList.add("wrongAnswer");
//   console.log("Wrong!");

//   // If the wrong answer is selected, select the correct one and display it to the user
//   for (let i = 0; i < allChoices; i++) {
//     if (choiceList.children[i].textContent == rightAnswer)
//       choiceList.children[i].setAttribute("class", "Option Correct");
//   }
// }

var next = quiz_container.querySelector(".next");
next.onclick = function () {
  numberOfQuestion++;
  fetchQuestions(numberOfQuestion);
};

//  Add a div that inserts the results of the selected option (Correct! or Wrong!)
let correctAlert = '<div class="correct_asnwer"><p>Correct!</p></div>';
let wrongAlert = '<div class="correct_asnwer"><p>Wrong!</p></div>';

//   // for (let i = 0; i < allChoices; i++) {
//   //   if (userSelectedAnswer === rightAnswer) {
//   //     answer_message.innerHTML = correctAlert;
//   //   } else answer.classList.add("wrongAnswer");
//   //   answer_message.innerHTML = wrongAlert;
//   // }

//   // The user has one chance to select the answer once he selected the answer disable the options
//   for (let i = 0; i < allChoices; i++) {
//     choiceList.children[i].classList.add("disabled");
//   }

// Adding functionality to next button
// function queCounter(index) {
//   //creating a new span tag and passing the question number and total question
//   let totalQueCounTag =
//     "<span><p>" +
//     index +
//     "</p> of <p>" +
//     questions.length +
//     "</p> Questions</span>";
//   bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
// }
