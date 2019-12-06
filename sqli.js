var  express = require('express');
var test = express();

var mysql= require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"agira"

});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


// con.query("CREATE DATABASE agira", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });

//
//
// var sql = "CREATE TABLE employee(team varchar(255),emp_id varchar(255), emp_name varchar(255),role varchar(255),technology_1 varchar(255),technology_2 varchar(255),technology_3 varchar(255))";
//  con.query(sql, function (err, result) {
//    if (err) throw err;
//    console.log("Table created");
//  });
//
//
//  var sql = "INSERT INTO employee (team, emp_id,emp_name,role,technology_1,technology_2,technology_3) VALUES ?";
//  var values=[
// ['front_end','AT01','monica','teamleader','angular','bootstrap','flutter'],
// ['front_end','AT02','rachel','sr_software_engineer','angular','ruby','laravel'],
// ['front_end','AT03','ross','sr_software_engineer','bootstrap','golang',''],
// ['front_end','AT04','chandler','jr_software_engineer','html','css','java_script'],
// ['front_end','AT05','phoebe','jr_software_engineer','html','css',''],
// ['front_end','AT06','gunter','trainee','html','css',''],
// ['front_end','AT07','tag','trainee','html','css',''],
// ['back_end','AT01','mike','team_leader','node.js','python','java'],
// ['back_end','AT02','barry','sr_software_engineer','node_js','java_script',''],
// ['back_end','AT03','richard','sr_software_engineer','python','node_js','java_script'],
// ['back_end','AT04','janice','jr_software_engineer','java','',''],
// ['back_end','AT05','joe','jr_software_engineer','java','java_script',''],
// ['back_end','AT06','ben','trainee','java','',''],
// ['back_end','AT07','sussan','trainee','java','',''],
// ];
//  con.query(sql,[values], function (err, result) {
//      if (err) throw err;
//    console.log("Number of records inserted: " + result.affectedRows);
//  });


 test.get('/api/v1/agira', function(request, response){
   con.query("SELECT * from employee", function(err,result){
     if(err){
       response.status(400).send('error');
     }else{
      console.log(result);
            var json = {}
            json.agira = []
            for(r in result) {
              var tech = {};
              tech[result[r].team] = result[r].emp_id + ',' + result[r].emp_name + ',' +  result[r].role + ',' + result[r].technology_1 + ',' + result[r].technology_2 + ',' +  result[r].technology_3;



           json.agira[r] = tech;

            }
            console.log(json);
            response.send(json);
        };
      });
      });
   test.listen(3026 ,function(){
     console.log('Listning to port 3026')
   });
