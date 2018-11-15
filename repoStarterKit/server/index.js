const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8050;
const path = require('path');
//var Oxford=require('oxford-dictionary')

var Dictionary = require("oxford-dictionary-api");

const app = express();
app.use(express.static(`${__dirname}/../react-client/dist`));



//oxford requires
//i take the steps from this link >> https://www.npmjs.com/package/oxford-dictionary-api
  var app_id ="f3cd516e" //"your oxford-account app id";
  var app_key = "4a4f31baf511643a0f71843f1294dd12"//"your oxford-account app key";
 var dict = new Dictionary(app_id, app_key);

 app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});







app.get('/definition/:word', function(req,res){
    const word = req.params.word;

dict.find(word,function(error,data){ if(error) return

 console.log(error);

 var  def = data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
 console.log("success***")
 res.send(def);

  });
})



app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});