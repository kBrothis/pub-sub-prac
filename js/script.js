
// // construct
// var questionA = function(){};
//
// //initializer
// questionA.prototype.init = function () {
//     this._setUpListeners();
// };
//
// //
// questionA.prototype._setUpListeners() =  function () {
//
// };
// //create object
// window.gQuestionA = new questionA();
// //initialize
// window.gQuestionA.init();


// construct
var questionA = function(){};

 //initializer
questionA.prototype.init = function () {
 this._sendBtn = document.querySelector(".send");
 this._answerBox1 = document.querySelector(".question-1")
 this._showAnswer1 = document.querySelector(".answer-1");
 this._answerBox2 = document.querySelector(".question-2")
 this._showAnswer2 = document.querySelector(".answer-2");
 // console.log(this._sendBtn);
 this._setupListners();

};


// bind events
questionA.prototype._setupListners = function () {
 var _self = this;
  this._sendBtn.addEventListener("click", function(e){
   // console.log(_self._answerBox.value);
   var yourAnswer1 = _self._answerBox1.value;
   _self._showAnswer1.innerText = yourAnswer1;
   var yourAnswer2 = _self._answerBox2.value;
   _self._showAnswer2.innerText = yourAnswer2;
   console.log(e);
 });
};


//instance
window.gQuestionA = new questionA();
//initialize wat I need for this instance
window.gQuestionA.init();
