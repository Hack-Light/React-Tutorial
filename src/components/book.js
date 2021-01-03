import React from "react";

const Image = ({file}) => (
  <img src={`${process.env.PUBLIC_URL}/images/${file}`} alt="Photos" />
);

const Author = ({author}) => <p>{author} </p>;

const Title = ({bookTitle}) => <h3>{bookTitle}</h3>;


const Book = ({file,author,bookTitle}) => {
  return (
    <section>
      <Image file = {file}/>
      <Title bookTitle = {bookTitle}/>
      <Author author={author} />
    </section>
  );
};

export default Book;
