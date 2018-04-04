//construct
var questionA = function(){};

//Initializer
questionA.prototype.init = function () {
  this._sendBtn = document.querySelector(".send")
  console.log(this._sendBtn);
  this._answerBox = document.querySelector(".question-1");
  this._showAnswer = document.querySelector(".answer-1")
  this._setUpListeners();
};
//Bind Listeners
questionA.prototype._setUpListeners = function () {
  var _self = this;
  this._sendBtn.addEventListener("click", function(e){
    var yourAnswer = _self._answerBox.value;
    _self._showAnswer.innerText = yourAnswer;
  });
};

//Instance
window.gQuestionA = new questionA();
//Initialize what I need for this instance
window.gQuestionA.init();
