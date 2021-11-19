var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'student_care_system',
    port: '3307'

});

var connect = function(){
    connection.connect(function(err){
        if (!err){
            console.log('Kết nối thành công')

        }
        else{
            console.log('error connect')
        }
    })
}

var closeDB = function(){
    connection.end(function(err){
        if (!err) {console.log('Close db')}
        else{
            console.log('error close')
        }
    })
}
//  Get Get Get
//  
//
// Get Event
exports.getEvent = function(callbackQuery){
    connect();
    var sql = `CALL GetEvent()`;
    connection.query(sql, function(err, results, fields){
        if(!err){
            callbackQuery(results);

        }
        else{
            console.log(err);
        }
    })
}

exports.getEventWithID = function(id,callbackQuery){
    connect();
    
    var sql = `CALL GetEventWithID(?)`;
    connection.query(sql,[id] ,function(err, results, fields){
        if(!err){
            callbackQuery(results);

        }
        else{
            console.log(err);
        }
    })
}

// Get News
exports.getNews = function(callbackQuery){
    connect();
    connection.query("CALL getNews()", function(err, results, fields){
        if(!err){
    
            callbackQuery(results);

        }
        else{
            console.log(err);
        }
    })
}

// Get News
exports.getJob = function(callbackQuery){
    connect();
    connection.query("CALL getJob()", function(err, results, fields){
        if(!err){
            callbackQuery(results);

        }
        else{
            console.log(err);
        }
    })
}

// Get Scholarship
exports.getScholarship = function(callbackQuery){
    connect();
    connection.query("call getScholarship()", function(err, results, fields){
        if(!err){
            callbackQuery(results);

        }
        else{
            console.log(err);
        }
    })
}


exports.insertData= function(ID,Type,EventName,Organizer,Place,ParticipantMaxNum,STime,ETime,CaringStaffID, callbackInsert){
    connect();
    connection.query("INSERT INTO `event`(`ID`, `Type`, `EventName`, `Organizer`, `Place`, `ParticipantMaxNum`, `STime`, `ETime`, `CaringStaffID`) VALUES ('" +ID+"','"+Type+"','"+EventName+"','"+Organizer+"','"+Place+",'+'"+ParticipantMaxNum+"','"+STime+"','"+ETime+"','"+CaringStaffID+"')",function(err, results, fields){
        if(!err){
            callbackInsert(results);
        }
        else{
            console.log(err)
        }
    } )
}