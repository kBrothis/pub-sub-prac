var questionA = function() {

};

questionA.prototype.init = function () {
  this._sendBtn = document.querySelector(".send");
  this._answerBox = document.querySelector(".question-1");
  this._showAnswer = document.querySelector(".answer-1")
  this._setUpListeners();
};

// Bind listeners
questionA.prototype._setUpListeners = function () {
  var _self = this;
  this._sendBtn.addEventListener("click", function(e) {
    var yourAnswer = _self.answerBox.value;
    _self._showAnswer.innerText = yourAnswer
  });
};

//instance
window.gQuestionA = new questionA();
//Initialize
window.gQuestionA.init();
