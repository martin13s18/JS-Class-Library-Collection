# JS-Class-Library-Collection
At the initialization of the LibraryCollection class, the constructor accepts the capacity.

Methods: 
- addBook() - accept 2 parameters - book name and author.
The parameters are of type string. If there's not enough space in the collection for the book, throw an Error, otherwise this function should add the book and return the respective message;

- payBook() - accept 1 parameter - book name. If the book is not found or already paid throw an Error. Otherwise, this function set paid to true on the found book and return the respective message;

- removeBook() - accept 1 parameter - book name. If the book is not found or if the book hasn't paid, throw an Error. Otherwise, this function should remove the book from the array and return message.

- getStatistics() - accept 1 parameter - book author. This method can be called with one parameter or without any. If no parameter is provided, the method should return the full information of the library. If the method is called with a parameter for bookAuthor - return only the information about the book from the given book author.

