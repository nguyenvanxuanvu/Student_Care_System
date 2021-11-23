var express = require('express');
var database = require('./database')
var app = express();

const cors = require("cors")

app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get("/event1/", function(req, res){
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
    var id = req.query.id
     
    database.getEventWithID(id,function(resultQuery){
        console.log(resultQuery)
        res.send(resultQuery);
        
    });
});
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

// appointment

app.get("/appointment", function(req, res){
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
    database.getAppointment(function(resultQuery){
        
        res.send(resultQuery);
        
    });
});




app.get("/s_requires/", function(req, res){
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
    var id = req.query.id
     
    database.getScholarshipRequire(id,function(resultQuery){
        console.log(resultQuery)
        res.send(resultQuery);
        
    });
});


app.get("/j_requires/", function(req, res){
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
    var id = req.query.id
     
    database.getJobRequire(id,function(resultQuery){
        console.log(resultQuery)
        res.send(resultQuery);
        
    });
});

// InsertAppointment
app.post("/addAppointment", function(req,res){
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
    console.log(req.body)
    var stud_id = req.body.StudentID;
    var app_date =req.body.Date;
    var app_time = req.body.Time;
    var stu_problem = req.body.Problem;
    var status = false;
    

    
    database.insertAppoitment(stud_id,app_date, app_time,stu_problem,status,function(resultQuery){
        res.json(resultQuery)
    })
    
})


app.post("/updateAppointment", function(req,res){
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
    console.log(req.body)
    var stud_id = req.body.StudentID;
    var app_date =req.body.Date;
    var app_time = req.body.Time;
    var caring_id = req.body.CaringID;
    
    database.updateAppointment(stud_id,app_date, app_time,caring_id,function(resultQuery){
        res.json(resultQuery)
    })
    
})


// Nguoi dai dien
app.get("/studentInfo/", function(req, res){
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
    var id = req.query.id
     
    database.getStudentInfoWithID(id,function(resultQuery){
        console.log(resultQuery)
        res.send(resultQuery);
        
    });
});

// ng dai dien

app.get("/representInfo/", function(req, res){
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
    var id = req.query.id
     
    database.getRepresentInfoWithID(id,function(resultQuery){
        console.log(resultQuery)
        res.send(resultQuery);
        
    });
});

//get list rating

app.get("/rating", function(req, res){
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
    database.getRatingList(function(resultQuery){
        
        res.send(resultQuery);
        
    });
});

// add news
app.post("/addNews", function(req,res){
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
    console.log(req.body)
    var topic = req.body.topic;
    var title =req.body.title;
    var content = req.body.content;
    var author = req.body.author;
    var caringStaffID = req.body.caringStaffID;  

    database.insertNews(topic,title,content,author,caringStaffID,function(resultQuery){
        res.json(resultQuery)
    })
    
})

// add event
app.post("/addEvent", function(req,res){
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
    console.log(req.body)
    var type = req.body.type;
    var eventname =req.body.eventname;
    var organizer = req.body.organizer;
    var place = req.body.place;
    var participantmaxnum = req.body.participantmaxnum;  
    var stime = req.body.stime;
    var etime = req.body.etime;
    var caringStaffID = req.body.caringStaffID;

    database.insertEvent(type, eventname, organizer, place, participantmaxnum, stime, etime,caringStaffID ,function(resultQuery){
        res.json(resultQuery)
    })
    
})

// add job
app.post("/addJob", function(req,res){
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
    console.log(req.body)
    var company = req.body.company;
    var jobname =req.body.jobname;
    var phonenum = req.body.phonenum;
    var address = req.body.address;
    var sdate = req.body.sdate;
    var edate = req.body.edate;
    var staffID = req.body.staffID;

    database.insertJob(company, jobname, phonenum, address, sdate, edate ,staffID ,function(resultQuery){
        res.json(resultQuery)
    })
    
})

// add scholarship
app.post("/addScholarship", function(req,res){
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
    console.log(req.body)
    var scope = req.body.scope;
    var value =req.body.value;
    var name = req.body.name;
    var sdate = req.body.sdate;
    var edate = req.body.edate;
    var staffID = req.body.staffID;

    database.insertScholarship(scope, value, name, sdate, edate,staffID ,function(resultQuery){
        res.json(resultQuery)
    })
    
})


app.listen(3000)