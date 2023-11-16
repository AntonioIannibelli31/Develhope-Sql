import pgPromise from "pg-promise";

const database = pgPromise()(
  "postgres://postgres:postgres@localhost:5432/esercizi-sql"
);

const setupDb = () => {
  database.none(`
  SELECT * FROM titanic WHERE genre=female
    AND age>30
    AND survived=1
  `);
  database.none(`
  SELECT AVG(age) FROM titanic WHERE sex=male 
    AND survived=0
  `);
  database.none(`
  SELECT * FROM titanic WHERE embarked=C
    AND fare >=20
    AND fare<=50
  `);
  database.none(`
  SELECT COUNT(*) FROM titanic WHERE pClass=1
    AND survived=1
  `);
  database.none(`
  SELECT * FROM titanic WHERE embarked=C
    AND fare>75
  `);
};

setupDb();
