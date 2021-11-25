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
// Get StudentInfo
exports.getStudentInfoWithID = function(id,callbackQuery){
    connect();
    
    var sql = `CALL Get_Student(?)`;
    connection.query(sql,[id] ,function(err, results, fields){
        if(!err){
            callbackQuery(results);

        }
        else{
            console.log(err);
        }
    })
}

// Get Staff Info
exports.getStaffInfoWithID = function(id,callbackQuery){
    connect();
    
    var sql = `CALL Get_Employee(?)`;
    connection.query(sql,[id] ,function(err, results, fields){
        if(!err){
            callbackQuery(results);

        }
        else{
            console.log(err);
        }
    })
}
// Get Affair Info
exports.getAffairEmpInfoWithID = function(id,callbackQuery){
    connect();
    
    var sql = `CALL Get_AffairEmp(?)`;
    connection.query(sql,[id] ,function(err, results, fields){
        if(!err){
            callbackQuery(results);

        }
        else{
            console.log(err);
        }
    })
}

// Repre Info

exports.getRepresentInfoWithID = function(id,callbackQuery){
    connect();
    
    var sql = `call Get_Representative(?)`;
    connection.query(sql,[id] ,function(err, results, fields){
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

// Get Appointment
exports.getAppointment = function(callbackQuery){
    connect();
    connection.query("call GetInforAppointment()", function(err, results, fields){
        if(!err){
            callbackQuery(results);

        }
        else{
            console.log(err);
        }
    })
}


// Get Appointment
exports.getMessage = function(callbackQuery){
    connect();
    connection.query("call GetInforMessage()", function(err, results, fields){
        if(!err){
            callbackQuery(results);

        }
        else{
            console.log(err);
        }
    })
}

// Get replies
exports.getReplies = function(callbackQuery){
    connect();
    connection.query("call GetInforReplies()", function(err, results, fields){
        if(!err){
            callbackQuery(results);

        }
        else{
            console.log(err);
        }
    })
}

// Get Scholarship requirement
exports.getScholarshipRequire = function(id,callbackQuery){
    connect();
    
    var sql = `CALL getScholarRequire(?)`;
    connection.query(sql,[id] ,function(err, results, fields){
        if(!err){
            callbackQuery(results);

        }
        else{
            console.log(err);
        }
    })
}

// Get Scholarship requirement
exports.getJobRequire = function(id,callbackQuery){
    connect();
    
    var sql = `CALL getJobRequire(?)`;
    connection.query(sql,[id] ,function(err, results, fields){
        if(!err){
            callbackQuery(results);

        }
        else{
            console.log(err);
        }
    })
}
//get list rating
exports.getRatingList = function(callbackQuery){
    connect();
    connection.query("CALL GetInforRatingSheet()", function(err, results, fields){
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


// addApointment
exports.insertAppoitment= function(stud_id,app_date,app_time,stu_problem,status,callbackInsert){
    connect();
     // var sql = `CALL MakeAppointment(${stud_id},${app_date},${app_time},${stu_problem},${cstaff_id})`;
     // var sql = `CALL MakeAppointment(1915450, '2021-11-05', '19:30:00', 'Tư vấn về kế hoạch học tập đại học', 'NV78374');`;
    connection.query(`CALL MakeAppointment(?,?,?,?,?);`,[stud_id,app_date,app_time,stu_problem,status],function(err, results, fields){
        if(!err){
            callbackInsert(results);
        }
        else{
            console.log(err)
        }
    } )
}

exports.updateAppointment= function(stud_id,app_date,app_time,caring_id,callbackInsert){
    connect();
     
    connection.query(`CALL AcceptAppointment(?,?,?,?)`,[stud_id,app_date,app_time,caring_id],function(err, results, fields){
        if(!err){
            callbackInsert(results);
        }
        else{
            console.log(err)
        }
    } )
}

exports.sendMessage= function(subject,content,stu_id, time,callbackInsert){
    connect();
     // var sql = `CALL MakeAppointment(${stud_id},${app_date},${app_time},${stu_problem},${cstaff_id})`;
     // var sql = `CALL MakeAppointment(1915450, '2021-11-05', '19:30:00', 'Tư vấn về kế hoạch học tập đại học', 'NV78374');`;
    connection.query(`CALL InsertMessage(?,?,?,?);`,[subject,content,stu_id, time],function(err, results, fields){
        if(!err){
            callbackInsert(results);
        }
        else{
            console.log(err)
        }
    } )
}

exports.CreateRating= function(content,id,date,callbackInsert){
    connect();
    connection.query(`call InsertRSheet(?,?,?);`,[content,id,date],function(err, results, fields){
        if(!err){
            callbackInsert(results);
        }
        else{
            console.log(err)
        }
    } )
}

exports.sendReplies= function(caringid,messageid,content,callbackInsert){
    connect();
     // var sql = `CALL MakeAppointment(${stud_id},${app_date},${app_time},${stu_problem},${cstaff_id})`;
     // var sql = `CALL MakeAppointment(1915450, '2021-11-05', '19:30:00', 'Tư vấn về kế hoạch học tập đại học', 'NV78374');`;
    connection.query(`CALL ReplyMessage(?,?,?);`,[caringid,messageid,content],function(err, results, fields){
        if(!err){
            callbackInsert(results);
        }
        else{
            console.log(err)
        }
    } )
}

// add News
exports.insertNews= function(topic,title,content,author,caringStaffID,addDay,callbackInsert){
    connect();
    connection.query(`CALL AddNews(?,?,?,?,?,?);`,[topic,title,content,author,caringStaffID,addDay],function(err, results, fields){
        if(!err){
            callbackInsert(results);
        }
        else{
            console.log(err)
        }
    } )
}

// add Events
exports.insertEvent= function(type, eventname, organizer, place, participantmaxnum, stime, etime,caringStaffID,addDay, callbackInsert){
    connect();
    connection.query(`CALL AddEvent(?,?,?,?,?,?,?,?,?);`,[type, eventname, organizer, place, participantmaxnum, stime, etime,caringStaffID,addDay],function(err, results, fields){
        if(!err){
            callbackInsert(results);
        }
        else{
            console.log(err)
        }
    } )
}
// add Scholarship
exports.insertScholarship= function(scope, value, name, sdate, edate, staffID,addDay ,callbackInsert){
    connect();
    connection.query(`CALL AddScholar(?,?,?,?,?,?,?);`,[scope, value, name, sdate, edate,staffID,addDay],function(err, results, fields){
        if(!err){
            callbackInsert(results);
        }
        else{
            console.log(err)
        }
    } )
}
exports.insertScholarshipRequire= function(scholarID, srequire ,callbackInsert){
    connect();
    connection.query(`CALL AddScholRequire(?,?);`,[scholarID, srequire],function(err, results, fields){
        if(!err){
            callbackInsert(results);
        }
        else{
            console.log(err)
        }
    } )
}
// add Job
exports.insertJob= function(company, jobname, phonenum, address, sdate, edate ,staffID,addDay, callbackInsert){
    connect();
    connection.query(`CALL AddJob(?,?,?,?,?,?,?,?);`,[company, jobname, phonenum, address, sdate, edate ,staffID,addDay],function(err, results, fields){
        if(!err){
            callbackInsert(results);
        }
        else{
            console.log(err)
        }
    } )
}

exports.insertJobRequire= function(jobID, jrequire, callbackInsert){
    connect();
    connection.query(`CALL AddJobRequire(?,?);`,[jobID, jrequire],function(err, results, fields){
        if(!err){
            callbackInsert(results);
        }
        else{
            console.log(err)
        }
    } )

}

// get all call history
exports.getCallHistory = function(callbackQuery){
    connect();
    connection.query("call GetCallHistory();", function(err, results, fields){
        if(!err){
            callbackQuery(results);

        }
        else{
            console.log(err);
        }
    })
}

// insert call history
exports.addCallHistory= function(StudentID, StaffID, Topic, Status, callbackInsert){
    connect();
    connection.query(`CALL InsertCallHis(?,?,?,?);`,[StudentID, StaffID, Topic, Status],function(err, results, fields){
        if(!err){
            callbackInsert(results);
        }
        else{
            console.log(err)
        }
    } )
}

// update call status
exports.updateCallHistory= function(CallID, Status, callbackInsert){
    connect();
    connection.query(`CALL UpdateCall(?,?);`,[CallID, Status],function(err, results, fields){
        if(!err){
            callbackInsert(results);
        }
        else{
            console.log(err)
        }
    } )
}