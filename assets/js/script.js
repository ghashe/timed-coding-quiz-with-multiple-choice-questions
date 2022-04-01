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
};
