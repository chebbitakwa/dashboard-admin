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
  // //     //verification d'ajout
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

  




    // .then(Data => {
    // Data.remove(name, err => {
    //       if (err) return res.send(err);
    //       return res.send({ success: true });
    //     });
    //    })
  });


});


// // //definition de serveur
app.listen(5000, err => {
  if (err) console.log("serveur erreur");
  else console.log("serveur is running on port 5000");
});
