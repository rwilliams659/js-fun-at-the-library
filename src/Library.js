//1. createLibrary should take in a name as param
//2. Function will create an object with key name
//& value name given
function createLibrary(library) {
  return {name: library,
          shelves: {fantasy: [],
                    fiction: [],
                    nonFiction: []
                   }
         };
};

//Function takes 2 params: library, book
//Funcion must access library object shelves key,
//then the fantasy key, then push that book into fantasy shelf
//Function should see what the value of the genre key is of book
//Then add book to library item, shelf key, genre key that matches it

function addBook(library, book) {
  library.shelves[book.genre].push(book);
};
  //  //'fantasy'
  // var shelvesObject = library.shelves;
  // for (key in ShelvesObject) {
  //   if (key === bookGenre) {
  //     library.shelves.x.push(book)
  //   }
  // }
  //var shelvesArray = Object.keys(library.shelves);
  // for (var i = 0; i < shelvesArray.length; i++) {
  //   if (bookGenre == shelvesArray[i])

//Find library book in library.shelves; must find
//relevant genre, then within that aray, find book
//with .title = title
//remove book from array with splice(relevantIndex, 1)
//Then return (`You have now checked out ${title} from the ${library}`)
// function checkoutBook(library, title) {
//   var allShelves = library.shelves;
//   for (key in allShelves) {
//     for (var i = 0; i < allShelves[key].length; i++)
//       if (allShelves[key][i].title === title) {
//         allShelves[key].splice(i, 1)
//         return `You have now checked out ${title} from the ${library.name}`
//       }
//   }
// };
//SOLUTION 2
function checkoutBook(library, title) {
  var allShelves = library.shelves;
  for (var key in allShelves) {
    var bookIndex = allShelves[key].findIndex(book => book.title === title)
    if (bookIndex >= 0) {
        allShelves[key].splice(bookIndex, 1);
        return `You have now checked out ${title} from the ${library.name}`
    };
  };
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
};
//BELOW WORKS TO UNSHELF JUST PRIDE & PREJUDICE
// function checkoutBook(library, title) {
//   let fictionBooks = library.shelves.fiction
//   for (var i = 0; i < fictionBooks.length; i++) {
//     if (fictionBooks[i].title === title) {
//       fictionBooks.splice(i, 1);
//       return `You have now checked out ${title} from the ${library.name}`
//     }
//   }
// };


module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
