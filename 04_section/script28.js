// 28. The Array sort Method

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
};

function getBook(id) {
  return data.find((data) => data.id === id);
};


// The map method

const myArray = [1, 2, 3, 4, 5];
console.log(myArray);
const myArrayMap = myArray.map(element => element * 2);
console.log(myArrayMap);

const books = getBooks();
console.log(books);

const titles = books.map(book => book.title);  
console.log(titles);

const getTotalReviewCount = (myBook) => {
    const goodreads = myBook.reviews?.goodreads?.reviewsCount;
    const librarything = myBook.reviews?.librarything?.reviewsCount ?? 0;
    return goodreads + librarything;
};

const essentialData = books.map(book => {
    // console.log(book);
    return {
        title: book.title,
        author: book.author,
        reviewsCount: getTotalReviewCount(book),
    };
});
console.log(essentialData);


// The filter method

const longBooks = books.filter(book => book.pages > 500);
console.log(longBooks);

const longBooksWithMovie = longBooks.filter(book => book.hasMovieAdaptation);
console.log(longBooksWithMovie);

const adventureBooks = books
    .filter((book) => book.genres.includes('adventure'))
    .map(book => book.title);
console.log(adventureBooks);


// The reduce method
const pagesAllBooks = books.reduce((sum, book) => {
    // console.log(sum);
    // console.log(book.pages);
    return sum + book.pages;
}, 0);
console.log(pagesAllBooks);


// The sort method
const mySecondArray = [3, 7, 1, 9, 6];
console.log(mySecondArray);
const sortedArray = mySecondArray
    .slice()
    .sort((a, b) => a - b);
console.log(mySecondArray);
console.log(sortedArray);


const sortedByPages = books
    .slice()
    .sort((a, b) => { 
        console.log(a.pages);
        console.log(b.pages);
        return b.pages - a.pages;
    });
console.log(sortedByPages);
