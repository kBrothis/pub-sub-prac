//construct
var questionA = function(){};


//initializer
questionA.prototype.init = function () {
  this._sendBtn = document.querySelector(".send");
  this._answerBox1 = document.querySelector(".question-1");
  this._showAnswer1 = document.querySelector(".answer-1");
  this._answerBox2 = document.querySelector(".question-2");
  this._showAnswer2 = document.querySelector(".answer-2");
  this._setUpListeners();
};


//bind listener
questionA.prototype._setUpListeners = function () {
  var _self = this;
  this._sendBtn.addEventListener("click", function(e){
  var yourAnswer1 = _self._answerBox1.value;
  _self._showAnswer1.innerText = yourAnswer1;
  var yourAnswer2 = _self._answerBox2.value;
  _self._showAnswer2.innerText = yourAnswer2;
});
};



//instance
window.gQuestionA = new questionA();
//initialize what i need for this instance
window.gQuestionA.init();
