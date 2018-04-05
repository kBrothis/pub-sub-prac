var questionA = function(){
};

questionA.prototype.init = function() {
    this._sendBtn = document.querySelector('.send');
    console.log(this._sendBtn);
    this._showAnswer = document.querySelector('.answer-1');
    this._answerBox = document.querySelector('.question-1');
    this._setupListeners();
};

questionA.prototype._setupListeners = function(){
    var _self = this;
    this._sendBtn.addEventListener("click", function(e){
        console.log(e);
        _self._showAnswer.textContent = _self._answerBox.value;
        _self._answerBox.value = '';
    })
};

window.gQuestionA = new questionA();
window.gQuestionA.init();