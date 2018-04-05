//construct
var questionA = function(){};
var questionB = function(){};

//initializer
questionA.prototype.init = function () {
  this._sendBtn = document.querySelector(".send");
  this._answerBox = document.querySelector(".question-1");
  this._showAnswer = document.querySelector(".answer-1");
  this._setUpListeners();
};
questionB.prototype.init = function () {
  this._sendBtn = document.querySelector(".send");
  this._answerBox = document.querySelector(".question-2");
  this._showAnswer = document.querySelector(".answer-2");
  this._setUpListeners();
};


//bind listener
questionA.prototype._setUpListeners = function () {
  var _self = this;
  this._sendBtn.addEventListener("click", function(e){
    var yourAnswer = _self._answerBox.value;
  _self._showAnswer.innerText = yourAnswer;
});
};

questionB.prototype._setUpListeners = function () {
  var _self = this;
  this._sendBtn.addEventListener("click", function(e){
    var yourAnswer = _self._answerBox.value;
  _self._showAnswer.innerText = yourAnswer;
});
};


//instance
window.gQuestionA = new questionA();
//initialize what i need for this instance
window.gQuestionA.init();

//instance
window.gQuestionB = new questionB();
//initialize what i need for this instance
window.gQuestionB.init();
