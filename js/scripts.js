//creation of our questionA contructor
var questionA = function() {
};

//creation of our questionA contructor
var questionB = function() {
};

//QUESTION, BUTTON, && ANSWER TWO
questionA.prototype.init = function() {
    this._sendBtn = document.querySelector('.send-one');
    console.log(this._sendBtn);
    this._showAnswer = document.querySelector('.answer-1');
    this._answerBox = document.querySelector('.question-1');
    this._setupListeners();
};

questionA.prototype._setupListeners = function(){
    var _self = this;
    this._sendBtn.addEventListener("click", function(e) {
        console.log(e);
        _self._showAnswer.textContent = _self._answerBox.value;
        _self._answerBox.value = '';
    });
};


//QUESTION, BUTTON, && ANSWER TWO
questionB.prototype.init = function() {
    this._sendBtn = document.querySelector('.send-two');
    if (!this._sendBtn) {
        console.log("Our sendBtn is wired and ready to go!");
    }
    console.log(this._sendBtn);
    this._showAnswer = document.querySelector('.answer-2');
    this._answerBox = document.querySelector('.question-2');
    this._setupListeners();
};

questionB.prototype._setupListeners = function() {
    var _self = this;
    this._sendBtn.addEventListener("click", function(e){
        console.log(e);
        if( _self._answerBox.value == null) {
            console.log("No value in answer 3, buddy. Maybe try putting an actual answer in here. ");
        }
        else {
            _self._showAnswer.textContent = _self._answerBox.value;
            _self._answerBox.value = '';
        };
    });
};

window.questionA = new questionA();
window.questionB = new questionB();
window.questionA.init();
window.questionB.init();