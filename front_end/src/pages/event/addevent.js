import React, { Component } from 'react';
import Righthome from '../home/righthome';
import axios from 'axios';
import Moment from 'moment';
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';


class eventForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            type: '',
            eventname: '',
            organizer:'',
            place: '',
            participantmaxnum:'',
            sdate:'',
            edate:''
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

        if (data.type === '' || data.eventname === '' || data.organizer === '' ||
            data.place === '' || data.participantmaxnum === '' || data.sdate === '' || data.edate === '') {
            return false;
        }
        return true;
    }
    isValidDate = () => {
        var data = this.state;
        var sd = new Date(data.sdate);
        var ed = new Date(data.edate);
        if(sd > ed ){ return false; }
        return true;
    }
    onHandleSubmit(event){
        if(!this.isValidDate()){
            alert('Ngày bắt đầu phải nhỏ hơn ngày kết thúc')
        }
        else{
            if (this.validateForm()) {
                console.log('successful');
                if(!this.isValidDate()){
                    alert('Ngày bắt đầu phải nhỏ hơn ngày kết thúc')
                }
                    var postData = {
                        type: this.state.type,
                        eventname: this.state.eventname,
                        organizer: this.state.organizer,
                        place: this.state.place,
                        participantmaxnum: this.state.participantmaxnum,
                        stime: this.state.sdate,
                        etime: this.state.edate,
                        caringStaffID: 'NV10983'
                        
                    };
                    axios.post('/addEvent', postData)
                        .then()
                        .catch((err) => alert('failure'));
        
                        window.location.href = 'http://localhost:3001/eventform'
                    alert('Thêm sự kiện thành công')
            }
            else {
                alert('Cần điền đầy đủ thông tin!');
            }
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
                            <h3 className="panel-title">Thêm sự kiện</h3>
                        </div>
                        <div className="panel-body">

                        <form onSubmit={ this.onHandleSubmit }>
                            <div>
                            <label>Loại sự kiện: </label>
                            <select className="form-select" aria-label="Default select example"
                                name="type"
                                onChange={(event) => this.setState({type : event.target.value})} 
                            >
                                <option value="Hội thảo" selected>Hội thảo</option>
                                <option value="Ngoại khóa">Ngoại khóa</option>
                                <option value="Học thuật">Học thuật</option>
                                </select>
                            </div> <br/>
                            <div className="form-group">
                                <label>Tên sự kiện: </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="eventname" 
                                onChange= {(event) => this.setState({eventname : event.target.value})} 
                                />
                            </div><br/>
                            
                            <div className="form-group">
                                <label>Người tổ chức: </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="organizer" 
                                onChange={(event) => this.setState({organizer : event.target.value})} 
                                />
                            </div><br/>
                            
                            <div className="form-group">
                                <label>Địa điểm: </label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    name="place"
                                    onChange={(event) => this.setState({place : event.target.value})} 
                                ></textarea>
                            </div><br/>
                            
                            <div className="form-group">
                                <label>Số lượng tối đa: </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="participantmaxnum" 
                                onChange={(event) => this.setState({participantmaxnum : event.target.value})} 
                                />
                            </div><br/>
                            <div className="form-group">
                                <label for="exampleDate" class="form-label">Ngày bắt đầu</label>
                                <input type="date" class="form-control" id="sdate"
                                name="appointdate" onChange={(event) => this.setState({sdate : event.target.value})} />
                            </div><br/>
                            <div className="form-group">
                                <label for="exampleDate" class="form-label">Ngày kết thúc</label>
                                <input type="date" class="form-control" id="edate"
                                name="appointdate" onChange={(event) => this.setState({edate : event.target.value})} />
                            </div><br/>

                            <button type="submit" className="btn btn-primary">Thêm</button>

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

export default eventForm;