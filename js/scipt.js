//Construct
var questionAnswer = function(name){
  this.myVar = "this is a property";
  this.myName = name;
};

//initalizer
questionAnswer.prototype.init = function () {
  this._sendBtn = document.querySelector(".send");
  this._answerBox = document.querySelector(".question-1");
  this._showAnswer = document.querySelector(".answer-1")
  this._setUpListeners();
};

//Bind listeners
questionAnswer.prototype._setUpListeners = function () {
  var _self = this;
  this._sendBtn.addEventListener("click", function(e){
    var yourAnswer = _self._answerBox.value;
    _self._showAnswer.innerText = yourAnswer;
  });
};

//Instance
window.gQuestionOne = new questionAnswer("Kyle");
//Initialize what I need for this instance
window.gQuestionOne.init();
