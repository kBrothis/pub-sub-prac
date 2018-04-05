//construct
var questionA = function(){};

//Initializer
questionA.prototype.init = function () {
  this._sendBtn = document.querySelector(".send")
  console.log(this._sendBtn);
  this._answerBoxA = document.querySelector(".question-1");
  this._showAnswerA = document.querySelector(".answer-1")
  this._answerBoxB = document.querySelector(".question-2");
  this._showAnswerB = document.querySelector(".answer-2")
  this._setUpListeners();
};

//Bind Listeners
questionA.prototype._setUpListeners = function () {
  var _self = this;
  this._sendBtn.addEventListener("click", function(e){
    _self._showAnswerA.innerText = _self._answerBoxA.value;
      _self._showAnswerB.innerText  = _self._answerBoxB.value;
  });
};

//Instance
window.gQuestionA = new questionA();
//Initialize what I need for this instance
window.gQuestionA.init();
