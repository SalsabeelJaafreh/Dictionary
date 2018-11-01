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

 app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/definition', (req, res) => {
    const config = {
        headers: {'Accept': 'application/json', 'app_id': 'aef40359', 'app_key': '135ef42b18b1431f4937f092e5f15bda'}
    }
    console.log('test')
    axios.get('https://od-api.oxforddictionaries.com/api/v1/entries/en/' + req.params.word + '/synonyms', config).then(function(response){
        res.json(response.data)
    }).catch(function(error){
        res.status(200).send({results: '404 Not Found'})
    })
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});