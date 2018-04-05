var questionA = function(){};

questionA.prototype.init = function () {
  this._sendBtn = document.querySelector(".send");
  this._answerBoxA = document.querySelector(".question-1");
  this._showAnswerA = document.querySelector(".answer-1");
  this._answerBoxB = document.querySelector(".question-2");
  this._showAnswerB = document.querySelector(".answer-2")
  this._setUpListeners();
};

questionA.prototype._setUpListeners = function () {
  var _self = this;
  this._sendBtn.addEventListener("click", function(e){
    var yourAnswer = _self._answerBoxA.value;
    _self._showAnswerA.innerText = yourAnswer;
    console.log(_self._showAnswerB);

    var yourAnswer = _self._answerBoxB.value;
    _self._showAnswerB.innerText = yourAnswer;
    console.log(_self._showAnswerA);
  });

};

window.gQuestionA = new questionA();
window.gQuestionA.init();
