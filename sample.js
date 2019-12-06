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

};
      };
    });
    });
   test.listen(3026 ,function(){
     console.log('Listning to port 3026')
   });
