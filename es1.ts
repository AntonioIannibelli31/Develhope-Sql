import pgPromise from "pg-promise";

const database = pgPromise()(
  "postgres://postgres:postgres@localhost:5432/esercizi-sql"
);

const setupDb = () => {
  database.none(`
      CREATE TABLE IF NOT EXISTS books (
          book_id INTEGER PRIMARY KEY,
          title TEXT NOT NULL,
          author TEXT NOT NULL,
          genre TEXT NOT NULL,
          published_year INT,
          isbn INT,
          price FLOAT,
          rating INT,
          stock_count INT
      );
    ALTER TABLE books
    ADD COLUMN publisher TEXT NOT NULL;
    ALTER TABLE books  
    ADD COLUMN number_of_pages INTEGER 
      `);
};

setupDb();
