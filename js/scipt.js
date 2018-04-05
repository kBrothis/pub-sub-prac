//creation of construct
var questionA = function() {

};

//initialize the function
questionAnswer.prototype.init = function () {
    this._sendBtn = document.querySelector(".send");
	this._answerBox = document.querySelector("question-1");
	this._short
    // console.log(this._sendBtn);
    this._setUpListeners();
};

questionA.prototype._setUpListeners = function () {
    this._setUpListeners.addEventListener("click", function(e) {
        console.log(e);   });
};


//Instance
window.gQuestionA = new questionA();
//Initialize what I needa for this instance
window.gQuestionA.init();