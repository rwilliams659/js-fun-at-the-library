function createTitle(title) {
  return 'The ' + title;
};

function buildMainCharacter(name, age, pronouns) {
  return {name: name, age: age, pronouns: pronouns};
};

function saveReview(singleReview, reviews) {
  if (reviews.includes(singleReview) === false) {
  reviews.push(singleReview);
  };
};

function calculatePageCount(title) {
  return 20*(title.length);
};

function writeBook(bookTitle, bookCharacter, genre) {
  return book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  };
};

function editBook(book) {
  return Math.round(book.pageCount *= 3/4);
};


module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
