var questionAnswer = {
  gQuestionA: {
    myVar : "this is a property",
    myName : "Kyle",
    _proto_ : //reference to itself through methods on object
  },
  gQuestionB: {
    myVar : "this is a property",
    myName : "Eric",
    _proto_ : //reference to itself through methods on object
  },
  _proto_ : {
    this.init : function(){
      this._sendBtn = document.querySelector(".send");
      console.log(this._sendBtn);
      this._setUpListeners();
    },
    this._setUpListeners : function(){
      //Do something
    }
  }
};
