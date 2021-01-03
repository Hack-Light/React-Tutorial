import React from "react";
import Book from "./book";

let books = [
  {
    image: "1.jpg",
    author: "Shawn Stevenson",
    title: "Eat Smarter"
  },
  {
    image: "2.jpg",
    author: "Andrea Hannemann",
    title: "Plant over processed"
  },
  {
    image: "3.jpg",
    author: "Charlse Soule",
    title: "Light of the Jedi"
  },
  {
    image: "4.jpg",
    author: "Tui T. Sutherland",
    title: "Wings of Fire"
  },
  {
    image: "5.jpg",
    author: "Bill Bryson",
    title: "The Body"
  },
  {
    image: "6.jpg",
    author: "Elton John",
    title: "Me"
  },
  {
    image: "7.jpg",
    author: "Alexis Shaitkin",
    title: "Saint X"
  },
  {
    image: "8.jpg",
    author: "K. J. Packer",
    title: "Prosper's Demon"
  }
];

let BookList = () => {
  return (
    <div>
      {" "}
      {books.forEach(book => (
        <Book file={book.image} author={book.author} bookTitle={book.title} />
      ))}{" "}
    </div>
  );
};

export default BookList;
