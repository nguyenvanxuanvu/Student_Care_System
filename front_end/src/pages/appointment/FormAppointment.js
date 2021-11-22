import React, { Component } from 'react';
import "./Form.css";
import Righthome from '../home/righthome';
import axios from 'axios'
import Moment from 'moment'
class AppointmentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            userid: '',
            problem:'',
            appointdate: '',
            appointhour: '',
        };
        
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }
    
    handleDate(e){
        e = e.toString();
        var a = e.split('/');
        return a[2]+'-'+a[0]+'-'+a[1];

    }
    validateForm = () => {
        var data = this.state;

        if (data.username === '' || data.userid === '' || data.problem === '' ||
            data.appointdate === '' || data.appointhour === '') {
            return false;
        }
        return true;
    }
  
    onHandleSubmit(event){
        if (this.validateForm()) {
            console.log('successful');

            var postData = {
                StudentID: this.state.userid,
                 Date: this.state.appointdate,
                Time: this.state.appointhour,
                //  Date: Moment(this.state.appointdate).utcOffset('+07:00')
                //  .format('YYYY-MM-DD'),
                //  Time: Moment(this.state.appointhour).utcOffset('+07:00')
                //  .format('hh:mm:ss'),
                Problem: this.state.problem,
                
            };
            axios.post('/addAppointment', postData)
                .then()
                .catch((err) => alert('failure'));

                window.location.href = 'http://localhost:3001/addAppointment'
            alert('Đặt lịch hẹn thành công')
        }
         
        else {
            alert('Cần điền đầy đủ thông tin!');
        }

        
    }
    render(){
    return (
        <div class="row w-100">
      <div class="col-9">
        <div className="container mt-30">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            
                            {/* <h3 className="panel-title">{this.state.appointdate}</h3> */}
                            <h3 className="panel-title">Đặt lịch hẹn mới</h3>
                        </div>
                        <div className="panel-body">

                        <form onSubmit={ this.onHandleSubmit }>
                            <div className="form-group">
                                <label>Họ tên: </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="username" 
                                onChange= {(event) => this.setState({username : event.target.value})} 
                                />
                            </div><br/>
                            
                            <div className="form-group">
                                <label>MSSV: </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="userid" 
                                onChange={(event) => this.setState({userid : event.target.value})} 
                                />
                            </div><br/>
                            
                            <div className="form-group">
                                <label>Vấn đề cần tư vấn: </label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    name="problem"
                                    onChange={(event) => this.setState({problem : event.target.value})} 
                                ></textarea>
                            </div><br/>
                            <div className="form-group">
                                <label for="exampleDate" class="form-label">Ngày hẹn</label>
                                <input type="date" class="form-control" id="exampleDate"
                                name="appointdate" onChange={(event) => this.setState({appointdate : event.target.value})} />
                            </div><br/>
                            <div className="form-group">
                                <label for="exampleTime" class="form-label">Giờ hẹn</label>
                                <input type="time" class="form-control" id="exampleTime"
                                name="appointtime" onChange={(event) => this.setState({appointhour : event.target.value})} />
                            </div><br/>

                            <button type="submit" className="btn btn-primary">Gửi</button>

                        </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="col-2">
        <Righthome />
      </div>
        </div>
    );
    }
}

export default AppointmentForm;