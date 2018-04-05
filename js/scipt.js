var questionA = function() {};

questionA.prototype.init = function() {
  this._sendBtn = document.querySelector(".send");
  console.log(this._sendBtn);
  this._showAnswers = document.querySelectorAll('[class^="answer-"],[class*=" answer-"]');
  this._answerBoxes = document.querySelectorAll('[class*=" question-"],[class^="question-"]');
  this._setupListeners();
};

questionA.prototype._setupListeners = function() {
  var _self = this;
  this._sendBtn.addEventListener("click", function(e) {
    console.group("Survey Results");
    console.log(e);
    for (index = 0; index <  _self._answerBoxes.length; index++) {
      var value =  _self._answerBoxes[index].value;
      if (value) {
        _self._showAnswers[index].textContent = value;
        console.log("Answer " + (index+1) + ": " + value);
      } else {
        _self._showAnswers[index].textContent = "";
      }
      _self._answerBoxes[index].value = '';
    }
    console.groupEnd("Survey Results");
  });
};

window.gQuestionA = new questionA();
window.gQuestionA.init();
