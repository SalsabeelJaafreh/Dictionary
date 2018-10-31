const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8070;
const path = require('path');
//var Oxford=require('oxford-dictionary')


const app = express();
app.use(express.static(`${__dirname}/../react-client/dist`));



//oxford requires
//i take the steps from this link >> https://www.npmjs.com/package/oxford-dictionary-api
// var app_id ="f3cd516e" //"your oxford-account app id";
// var app_key = "4a4f31baf511643a0f71843f1294dd12"//"your oxford-account app key";

// var dict = new Dictionary(app_id,app_key);

var Dictionary = require("oxford-dictionary-api");
var app_id = "f3cd516e";
var app_key = "4a4f31baf511643a0f71843f1294dd12";
var dict = new Dictionary(app_id, app_key);

 
app.post('/difinition', (req, res) => {
dict.find(req.body.word,function(error,data){ 
	if(error) 
		res.sendStatus(400);
	res.send(data)
	 
	});
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});