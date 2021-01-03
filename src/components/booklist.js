import React from "react";
import Book from "./book";

let books = [
  {
    file: "1.jpg",
    author: "Shawn Stevenson",
    bookTitle: "Eat Smarter"
  },
  {
    file: "2.jpg",
    author: "Andrea Hannemann",
    bookTitle: "Plant over processed"
  },
  {
    file: "3.jpg",
    author: "Charlse Soule",
    bookTitle: "Light of the Jedi"
  },
  {
    file: "4.jpg",
    author: "Tui T. Sutherland",
    bookTitle: "Wings of Fire"
  },
  {
    file: "5.jpg",
    author: "Bill Bryson",
    bookTitle: "The Body"
  },
  {
    file: "6.jpg",
    author: "Elton John",
    bookTitle: "Me"
  },
  {
    file: "7.jpg",
    author: "Alexis Shaitkin",
    bookTitle: "Saint X"
  },
  {
    file: "8.jpg",
    author: "K. J. Packer",
    bookTitle: "Prosper's Demon"
  }
];

let BookList = () => {
  return (
    <div>
      {books.map(book => {
        return <Book {...book} />;
      })}
    </div>
  );
};

export default BookList;
