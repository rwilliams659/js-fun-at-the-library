function createLibrary(library) {
  return {name: library,
          shelves: {fantasy: [],
                    fiction: [],
                    nonFiction: []
                   }
         };
};

function addBook(library, book) {
  library.shelves[book.genre].push(book);
};

function checkoutBook(library, title) {
  var allShelves = library.shelves;
  for (var key in allShelves) {
    var bookIndex = allShelves[key].findIndex(book => book.title === title);
    if (bookIndex >= 0) {
        allShelves[key].splice(bookIndex, 1);
        return `You have now checked out ${title} from the ${library.name}`;
    };
  };
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
};

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
