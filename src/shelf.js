function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  };
};

function unshelfBook(title, shelf) {
  var bookIndex = shelf.findIndex(book => book.title === title);
  if (bookIndex >= 0) {
    shelf.splice(bookIndex, 1);
  };
};

function listTitles(shelf) {
  return shelf.map(book => book.title).join(', ');
};

function searchShelf(shelf, title) {
  return shelf.some(book => book.title === title);
};

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
