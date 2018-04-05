// Constructor
var questionA = function(){};

//Initializer
questionA.prototype.init = function () {
  this._sendBtn = document.querySelector(".send");
  this._answerBox1 = document.querySelector(".question-1");
  this._showAnswer1 = document.querySelector(".answer-1")

  // I'm adding this to make a prototype for Question 2 and am setting new properties on my object with the number 2
  this._answerBox2 = document.querySelector(".question-2");
  this._showAnswer2 = document.querySelector(".answer-2")

  console.log(this._sendBtn);
  this._setUpListeners();
};

//Bind Listener
questionA.prototype._setUpListeners = function () {  //listeners go in here
  var _self = this;
  this._sendBtn.addEventListener("click", function(e) {
    var yourAnswer = _self._answerBox1.value;
    console.log(_self._showAnswer1.innerText = yourAnswer);
    var yourAnswer = _self._answerBox2.value;
    console.log(_self._showAnswer2.innerText = yourAnswer);
  });
};



//Create instance
window.gQuestionA = new questionA();
// Initialize what I need for this instance
window.gQuestionA.init();
