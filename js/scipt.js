// Construct
var questionA = function(){};

//Initializer
questionA.prototype.init = function () {
  this._sendBtn = document.querySelector(".send");
  this._answerBox = document.querySelector(".question-1");
  this._showAnswer = document.querySelector(".answer-1")
  console.log(this._sendBtn);
  this._setUpListeners();
};

//Bind Listener
questionA.prototype._setUpListeners = function () {  //listeners go in here
  var _self = this;
  this._sendBtn.addEventListener("click", function(e) {
    var yourAnswer = _self._answerBox.value;
    console.log(_self._showAnswer.innerText = yourAnswer);
  });
};



//Create instance
window.gQuestionA = new questionA();
// Initialize what I need for this instance
window.gQuestionA.init();
