//shelfBook function takes in a book (object) & a shelf (array);
//It will add that book to the BEGINNING of the array
//Add condition so that book will only be added to shelf if there are
//less than 3 books on the shelf
function shelfBook(book, shelf){
  if (shelf.length < 3) {
  shelf.unshift(book);
};
};

//Takes in title & shelf;
//removes book object that has that title from shelf array:
//Given a title ( a key in an object), locate the object that has
//that key & remove it
//Look through each object in array; if the object title property
//is the given title, remove that object
function unshelfBook(title, shelf){
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      shelf.splice(i, 1);
    }
  }
};

//Function takes in shelf array
//For the shelf array, within each object, access the title value
//Put each title value in a string
//return that string

function listTitles(shelf) {
  return shelf.map(book => book.title).join(', ');
}

//Function takes in shelf array & title
//Option 1: iterate through each book object, access title & see if it
// matches given title
//Look for title; if title exists, return true; if it does not exist,
//return false

function searchShelf(shelf, title) {
  return shelf.some(book => book.title === title);
}

// function searchShelf(shelf, title) {
//   for (var i = 0; i < shelf.length; i++) {
//     if (shelf[i].title === title) {
//       return true;
//     }
//   }
//   return false;
// };

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
