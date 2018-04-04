//construct
var questionA = function(){};

//Initializer
questionA.prototype.init = function () {
  this._sendBtn = document.querySelector(".send")
  console.log(this._sendBtn);
  this._answerBox = document.queryselector(".question=1");
  this._showAnswer = document.queryselector(".answer-1")
  this._setUpListeners();
};
//Bind Listeners
questionA.prototype._setUpListeners = function () {
  var _self = this;
  this._sendBtn.addEventListener("click", function(e){
    var your Answer = _self.answerBox.value;
    _self._showAnswer.innerText = yourAnswer;
  });
};

//Instance
window.gQuestionA = new questionA();
//Initialize what I need for this instance
window.gQuestionA.init();
