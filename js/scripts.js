//creation of our questionA contructor
var questionA = function() {
};

//QUESTION, BUTTON, && ANSWER TWO
questionA.prototype.init = function() {
    this._sendBtn = document.querySelector(".send");

    this._showAnswerOne = document.querySelector(".answer-1");
    this._answerBoxOne = document.querySelector(".question-1");

    this._showAnswerTwo = document.querySelector(".answer-2");
    this._answerBoxTwo = document.querySelector(".question-2");
    this._setupListeners();
};

questionA.prototype._setupListeners = function() {
    var _self = this;
    this._sendBtn.addEventListener("click", function(e){
        console.log(e);
        _self._showAnswerOne.textContent = _self._answerBoxOne.value;
        _self._answerBoxOne.value = '';

        _self._showAnswerTwo.innerHTML = _self._answerBoxTwo.value;
        _self._answerBoxTwo.value = '';
    })
};

window.newQuestion = new questionA();
window.newQuestion.init();
