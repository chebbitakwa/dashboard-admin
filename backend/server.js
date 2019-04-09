// // creer backend: installer npm i express mongo body-parser

const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjecctID } = require("mongodb");
const assert = require("assert");
const app = express();
app.use(bodyParser.json());

//  //connexion avec database:
const MongoUrl = "mongodb://localhost:27017";
const dataBase = "WorkshopList";

// // //me permet de connecter database avec fichier serveur
MongoClient.connect(MongoUrl, { useNewUrlParser: true }, (err, client) => {
  assert.equal(err, null, "dataBase connection failed");
  const db = client.db(dataBase);//robo3T
  // //     // ajouter un element
   app.post('/add-workshop', (req, res) => {
     let newWorkshop = req.body;
     db.collection("workshop").insertOne(newWorkshop, (err, data) => {
       if (err) res.send("cant not add new workshop");
       else res.send("new workshop added");
     });
  });
  // //     //workshop
   app.get("/workshops", (req, res) => { 
     db.collection("workshop")
       .find()
       .toArray((err, data) => {
         if (err) res.send("cant not get movies List");
         else res.send(data);
       });
   });
   app.delete("/removeworkshops/:name", (req, res) => {
      db.collection("workshop").deleteOne( { "name" : req.params.name  },(err, data) => {
        if (err) res.send("erreur");
        else res.send(data);
      }

       )
  });
   /////////////////////////Colloque/////////////////////////////////
  app.post('/add-colloque', (req, res) => {
    let newColloque = req.body;
    db.collection("colloque").insertOne(newColloque, (err, data) => {
      if (err) res.send("cant not add new colloque");
      else res.send("new colloque added");
    });
 });

 app.get("/colloques", (req, res) => { 
  db.collection("colloque")
    .find()
    .toArray((err, data) => {
      if (err) res.send("cant not get colloque List");
      else res.send(data);
    });
});
app.delete("/removecolloques/:name", (req, res) => {
  db.collection("colloque").deleteOne( { "name" : req.params.name  },(err, data) => {
    if (err) res.send("erreur");
    else res.send(data);
  }

   )
});
 /////////////////////////THINKTANK/////////////////////////////////
app.post('/add-ThinkTank', (req, res) => {
  let newThinkTank = req.body;
  db.collection("ThinkTank").insertOne(newThinkTank, (err, data) => {
    if (err) res.send("cant not add new ThinkTank");
    else res.send("new ThinkTank added");
  });
});
app.get("/ThinkTanks", (req, res) => { 
  db.collection("ThinkTank")
    .find()
    .toArray((err, data) => {
      if (err) res.send("cant not get ThinkTank List");
      else res.send(data);
    });
});
app.delete("/removeThinkTanks/:name", (req, res) => {
  db.collection("ThinkTank").deleteOne( { "name" : req.params.name  },(err, data) => {
    if (err) res.send("erreur");
    else res.send(data);
  }
   )
});
 /////////////////////////Parcour/////////////////////////////////
 app.post('/add-parcour', (req, res) => {
  let newParcour = req.body;
  db.collection("parcour").insertOne(newParcour, (err, data) => {
    if (err) res.send("cant not add new parcour");
    else res.send("new parcour added");
  });
});

app.get("/parcours", (req, res) => { 
db.collection("parcour")
  .find()
  .toArray((err, data) => {
    if (err) res.send("cant not get parcour List");
    else res.send(data);
  });
});
app.delete("/removeparcours/:name", (req, res) => {
db.collection("parcour").deleteOne( { "name" : req.params.name  },(err, data) => {
  if (err) res.send("erreur");
  else res.send(data);
}

 )
});
////////////////////////////////////Raid_Art//////////////////////
app.post('/add-art', (req, res) => {
  let newArt = req.body;
  db.collection("art").insertOne(newArt, (err, data) => {
    if (err) res.send("cant not add new art");
    else res.send("new art added");
  });
});

app.get("/arts", (req, res) => { 
db.collection("art")
  .find()
  .toArray((err, data) => {
    if (err) res.send("cant not get art List");
    else res.send(data);
  });
});
app.delete("/removearts/:name", (req, res) => {
db.collection("art").deleteOne( { "name" : req.params.name  },(err, data) => {
  if (err) res.send("erreur");
  else res.send(data);
}

 )
});
});
/* wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */


















/*wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww*/

// // //definition de serveur
app.listen(5000, err => {
  if (err) console.log("serveur erreur");
  else console.log("serveur is running on port 5000");
});
