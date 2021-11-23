import React, { Component } from 'react';
import Righthome from '../home/righthome';
import axios from 'axios';
import Moment from 'moment';
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';


class scholarForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            scope: '',
            name: '',
            value:'',
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

        if (data.scope === '' || data.name === '' || data.value === '' ||
            data.sdate === '' || data.edate === '' ) {
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

            var postData = {
                scope: this.state.scope,
                name: this.state.name,
                value: this.state.value,
                sdate: this.state.sdate,
                edate: this.state.edate,
                staffID: '1400001'
                
            };
            axios.post('/addScholarship', postData)
                .then()
                .catch((err) => alert('failure'));

                window.location.href = 'http://localhost:3001/scholarform'
            alert('Thêm học bổng thành công')
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
                            <h3 className="panel-title">Thêm học bổng</h3>
                        </div>
                        <div className="panel-body">

                        <form onSubmit={ this.onHandleSubmit }>
                            <div className="form-group">
                                <label>Tên học bổng: </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="name" 
                                onChange= {(event) => this.setState({name : event.target.value})} 
                                />
                            </div><br/>
                            
                            <div className="form-group">
                                <label>Phạm vi: </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="scope" 
                                onChange={(event) => this.setState({scope : event.target.value})} 
                                />
                            </div><br/>
                            
                            <div className="form-group">
                                <label>Giá trị: </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="value" 
                                onChange={(event) => this.setState({value : event.target.value})} 
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

export default scholarForm;