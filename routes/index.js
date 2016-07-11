var express = require('express');
var router = express.Router();

/* GET home page. */
var shortened_URLs = [];
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new/:url', function(req,res,next){
    var url = req.params.url;
    console.log(url);
    console.log(shortened_URLs[0]['short']);
    shortened_URLs.forEach(function(element){
      if(element['short']===parseInt(url)){
          res.redirect(element['actual']);
      } 
    });    
})
router.get('/new/:url*//:add', function(req,res,next){
    var url = req.params.url;
    var add = req.params.add;
    
    if(url === 'http:' || url ==='https:'){
    
        var data = {
          'short': new Date().getMilliseconds(),
          'actual':url + "//" + add
        };
        
        shortened_URLs.push(data);
            
        res.json(data);   
    }
    console.log(shortened_URLs);
});


// router.get('/new/http://:url', function(req,res,next){

// });

// router.get('/new/https://:url', function(req,res,next){
//     var url = req.params.url;

//     var data = {
//       'short': new Date().getMilliseconds(),
//       'actual':'https://' + url
//     };
    
//     shortened_URLs.push(data);
    
//     res.json(data);
// });


module.exports = router;
