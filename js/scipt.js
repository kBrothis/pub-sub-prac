//Construct
var questionAnswer = function(name){
  this.myVar = "this is a property";
  this.myName = name;
};

//initalizer
questionAnswer.prototype.init = function () {
  this._sendBtn = document.querySelector(".send");

  //QA one
  this._answerBox = document.querySelector(".question-1");
  this._showAnswer = document.querySelector(".answer-1")

  //QA two
  this._answerBoxTwo = document.querySelector(".question-2");
  this._showAnswerTwo = document.querySelector(".answer-2")

  this._setUpListeners();
};

//Bind listeners
questionAnswer.prototype._setUpListeners = function () {
  var _self = this;

  this._sendBtn.addEventListener("click", function(e){
    _self._showAnswer.innerText = _self._answerBox.value;
    _self._showAnswerTwo.innerText = _self._answerBoxTwo.value;
  });
};

//Instance
window.gQuestionOne = new questionAnswer("Kyle");
//Initialize what I need for this instance
window.gQuestionOne.init();
