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
      `);
  database.none(
    `INSERT INTO books VALUES ('1', 'A Journey to the Center','Jules Verne','Adventure','1864', '123456789','12.99','4','10','Verne Publishing','350')`
  );
  database.none(
    `INSERT INTO books VALUES ('2', 'War And Peace','Lev Tolstoy','Historical','1869', '123456790','14.99','5','5','Tolstoy Prints','1200')`
  );
  database.none(
    `INSERT INTO books VALUES ('3', 'Whispers of the Wind','Amelia Blackburn','Romance','1982', '123456791','9.99','4','20','BlackBourn House','275')`
  );
  database.none(
    `INSERT INTO books VALUES ('4', 'The Galactic Odyssey','Orion Starfield','Science Fiction','2005', '123456792','19.99','5','15','Nebula Press','450')`
  );
};

setupDb();
