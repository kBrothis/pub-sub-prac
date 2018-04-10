var Library =  function(){
  this.myBookArray = new Array();
  this.myTaskArray = new Array();
};

var Book = function(title, author, numPages, pubDate){
  this.title =  title;
  this.author = author;
  this.numPages = numPages;
  this.publishDate = new Date(pubDate);
};

Library.prototype.addBook =  function (book) {
  for (i = 0; i < this.myBookArray.length; i++) {
    if (this.myBookArray[i].title.toUpperCase() === book.title.toUpperCase()) {
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
    if (this.myBookArray[i].title.toUpperCase() === title.toUpperCase()) {
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
    if (this.myBookArray[i].author.toUpperCase() === authorName.toUpperCase()) {
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
         this.myTaskArray = ([]);

         for (i = 0; i < this.myBookArray.length; i++) {
               if (this.myBookArray[i].title.toUpperCase().indexOf(subTitle.toUpperCase()) !== -1) {
                   console.log(this.myBookArray[i]);
                   this.myTaskArray.push(this.myBookArray[i]);
                  }
              }
         console.log(this.myTaskArray);
  };

  Library.prototype.getBooksByAuthor =  function (subAuthor) {
         var subLength = subAuthor.length;
         this.myTaskArray = ([]);
         for (i = 0; i < this.myBookArray.length; i++) {
                  var authorLength = this.myBookArray[i].author.length;
                  for (j = 0; j < authorLength; j++) {
                    if (this.myBookArray[i].author.toUpperCase().substr(j, subLength) == subAuthor.toUpperCase()) {
                        console.log(this.myBookArray[i]);
                        this.myTaskArray.push(this.myBookArray[i]);
                       }
                   }
           }
        console.log(this.myTaskArray);
  };

  Library.prototype.addBooks =  function (booksList) {
    this.myTaskArray = ([]);
    var count = 0;
    if (booksList.length < 2) {
      console.log("need at least two different books!");
      return null;
    }
    else {
              for (i = 0; i < booksList.length; i++)
                {
                 this.addBook(booksList[i]);
                 this.myTaskArray.push(booksList[i]);
                  count = count + 1;
                 }
            }
          console.log(count);
          console.log(this.myTaskArray);
  };

  Library.prototype.getAuthors =  function () {
        this.myTaskArray = ([]);
        if (this.myBookArray.length == 0) {
          return "null -- No books exist!";
        }
          else  this.myTaskArray.push(this.myBookArray[0]);

        for (i = 0; i < this.myBookArray.length; i++){
          if (this.myTaskArray[i].author.toUpperCase().indexOf(this.myBookArray[i].author.toUpperCase()) == -1) {
               this.myTaskArray.push(this.myBookArray[i].author);
             }
         }
              console.log("distinct authors is-are: " + this.myTaskArray);
  };

  Library.prototype.getRandomAuthorName =  function () {
        var distinctAuthors = [];
        if (this.myBookArray.length == 0) {
          return "null -- No books exist!";
        }
        else if (this.myBookArray.length == 1) {
          console.log(this.myBookArray[0].author);
        }
          else {
             var i =  Math.floor((Math.random() * (this.myBookArray.length - 1)));
              console.log(this.myBookArray[i].author);
            }
  };


//Lib instance
var gLib = new Library();

// book instances
// toUpperCase()
var gIt0 = new Book("it","Stephen King",800, "Decembher 17, 1995 03:24:00");
var gIt1 = new Book("IT","Stephen King",800, "Decembher 17, 1995 03:24:00");
var gCatcher2 = new Book("Catcher In the Rye","JD Salinger",600, "December 2, 2005 04:24:00");
var gBootStrap3 = new Book("BootStrap","KritineV",400, "May 5, 2018 16:50:00");
var gJavaScript4 = new Book("JavaScript201","Kyle Brothis",200, "April 5, 2018 16:50:00");
var gHtmlCss5 = new Book("HTMLCSS","DavidX",100, "January 1, 2018 6:50:00");
var gHtmlCss6 = new Book("Java201","KritineV",100, "January 1, 2018 6:50:00");
var gBootStrap7 = new Book("Boot","Kyle Brothis",400, "May 5, 2018 16:50:00");

var allBooks = ([gHtmlCss5, gHtmlCss6, gBootStrap7]);
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
