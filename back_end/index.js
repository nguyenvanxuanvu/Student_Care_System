var express = require('express');
var database = require('./database')
var app = express();

const cors = require("cors")

app.use(cors())

// GetEvent 
app.get("/event", function(req, res){
    if (req.headers.origin) { //req.headers.origin.match(/whateverDomainYouWantToWhitelist/g) ) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        oneof = true;
    }
    if (req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        oneof = true;
    }
    if (req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        oneof = true;
    }
    database.getEvent(function(resultQuery){
        
        res.send(resultQuery);
        
    });
});

// GetNews
app.get("/news", function(req, res){
    if (req.headers.origin) { //req.headers.origin.match(/whateverDomainYouWantToWhitelist/g) ) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        oneof = true;
    }
    if (req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        oneof = true;
    }
    if (req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        oneof = true;
    }
    database.getNews(function(resultQuery){
        
        res.send(resultQuery);
        
    });
});

// GetJob
app.get("/job", function(req, res){
    if (req.headers.origin) { //req.headers.origin.match(/whateverDomainYouWantToWhitelist/g) ) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        oneof = true;
    }
    if (req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        oneof = true;
    }
    if (req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        oneof = true;
    }
    database.getJob(function(resultQuery){
        
        res.send(resultQuery);
        
    });
});

// GetScholarship
app.get("/scholarship", function(req, res){
    if (req.headers.origin) { //req.headers.origin.match(/whateverDomainYouWantToWhitelist/g) ) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        oneof = true;
    }
    if (req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        oneof = true;
    }
    if (req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        oneof = true;
    }
    database.getScholarship(function(resultQuery){
        
        res.send(resultQuery);
        
    });
});



// exports.getEventData = function(){
//     app.get("/event", function(req, res){
//         database.getEvent(function(resultQuery){
//             res.json(resultQuery);
            
            
//         });
//     });
//     app.listen(3000)
// }


// app.get("/insert", function(req,res){
//     var ID = req.query.ID;
//     var Stime = req.query.Stime;
//     var Etime = req.query.Etime;
//     var CaringStaffID = req.query.CaringStaffID;
//     database.insertData(ID, '', '','','','', Stime, Etime, CaringStaffID,function(resultQuery){
//         res.json(resultQuery)
        
//     })
    
// })

app.listen(3000)