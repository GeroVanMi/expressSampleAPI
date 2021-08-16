var express = require('express');
const sqlite3 = require('sqlite3').verbose();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let db = new sqlite3.Database('./db/users.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the file SQlite database.');
  });

  const sql = "SELECT * FROM user";

  db.all(sql, [],(err, rows ) => {
    db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Closed the database connection.');
    });
    res.send(rows);
  });
});

module.exports = router;
