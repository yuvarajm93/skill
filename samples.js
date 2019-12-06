var  express = require('express');
var test  = express();
var mysql= require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"agira"
});
 test.get('/api/v1/agira', function(request, response){
   con.query("SELECT * from employee", function(err,result){
     if(err){
       response.status(400).send('error');
     }else{
      console.log(result);
        var agira = {}
            backend=[]
            frontend=[]
        for(r in result) {
          if(result[r].team=='back_end'){
            var tech = {};
              tech.team  = result[r].team;
              tech.emp_id     = result[r].emp_id;
              tech.emp_name   = result[r].emp_name;
              tech.role = result[r].role;
              tech.technology_1 = result[r].technology_1;
              tech.technology_2     = result[r].technology_2;
              tech.technology_3  = result[r].technology_3;
              backend.push(tech);
              console.log(tech)
            }
        if(result[r].team=='front_end'){
            var tech = {};
              tech.team  = result[r].team;
              tech.emp_id     = result[r].emp_id;
              tech.emp_name   = result[r].emp_name;
              tech.role = result[r].role;
              tech.technology_1 = result[r].technology_1;
              tech.technology_2     = result[r].technology_2;
              tech.technology_3  = result[r].technology_3;
              frontend.push(tech);
              console.log(tech)
            }
        agira.backend = backend;
        agira.frontend = frontend;
        console.log(agira);
        response.send(agira);
        }
      };
  });
});


test.post("/api/v1/agira", function(req, res) {
  con.query('INSERT INTO empoyee (team, emp_id,emp_name,role,technology_1,technology_2,technology_3)   values (("'+req.body.team+'"),("'+req.body.emp_id+'"),("'+req.body.emp_name+'"),("'+req.body.role+'"),("'+req.body.technology_1+'"),("'+req.body.technology_2+'"),("'+req.body.technology_3+'"))', function (err, result) {
        if(err){
        console.log(err)
        res.status(400).send('error');
          }else{
          console.log(result);
          res.send("hi")
        }
    });
});


test.put("/api/v1/agira", function(req, res) {
  var sql =  "UPDATE emp_id SET technology_2 = ('"+req.body.emp_id+"') WHERE address = ('"+req.body.technology_2+"')";
  con.query(sql, function (err, res) {
        if(err){
        res.status(400).send('error');
        }else{
        console.log("one item updated");
        res.send("success");
        }
    });
});

test.delete("/mydb", function(req, res) {
var sql =  "DELETE from employee WHERE emp_name = ('"+req.body.emp_name+"')";
con.query(sql, function (err, res) {
      if(err){
        res.status(400).send('error');
        }else{
        console.log("one item deleted");
      }
  });
});


test.listen(3005,function(){
  console.log("listening to 3005");
});
