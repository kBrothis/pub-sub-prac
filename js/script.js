// construct
var questionA = function(){};

questionA.prototype.init = function () {
  this._sendBtn = document.querySelector(".send");
  this._answerBox = document.querySelector(".question-1")
  this._showAnswer = document.querySelector(".answer-1");
  // console.log(this._sendBtn);
  this._setupListners();

};
// bind events
questionA.prototype._setupListners = function () {
  var _self = this;
  this._sendBtn.addEventListener("click", function(e){
    // console.log(_self._answerBox.value);
    var yourAnswer = _self._answerBox.value;
    _self._showAnswer.innerText = yourAnswer;
  });
};


//instance
window.gQuestionA = new questionA();
//initialize wat I need for this instance
window.gQuestionA.init();
