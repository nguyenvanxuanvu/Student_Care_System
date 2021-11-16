import React, { Component } from 'react';
import "./Form.css";

class AppointmentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            userid: '',
            problem:'',
            appointdate: '',
            appointhour: 0
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }
    onHandleChange(event){
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }
    onHandleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }
    render(){
    return (
        <div className="container mt-30">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Phiếu đặt lịch hẹn tư vấn</h3>
                        </div>
                        <div className="panel-body">

                        <form onSubmit={ this.onHandleSubmit }>
                            <div className="form-group">
                                <label>Họ tên: </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="username" 
                                onChange={ this.onHandleChange }
                                />
                            </div><br/>
                            
                            <div className="form-group">
                                <label>MSSV: </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="userid" 
                                onChange={ this.onHandleChange }
                                />
                            </div><br/>
                            
                            <div className="form-group">
                                <label>Vấn đề cần tư vấn: </label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    name="problem"
                                    onChange={ this.onHandleChange }
                                ></textarea>
                            </div><br/>
                            <div className="form-group">
                                <label for="exampleDate" class="form-label">Ngày hẹn</label>
                                <input type="date" class="form-control" id="exampleDate"
                                name="appointdate" onChange={this.onHandleChange}/>
                            </div><br/>
                            <div className="form-group">
                                <label class="form-label">Giờ hẹn</label>
                                <input type="time" class="form-control" id="exampleTime"
                                 name="appointhour" onChange={this.onHandleChange}/>
                            </div><br/>

                            <button type="submit" className="btn btn-primary">Gửi</button>

                        </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default AppointmentForm;