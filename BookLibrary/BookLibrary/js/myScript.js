// JavaScript source code
var library = function () {
    this.books = [];
};

var book = function (title, author, numPages, pubDate) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numPages;
    this.publishDate = new Date(pubDate);
}

library.prototype.addBook = function (book) {
    var index = this.getIndex("title", book.title)

    if (index < 0) {
        this.books.push(book);
        return true;
    }
    else {
        alert("This book is already in your library!")
        return false;
    }

};

library.prototype.addBookArray = function (bookArray) {
    var imp_title, index;
    var i = 0;
    for (i; i < bookArray.length; i++) {
        imp_title = bookArray[i].title;
        if (this.books.indexOf(imp_title) === -1) {
            this.books.push(bookArray[i]);
        }
    }
    return true;
};

library.prototype.removeBookbyTitle = function (title) {
    var index = this.getIndex("title", title)
    console.log(index)
    if (index = -1) {
        alert("This book was not found in your library!")
        return false;
    }
    else {
        this.books.splice(index, 1);
        return true;
    }
};

library.prototype.removeBookbyTitleAndAuthor = function (title, author) {
    var index = this.getIndex("titleAuthor", title, author)
    console.log(index)
    if (index = -1) {
        alert("This book was not found in your library!")
        return false;
    }
    else {
        this.books.splice(index, 1);
        return true;
    }
};

library.prototype.removeBookbyAuthor = function (author) {
    var index = this.getIndex("author", author)
    if (index == -1) {
        alert("No books by this author were found in your library!")
        return false;
    };
    while (index != -1) {
        this.books.splice(index, 1);
        index = this.getIndex("author", author)
    }
    return true;
};

library.prototype.random = function () {
    return this.books[Math.floor((Math.random() * this.books.length))];
}

library.prototype.getBookByTitle = function (title) {
    var i = 0;
    var booklist = [];
    for (i; i < this.books.length; i++) {
        if (this.books[i].title == title) {
            booklist.push(this.books[i]);
        }
    }
    return booklist;
};

library.prototype.getBookByAuthor = function (author) {
    var i = 0;
    var booklist = [];
    for (i; i < this.books.length; i++) {
        if (this.books[i].author == author) {
            booklist.push(this.books[i]);
        }
    }
    return booklist;
};

library.prototype.getBookByAuthorPart = function (author) {
    var i = 0;
    var booklist = [];
    for (i; i < this.books.length; i++) {
        if (this.books[i].author == author) {
            booklist.push(this.books[i]);
        }
    }
    return booklist;
};

library.prototype.getIndex = function (type, item = "", item2 = "") {
    var index = -1;
    if (this.books.length != 0) {
 console.log("function search is: " + type);
        switch (type) {
            case "length":
                index = this.books.length;
                break;

            case "random":
                index = this.books.length;
                break;

            case "title":
                console.log("case title is running");
                var i = 0;
                for (i; i < this.books.length; i++) {
                    console.log(this.books[i].title + " / " + item);
                    if (this.books[i].title == item) {
                        index = i;
                        break;
                    }
                }
                break;
            case "author":
                console.log("case author is running");
                var i = 0;
                for (i; i < this.books.length; i++) {
                    console.log(this.books[i].author + " / " + item);
                    if (this.books[i].author == item) {
                        index = i;
                        break;
                    }
                }
                break;
            case "titleAuthor":
                console.log("case author is running");
                var i = 0;

                for (i; i < this.books.length; i++) {
                    console.log(this.books[i].author + " / " + item);
                    if ((this.books[i].title == item) && (this.books[i].author == item2))  {
                        index = i;
                        break;
                    }
                }
                break;
            default:
                break;
        }
        return index;
    } else {
        return index;
    }
};


//for testing. this function will fill the library
library.prototype.fillLib = function () {
    this.books.push(gIT);
    this.books.push(gGM);
    this.books.push(gCatherInTheRye);
    this.books.push(gNP);
    this.books.push(gTTC);
    this.books.push(gPOW);
    this.books.push(gQOS);
    this.books.push(gQOW);
    this.books.push(gQOT);
};

//Lib Instance
var gLib = new library();
console.log(gLib);

//Book Instances
var gIT = new book("IT", "Stephen King", 800, "December 17, 1995");
var gGM = new book("Green Mile", "Stephen King", 1200, "Janurary 22, 2002");
var gCatherInTheRye = new book("Catcher In The Rye", "JD Salinger", 200, "December 25, 1987");
var gNP = new book("New Power", "Jeremy Heimans", 873, "April 12, 2019");
var gTTC = new book("Dan the Fallower", "Jeremy Heimans", 1250, "May 17, 2000");
var gPOW = new book("War of Ewwww!", "Mary uBanks", 210, "June 7, 1999");
var gQOS = new book("Kill the Mockingbird", "Marko Wines", 1750, "April 12, 2014");
var gQOW = new book("Kill the Other Mockingbird", "Marko Wines", 1650, "April 12, 2016");
var gQOT = new book("Kill the Blue Mockingbird Cause It Dont Like ME!", "Marko Wines", 1650, "April 12, 2018");

var gBookArray1 = [gIT, gGM, gCatherInTheRye];
var gBookArray2 = [gNP, gTTC, gPOW];
var gBookArray3 = [];



//--------------------------------------------------------------------------------------------------------------------------
