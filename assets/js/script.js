// get required elements that enable us to switch and interface the pages

var start_btn = document.querySelector(".quiz_start_btn button");
var quiz_info_container = document.querySelector(".quiz_info_container");
var exit_btn = quiz_info_container.querySelector(".buttons .exit");
var continue_btn = quiz_info_container.querySelector(".buttons .btn");
var quiz_container = document.querySelector(".question_list_wrapper");

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
  fetchQuestions(2);
};

// Adding a method to get an array that returns questions and answers
var numberOfQuestion = 0;

function fetchQuestions(index) {
  const questionClassName = document.querySelector(".question");
  const optionsClassName = document.querySelector(".choice_lists");
  let questionItself = "<p>" + questions[index].question + "</p>";
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
  optionsClassName.innerHTML = optionLists;
}
