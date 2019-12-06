var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"agira"
});
//
// mysql> desc tech;
// +------------+--------------+------+-----+---------+-------+
// | Field      | Type         | Null | Key | Default | Extra |
// +------------+--------------+------+-----+---------+-------+
// | tech_id    | varchar(255) | YES  |     | NULL    |       |
// | technology | varchar(255) | YES  |     | NULL    |       |
// +------------+--------------+------+-----+---------+-------+
// 2 rows in set (0.00 sec)
//

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO technologies (emp_id, technology) VALUES ?";
  var values = [
    ["AT01","html"],
    ["AT02","css"],
    ["AT03","java"],
    ["AT04","js"],
    ["AT05","sql"],
    ["AT06","mongodb"],
    ["AT07","docker"],
    ["AT08","anguar"],
    ["AT09","python"],
    ["AT10","golang"],
    ["AT11","ror"],
    ["AT12","futter"],
    ["AT13","php"],
    ["AT14","salse"],
    ["AT15","marketing"]

  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
