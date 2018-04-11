// JavaScript source code
var storageAvilible = false;
var storageType = "sessionStorage";
//var storageType = "localStorage";
//var storageType = "None";



var library = function (storagekey) {
    this.books = [];
    this.storagekey = storagekey;

};

var book = function (details, callNum, catagory = "") {
    this.details = details;
    this.callNum = callNum;
    this.catagory = catagory;

}

//this will check to see if book title exists in library. If not will add it.
library.prototype.addBook = function (book) {
    try {
        console.log(book.details.title)
        var index = this.getIndex("title", book.details.title)
        if (index < 0) {
            this.books.push(book);

            document.getElementById("msg").innerHTML = book.details.title + " has been added to your library.";
            document.getElementById("msg").setAttribute("class", "msgclass");
            return true;
        }
        else {
            //alert("This book is already in your library!")
            return false;
        }
    }
    catch (e) {
        document.getElementById("msg").innerHTML = e;
        document.getElementById("msg").setAttribute("class", "errclass");
    }
};

//this will check to see if book title exists in library from an array of book objects. If title is not will add it.
library.prototype.addBookArray = function (bookArray) {
    try {
        var imp_title, index;
        var i = 0;
        var booksadded = 0;
        for (i; i < bookArray.length; i++) {
            imp_title = bookArray[i].details.title;
            if (this.books.indexOf(imp_title) === -1) {
                this.books.push(bookArray[i]);
                booksadded = booksadded + 1;
            }
        }
        document.getElementById("msg").innerHTML = booksadded + ": has been added to your library.";
        document.getElementById("msg").setAttribute("class", "msgclass");
        return booksadded;
    }
    catch (e) {
        document.getElementById("msg").innerHTML = e;
        document.getElementById("msg").setAttribute("class", "errclass");
    }
};

//this will remove a book from the library by its title.
library.prototype.removeBookbyTitle = function (title) {
    try {
        var index = this.getIndex("title", title)
        console.log(index)
        if (index == -1) {
            document.getElementById("msg").innerHTML = "This book was not found in your library!";
            document.getElementById("msg").setAttribute("class", "msgclass");
            return false;
        }
        else {
            this.books.splice(index, 1);
            document.getElementById("msg").innerHTML = title + " has been removed from your library!";
            document.getElementById("msg").setAttribute("class", "msgclass");
            return true;
        }
    }
    catch (e) {
        document.getElementById("msg").innerHTML = e;
        document.getElementById("msg").setAttribute("class", "errclass");
    }
};

//this will remove a book from the library by its author.
library.prototype.removeBookbyAuthor = function (author) {
    try {
        var index = this.getIndex("author", author);
        var count = 0;
        if (index == -1) {
            document.getElementById("msg").innerHTML = "No books by this author were found in your library!";
            document.getElementById("msg").setAttribute("class", "msgclass");
            return false;
        };
        while (index != -1) {
            this.books.splice(index, 1);
            count++;
            index = this.getIndex("author", author);
        }
        document.getElementById("msg").innerHTML = count + " were removed from your library.";
        document.getElementById("msg").setAttribute("class", "msgclass");
        return true;
    }
    catch (e) {
        document.getElementById("msg").innerHTML = e;
        document.getElementById("msg").setAttribute("class", "errclass");
    }

};

//this will remove a book from the library by its author and title.
library.prototype.removeBookbyTitleAndAuthor = function (title, author) {
    try {
        var index = this.getIndex("titleAuthor", title, author)
        if (index == -1) {
            document.getElementById("msg").innerHTML = "No books by this author were found in your library!";
            document.getElementById("msg").setAttribute("class", "msgclass");
            return false;
        }
        else {
            this.books.splice(index, 1);
            document.getElementById("msg").innerHTML = title + " was removed from your library.";
            document.getElementById("msg").setAttribute("class", "msgclass");
            return true;
        }
    }
    catch (e) {
        document.getElementById("msg").innerHTML = e;
        document.getElementById("msg").setAttribute("class", "errclass");
    }
};

//this will retrive a random book from the library.
library.prototype.random = function () {
    var ranBook = this.books[Math.floor((Math.random() * this.books.length))];
    document.getElementById("msg").innerHTML = "We have selected " + ranBook.title + " for you.";
    document.getElementById("msg").setAttribute("class", "msgclass");
    return ranBook;
}

