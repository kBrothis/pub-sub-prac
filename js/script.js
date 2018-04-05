//Constructor
var questionA = function(){
  var init = function() {

  };
};

//Initializer
questionA.prototype.init = function() {
  this._sendBtn = document.querySelector(".send");
  this._answerBox = document.querySelectorAll(".question-1, .question-2");
  this._showAnswer = document.querySelectorAll(".answer-1, .answer-2");
  // this._answerBox2 = document.querySelector(".question-2");
  // this._showAnswer2 = document.querySelector(".answer-2");
  this._setUpListeners();
};

function myFunction() {
    var x = document.querySelectorAll("h2, div, span");
    var i;
    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";
    }
}

questionA.prototype._setUpListeners = function () {
  var _self = this;
  this._sendBtn.addEventListener("click", function(e) {
    //LOOP THROUGH USER INPUT ANSWER TO Q'S
    var yourAnswer = [];
    if( _self._answerBox.length  || _self._showAnswer.length  <= 0){
      console.log("YESS");
      // alert("Please answer all questions before you click send to proceed");
      $('#noAnswerWarn').modal('show');
    } else {
      for (var i = 0; i < _self._answerBox.length; i++) {
          yourAnswer[i] = _self._answerBox[i].value;
      };
      //DISPLAY USER INPUT IN ANSWER FIELD
      for( var i = 0; i<_self._showAnswer.length; i++){
        console.log( _self._showAnswer[i] );//FUNC TESTING
        _self._showAnswer[i].innerText = yourAnswer[i];
      }
    }
  });
};

// Instance
window.gQuestionA = new questionA();
//Initialize what I need for this instance
window.gQuestionA.init();
