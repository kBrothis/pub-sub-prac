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

library.prototype.get = function (index) {
    return this.books[index];
};

library.prototype.getIndex = function (type, item) {
    var index = -1;
    if (this.books.length != 0) {
 console.log("function search is: " + type);
        switch (type) {
            case "length":
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
            default:
                break;
        }
        return index;
    } else {
        return index;
    }
};



//Lib Instance
var gLib = new library();
console.log(gLib);

//Book Instances
var gIT = new book("IT", "Stephen King", 800, "December 17, 1995");
//var gIT2 = new book({ 'title': 'IT', 'author': 'Stephen King', 'numberOfPages': 800, 'publishDate': 'December 17, 1995' })
var gCatherInTheRye = new book("Catcher In The Rye", "JD Salinger", 200, "December 25, 1987");

//--------------------------------------------------------------------------------------------------------------------------