//this will retrive a collection of books from the library by title.
library.prototype.getBooksByTitle = function (title) {
    try {
        var i = 0;
        var booklist = [];
        var count = 0;
        for (i; i < this.books.length; i++) {
            if (this.books[i].details.title == title) {
                booklist.push(this.books[i]);
                count++;
            }
        }
        document.getElementById("msg").innerHTML = "We have found " + count + " books with the title of: " + title;
        document.getElementById("msg").setAttribute("class", "msgclass");
        return booklist;
    }
    catch (e) {
        document.getElementById("msg").innerHTML = e;
        document.getElementById("msg").setAttribute("class", "errclass");
    }
};

library.prototype.getBooksByAuthor = function (author) {
    var i = 0;
    var booklist = [];
    var count = 0;
    for (i; i < this.books.length; i++) {
        if (this.books[i].details.author == author) {
            booklist.push(this.books[i]);
            count++;
        }
    }
    document.getElementById("msg").innerHTML = "We have found " + count + " books by the author: " + author;
    document.getElementById("msg").setAttribute("class", "msgclass");
    return booklist;
};

library.prototype.getAuthors = function () {
    var i = 0;
    var author = "";
    var authorlist = [];
    var count = 0;
    for (i; i < this.books.length; i++) {
        author = this.books[i].details.author;
        if (authorlist.indexOf(author) === -1) {
            authorlist.push(author);
            count++;
        }
    }
    document.getElementById("msg").innerHTML = "We have found " + count + " authors in the library.";
    document.getElementById("msg").setAttribute("class", "msgclass");
    return authorlist;
};

library.prototype.getRandomAuthors = function () {
    var i = 0;
    var author = "";
    var authorlist = [];
    for (i; i < this.books.length; i++) {
        author = this.books[i].details.author;
        if (authorlist.indexOf(author) === -1) {
            authorlist.push(author);
        }
    }

    return authorlist[Math.floor((Math.random() * authorlist.length))];
};

