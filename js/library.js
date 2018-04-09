var Library =  function(){
  this.myBookArray = new Array();
};

var Book = function(title, author, numPages, pubDate){
  this.title =  title;
  this.author = author;
  this.numPages = numPages;
  this.publishDate = new Date(pubDate);
};

Library.prototype.addBook =  function (book) {
  for (i = 0; i < this.myBookArray.length; i++) {
    if (this.myBookArray[i].title === book.title) {
      return false;
    }
  }
       this.myBookArray.push(book);
       return true;
};

Library.prototype.removeBookByTitle =  function (title) {
  console.log(this.myBookArray);
  console.log("remove by " + title);
  for (i = 0; i < this.myBookArray.length; i++) {
    if (this.myBookArray[i].title === title) {
      this.myBookArray.splice(i,1);
      return true;
    }
  }
       return false;
};

Library.prototype.removeBookByAuthor =  function (authorName) {
  console.log(this.myBookArray);
  console.log("remove by " + authorName);
  for (i = 0; i < this.myBookArray.length; i++) {
    if (this.myBookArray[i].author === authorName) {
      this.myBookArray.splice(i,1);
      console.log(this.myBookArray);
      return true;

    }
  }
       return false;
};

Library.prototype.getRandomBook = function () {
  console.log(this.myBookArray.length);

      if (this.myBookArray.length == 0) {
        return null;
      }
        else if (this.myBookArray.length == 1) {
          // return true;
             console.log(this.myBookArray);
        }
            else
                 {
                   var i =  Math.floor(Math.random() * (this.myBookArray.length - 1));
                   console.log("the random number is: " + i);
                   console.log(this.myBookArray[i]);
                   }
};

  Library.prototype.getBookByTitle =  function (subTitle) {
         var subLength = subTitle.length;
         for (i = 0; i < this.myBookArray.length; i++) {
           // if (this.myBookArray[i].title.indexOf(stringTitle) !== -1;
          // if (this.myBookArray[i].title.match(subTitle) )
                  var titleLength = this.myBookArray[i].title.length;
                  for (j = 0; j < titleLength; j++) {
                    if (this.myBookArray[i].title.substr(j, subLength) == subTitle) {
                        console.log(this.myBookArray[i]);
                    }
                   }

           }
          console.log("empty");
  };


  Library.prototype.getBooksByAuthor =  function (subAuthor) {
         var subLength = subAuthor.length;
         for (i = 0; i < this.myBookArray.length; i++) {
                  var authorLength = this.myBookArray[i].author.length;
                  for (j = 0; j < authorLength; j++) {
                    if (this.myBookArray[i].author.substr(j, subLength) == subAuthor) {
                        console.log(this.myBookArray[i]);
                    }
                   }

           }
          console.log("empty");
  };

  Library.prototype.addBooks =  function (booksList) {
    var count = 0;
    for (j = 0; j < arguments.length; j++)
     {
       var book = booksList[j];
       // var origArrayLength = this.myBookArray.length;
       for (i = 0; i < this.myBookArray.length; i++)
      {
          if (this.myBookArray[i].title === book.title) {
            return 0;
         }
         else {
           this.myBookArray.push(book);
           // console.log(this.myBookArray[origArrayLength].author);
           count++;
         }

      }
          // return true;
    }
          console.log(count);
  };

  //
  // Library.prototype.getAuthors =  function () {
  //       for (i = 0; i < this.myBookArray.length; i++){
  //           return this.myBookArray[i].author;
  //         }
  // };


// Library.prototype.getRandomAuthorName =  function () {
//       var i =  Math.floor((Math.random() * (this.myBookArray.length - 1)));
//       return this.myBookArray[i].author;
// };



//Lib instance
var gLib = new Library();

// book instances
var gIt1 = new Book("IT","Stephen King",800, "Decembher 17, 1995 03:24:00");
var gCatcher2 = new Book("Catcher In the Rye","JD Salinger",600, "December 2, 2005 04:24:00");
var gBootStrap3 = new Book("BootStrap","KritineV",400, "May 5, 2018 16:50:00");
var gJavaScript4 = new Book("JavaScript201","Kyle Brothis",200, "April 5, 2018 16:50:00");
var gHtmlCss5 = new Book("HTMLCSS","DavidX",100, "January 1, 2018 6:50:00");
var gHtmlCss6 = new Book("Java201","KritineV",100, "January 1, 2018 6:50:00");
var gBootStrap7 = new Book("Boot","Kyle Brothis",400, "May 5, 2018 16:50:00");


// books[gIT1, gCatcher2, gBootStrap3, gJavascript4, gHtmlCss5];
// booksTitles["IT","Catcher In the Rye", "BootStrap","Kritine", "JavaScript201", "HTMLCSS" ]
// authorNames["Stephen King","JD Salinger", "KritineV", "Kyle Brothis", "DavidX" ]

// window.gLib.init();
//  library.prototype.init = function () {
//       this.addBook(book);
//       this.removeBookByTitle(title);
//       this.removeBookByAuthor(authorName);
//       this.getRandomBook();
//       this.getBookByTitle(title);
//       this.getRandomAuthorName();
//       this.getBooksByAuthor(authorName);
//       this.addBooks(books);
//       this.getAuthors();
// };
