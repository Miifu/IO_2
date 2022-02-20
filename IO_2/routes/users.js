var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("Kukkuluuruu!");
});

router.use(function (req, res, next){
  console.log("Olen välivehje 1!");
  next();
});

router.get ('/toka',function(req, res)
{
  res.send("Olenpa toka hyvinkin");
  console.log("Tokapa tietenkin");
});

router.use(function (req, res, next){
  console.log("Olen välivehje 2!");
  next();
});

router.get ('/kolmas/:nimi',function(request, response)
{
  response.send("Olenpa vaan "+request.params.nimi);
  console.log(request.params.nimi);
});

router.use(function (req, res, next){
  console.log("Olen välivehje 3!");
  next();
});

router.get ('/neljas/:etunimi/:sukunimi',function(request, response)
{
  response.send("Olenpa vaan "+request.params.etunimi+" "+request.params.sukunimi);
//  console.log(request.params.nimi);
});

router.post('/',function(request,response)
{
  response.send(request.body);
});

module.exports = router;