library.prototype.getIndex = function (type, item = "", item2 = "") {
    var index = -1;
    var i = 0;
    if (this.books.length != 0) {
        console.log("function search is: " + type);
        switch (type) {
            case "length":
                index = this.books.length;
                break;

            case "title":
                for (i; i < this.books.length; i++) {
                    if (this.books[i].details.title == item) {
                        index = i;
                        break;
                    }
                }
                break;

            case "author":
                console.log("case author is running");
                for (i; i < this.books.length; i++) {
                    if (this.books[i].details.author == item) {
                        index = i;
                        break;
                    }
                }
                break;

            case "titleAuthor":
                console.log("case author is running");
                for (i; i < this.books.length; i++) {
                    console.log(this.books[i].details.author + " / " + item);
                    if ((this.books[i].details.title == item) && (this.books[i].details.author == item2)) {
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

library.prototype.getBooklist = function (type, item = "", item2 = "") {
    try {
        var i = 0;
        var booklist = [];
        var count = 0;
        document.getElementById("msg").setAttribute("class", "msgclass");
        if (this.books.length != 0) {
            console.log("function search is: " + type);
            switch (type) {
                case "author":
                    for (i; i < this.books.length; i++) {
                        if (this.books[i].details.author == author) {
                            booklist.push(this.books[i]);
                        }
                    }
                    return booklist;
                    break;

                case "title":
                    for (i; i < this.books.length; i++) {
                        if (this.books[i].details.title == title) {
                            booklist.push(this.books[i]);
                        }
                    }
                    return booklist;
                    break;

                case "titlePart":
                    for (i; i < this.books.length; i++) {
                        title = this.books[i].details.title.toLowerCase();
                        //console.log(title.indexOf(item.toLowerCase()));
                        if (title.indexOf(item.toLowerCase()) !== -1) {
                            booklist.push(this.books[i]);
                        }
                    }
                    //var compare = "";
                    //for (i; i < this.books.length; i++) {
                    //    compare = this.books[i].details.title.toLowerCase();
                    //    console.log(compare + "/" + item.toLowerCase());
                    //    if (compare.includes(item.toLowerCase())) {
                    //        //if (this.books[i].details.title.toLowerCase().includes(item.toLowerCase())) {
                    //        booklist.push(this.books[i]);
                    //    }
                    //}
                    return booklist;
                    break;

                case "authorPart":
                    //var compare = "";
                    for (i; i < this.books.length; i++) {
                        author = this.books[i].details.author.toLowerCase();
                        //console.log(author.indexOf(item.toLowerCase()));
                        if (author.indexOf(item.toLowerCase()) !== -1) {
                            booklist.push(this.books[i]);
                        }
                    }
                    //for (i; i < this.books.length; i++) {
                    //    compare = this.books[i].details.author.toLowerCase();
                    //    console.log(compare + "/" + item.toLowerCase());
                    //    if (compare.includes(item.toLowerCase())) {
                    //        booklist.push(this.books[i]);
                    //    }
                    //}
                    return booklist;
                    break;
                case "pageLess":
                    for (i; i < this.books.length; i++) {
                        if (this.books[i].details.numberOfPages < item) {
                            booklist.push(this.books[i]);
                        }
                    }
                    return booklist;
                    break;

                case "pageMore":
                    for (i; i < this.books.length; i++) {
                        if (this.books[i].details.numberOfPages > item) {
                            booklist.push(this.books[i]);
                        }
                    }
                    return booklist;
                    break;

                case "beforeDate":
                    for (i; i < this.books.length; i++) {
                        if (this.books[i].details.publishDate < item) {
                            booklist.push(this.books[i]);
                        }
                    }
                    return booklist;
                    break;

                case "afterDate":
                    for (i; i < this.books.length; i++) {
                        if (this.books[i].details.publishDate > item) {
                            booklist.push(this.books[i]);
                        }
                    }
                    return booklist;
                    break;

                case "callnum":
                    for (i; i < this.books.length; i++) {
                        if (this.books[i].callNum <= item) {
                            booklist.push(this.books[i]);
                        }
                    }
                    return booklist;
                    break;
            }

        } else {
            return booklist;
        }
    }
    catch (e) {
        document.getElementById("msg").innerHTML = e;
        document.getElementById("msg").setAttribute("class", "errclass");
    }

};

library.prototype.saveLibrary = function () {
    try {
        if (storageType == 'localStorage') {
            localStorage.setItem(this.storagekey, JSON.stringify(this.books));
            return localStorage.hasOwnProperty(this.storagekey);
        } else if (storageType == 'sessionStorage') {
            sessionStorage.setItem(this.storagekey, JSON.stringify(this.books));
            return sessionStorage.hasOwnProperty(this.storagekey);
        }
    }
    catch (e) {
        document.getElementById("msg").innerHTML = e;
        document.getElementById("msg").setAttribute("class", "errclass");
    }
}

library.prototype.retrieveLibrary = function () {
    try {
        var text = "";
        if (storageType == 'localStorage') {
            text = localStorage.getItem(this.storagekey);
        } else if (storageType == 'sessionStorage') {
            text = sessionStorage.getItem(this.storagekey);
        }
        this.books = JSON.parse(text);
        return this.books.length
    }
    catch (e) {
        document.getElementById("msg").innerHTML = e;
        document.getElementById("msg").setAttribute("class", "errclass");
    }
}

library.prototype.clearLibrary = function () {
    this.library = new library();
    localStorage.removeItem("libJSON");
}

//automatically creates a callnumber for library use. testing case only.
function generateCallNum() {
    return Math.floor((Math.random() * 1000) + 1);
}


//this function will check 1 time if client storage is availible. if so a global var is set that will be used for concurrent checks. It then will be able to use either local or session storage based on a value set. These setting will also be saved. creates an alert if storage is not usable.
function saveLibrary(vlibrary) {
    try {
        if (storageAvilible == true) {
            //console.log(JSON.stringify(vlibrary));
            if (storageType == 'localStorage') {
                localStorage.setItem(vlibrary.storagekey, JSON.stringify(vlibrary));
                return localStorage.hasOwnProperty(vlibrary.storagekey);
            } else if (storageType == 'sessionStorage') {
                sessionStorage.setItem(vlibrary.storagekey, JSON.stringify(vlibrary));
                return sessionStorage.hasOwnProperty(vlibrary.storagekey);
            }
        }
        if (storageAvailable(storageType)) {
            if (storageType == 'localStorage') {
                localStorage.setItem(vlibrary.storagekey, JSON.stringify(vlibrary));
                return localStorage.hasOwnProperty(vlibrary.storagekey);
            } else {
                sessionStorage.setItem(vlibrary.storagekey, JSON.stringify(vlibrary));
                return sessionStorage.hasOwnProperty(vlibrary.storagekey);
            }
        }
        else {
            document.getElementById("msg").innerHTML = "Window storage is not avilible!";
            document.getElementById("msg").setAttribute("class", "errclass");
            return false;
        }
    }
    catch (e) {
        document.getElementById("msg").innerHTML = e;
        document.getElementById("msg").setAttribute("class", "errclass");
    }
}

//updates library from local or session storage
function updateLibrary(vlibrary) {
    try {
        var text = "";
        if (storageType == 'localStorage') {
            text = localStorage.getItem(vlibrary.storagekey);
        } else if (storageType == 'sessionStorage') {
            text = sessionStorage.getItem(vlibrary.storagekey);
        }
        console.log(text);
        vlibrary = JSON.parse(text);
        if (vlibrary.books.length > 0) {
            document.getElementById("msg").innerHTML = "Library updated!";
            document.getElementById("msg").setAttribute("class", "msgclass");
            return true;
        } else { return false; }
    }
    catch (e) {
        document.getElementById("msg").innerHTML = e;
        document.getElementById("msg").setAttribute("class", "errclass");
    }
}

//resets library and clears local and session storage
function resetLibrary(vlibrary, newKey = "gLib") {
    try {
        
        localStorage.removeItem(vlibrary.storagekey);
        localStorage.removeItem("libStorageAvilible");
        sessionStorage.removeItem(vlibrary.storagekey);
        sessionStorage.removeItem("libStorageAvilible");
        vlibrary = new library(newKey);
        return true;
    }
    catch (e) {
        document.getElementById("msg").innerHTML = e;
        document.getElementById("msg").setAttribute("class", "errclass");
    }
}

//test to see if client storage is availible for current browser. this will then set a global value and then save it.
function storageAvailable(type) {
    try {
        if (type == "None") { return false; };
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);

        storageAvilible = true;
        if (storageType == 'localStorage') {
            localStorage.setItem("libStorageAvilible", "true");
        } else {
            sessionStorage.setItem("libStorageAvilible", "true");
        }
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}



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

    return this.books.length;
};

//Lib Instance
var gLib = new library("gLib");
console.log(gLib);

//Book Instances
var gBL = new book({ title: "Bool", author: "Jason West", numberOfPages: 250, publishDate: "Feburary 3, 1888" }, generateCallNum());
var gIT = new book({ title: "IT", author: "Stephen King", numberOfPages: 800, publishDate: "December 17, 1995" }, generateCallNum());
var gGM = new book({ title: "Green Mile", author: "Stephen King", numberOfPages: 1200, publishDate: "Janurary 22, 2002" }, generateCallNum());
var gCatherInTheRye = new book({ title: "Catcher In The Rye", author: "JD Salinger", numberOfPages: 200, publishDate: "December 25, 1987" }, generateCallNum());
var gNP = new book({ title: "New Power", author: "Jeremy Heimans", numberOfPages: 873, publishDate: "April 12, 2019" }, generateCallNum());
var gTTC = new book({ title: "Dan the Fallower", author: "Jeremy Heimans", numberOfPages: 1250, publishDate: "May 17, 2000" }, generateCallNum());
var gPOW = new book({ title: "War of Ewwww!", author: "Mary U'Banks", numberOfPages: 210, publishDate: "June 7, 1999" }, generateCallNum());
var gQOS = new book({ title: "Kill the Mockingbird", author: "Marko Wines", numberOfPages: 1750, publishDate: "April 12, 2014" }, generateCallNum());
var gQOW = new book({ title: "Kill the Other Mockingbird", author: "Marko Wines", numberOfPages: 1650, publishDate: "April 12, 2016" }, generateCallNum());
var gQOT = new book({ title: "Kill the Blue Mockingbird Cause It Dont Like ME!", author: "Marko Wines", numberOfPages: 1650, publishDate: "April 12, 2018" }, generateCallNum());

//Array collection of Book Instances
var gBookArray1 = [gIT, gGM, gCatherInTheRye];
var gBookArray2 = [gNP, gTTC, gPOW];
var gBookArray3 = [];

//testing auto loads library
//gLib.fillLib();

//--------------------------------------------------------------------------------------------------------------------------
