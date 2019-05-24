const knex = require("knex");
const router = require("express").Router();

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: "./data/games.db3"
  },
  useNullAsDefault: true
};
const db = knex(knexConfig);

router.get("/", (req, res) => {
  db("games")
    .then(games => {
      res.status(200).json(games);
    })
    .catch(err => {
      res.status(500).json({ error: "The games could not be retrieved." });
    });
});

router.post("/", (req, res) => {
  db("games")
    .insert(req.body, "id")
    .then(ids => {
        console.log(ids)
      db("games")
        .where({ id: ids[0] })
        .first()
        .then(role => {
          res.status(201).json(role);
        })
        .catch(err => {
          res.status(500).json(err.message);
        });
    })
    .catch(err => {
      res.status(500).json({err: err.message});
    });
});


module.exports = router;