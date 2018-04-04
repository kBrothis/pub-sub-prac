var questionA = function(){};

questionA.prototype.init = function () {
  this._sendBtn = document.querySelector(".send");
  this._answerBox = document.querySelector(".question-1");
  this._showAnswer = document.querySelector(".answer-1");
  this._setUpListeners();
};

questionA.prototype._setUpListeners = function () {
  var _self = this;
  this._sendBtn.addEventListener("click", function(e){
    var yourAnswer = _self._answerBox.value;
    _self._showAnswer.innerText = yourAnswer;
  console.log(_self._showAnswer);
  });
};

window.gQuestionA = new questionA();
window.gQuestionA.init();
