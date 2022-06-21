class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    // Method add book functionality
    addBook(bookName, bookAuthor) {

        this.books.push({ bookName, bookAuthor, payed: false, });

        if (this.books.length > this.capacity) {
            throw Error('Not enough space in the collection.');
        }

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    // Method pay book functionality
    payBook(bookName) {
      
        const bookToPay = this.books.find(book => book.bookName === bookName);
      
        if (!bookToPay) {
            throw Error(`${bookName} is not in the collection.`);
        }
 
        if (bookToPay.payed) {
            throw Error(`${bookName} has already been paid.`);
        }
 
      
        bookToPay.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    // Method remove book functionality
    removeBook(bookName) {
        const index = this.books.findIndex(book => book.bookName === bookName);
        if (index === -1) {
            throw Error('The book, you\'re looking for, is not found.');
        }
 
        if (!this.books[index].payed) {
            throw Error(`${bookName} need to be paid before removing from the collection.`);
        }
 
        this.books.splice(index, 1);
 
        return `${bookName} remove from the collection.`;
    }

    // Return the respective message about statistics
    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            const log = [];
            log.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
            if (this.books.length) {
                const sorted = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
                for (const book of sorted) {
                    log.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`);
                }

                return log.join('\n');
            }

            return '';
        }

        const authorBooks = this.books.filter(book => book.bookAuthor === bookAuthor);

        if (!authorBooks.length) {
            throw Error(`${bookAuthor} is not in the collection.`);
        }

        const log = [];

        for (const book of authorBooks) {
            log.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`);
        }

        return log.join('\n');
    }
}



