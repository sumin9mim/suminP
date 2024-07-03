// import { username, password } from "./mainjs.js";

router.post('/mainjs', (req, res) => {
  console.log(req.body);
  username = req.body.username;
  password = req.body.password;
  var sql = 'SELECT * FROM member WHERE username =? and password =?';
  con.query(sql, [username, password], function (err, result) {
    if (err) {
      res.json({ message: false })
    } else {
      req.session.username = username;
      res.json({ message: result[0].name })
    }
    console.log(result);
  });
});