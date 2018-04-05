class questionAnswer {
    constructor(name) {
      this.myVar = "this is a property";
      this.myName = name;
    }

    init() {
      this._sendBtn = document.querySelector(".send");
      this._answerBox = document.querySelector(".question-1");
      this._showAnswer = document.querySelector(".answer-1")
      this._setUpListeners();
    }

    _setUpListeners() {
      var _self = this;
      this._sendBtn.addEventListener("click", function(e){
        var yourAnswer = _self._answerBox.value;
        _self._showAnswer.innerText = yourAnswer;
      });
    }
}

const gQuestionOne = new questionAnswer("Kyle");
gQuestionOne.init();
