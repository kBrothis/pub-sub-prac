//Construct
var questionAnswer = function () {
   
};
//initalizer
questionAnswer.prototype.init = function () {
    this._sendBtn = document.querySelector(".send");
    this._answerBox = document.querySelectorAll(".question");
    this._showAnswer = document.querySelectorAll(".answer");
    this._setUpListeners();
};
//Bind listeners
questionAnswer.prototype._setUpListeners = function () {
    var _self = this;
    this._sendBtn.addEventListener("click", function (e) {
        for (i = 0; i < _self._answerBox.length; i++) {
            var myAnswer = _self._answerBox[i].value;
            _self._showAnswer[i].innerText = myAnswer ? myAnswer : "--";
        }
    });
};
//Instance
window.gQuestionOne = new questionAnswer("");
//Initialize what I need for this instance
window.gQuestionOne.init();