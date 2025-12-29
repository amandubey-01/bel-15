// Aggregation
// Has - A (Weak)
class Book {
    constructor (title) {
        this.title = title;
    }

    display() {
        console.log(`Book: ${this.title}`);
    }
}

class Library {
    #books;

    constructor (name, books) {
        this.name = name;
        this.#books = books;
    }

    addBook(book) {
    if (!(book instanceof Book)) {
        throw new Error("Only Book instances can be added to the library");
    }
    this.#books.push(book);
    }

    issueBook (book) {
        // find by id and pop out
    }

    showLibrary() {
        console.log(`Library: ${this.name}`);
        this.#books.forEach(book => book.display());
    }
}

const book1 = new Book ("Leviathan");
const book2 = new Book ("Five point someone");

const library1 = new Library("Unique Library", [book1, book2]);
// In this case even if the library gets destroyed. It would have not have any impact on Books. 
//library1.addBook("What the fuck!");
library1.showLibrary();