 class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  };

  greetPatron(patron, morning) {
    if (morning) {
      return `Good morning, ${patron}!`;
    } else {
    return `Hello, ${patron}!`;
    }
  };

  findBook(title) {
    var allShelves = this.library.shelves;
    for (var key in allShelves) {
      var bookIndex = allShelves[key].findIndex(book => book.title === title);
      if (bookIndex >= 0) {
        allShelves[key].splice(bookIndex, 1);
        return `Yes, we have ${title}`;
      } else {
      return `Sorry, we do not have ${title}`;
      }
    };
  };

  calculateLateFee(days) {
    return Math.ceil(days * .25);
  };

};

module.exports = Librarian;
