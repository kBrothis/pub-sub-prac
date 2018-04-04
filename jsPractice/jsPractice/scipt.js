var questionA = function () { };

questionA.prototype.init = function () {
    //this._sendbtn = document.querySelector(".send");
    this._sendbtn = document.getElementById("Button2");
    this._answerbox = document.getElementById("txtBox");
    this.showAnswer = document.getElementById("spAnswer");
    this._setUpListeners();
}

questionA.prototype._setUpListeners = function () {
    var _self = this;
    this._sendbtn.addEventListener("click", function (e) {
        var yourAnswer = _self.answerbox.value;

        console.log(_self.answerbox.value);})
}

window.gQuestionA = new questionA();
window.gQuestionA.init();