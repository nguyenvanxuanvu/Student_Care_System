import React, { Component } from 'react';
import './event.css' 
const EventForm = () => {
    return(
        <div class="container addevent">
    <div class="col-8 pt-5 ps-5">
 
        

    <div class="container">
        <h3 align-items-center>Sự kiện mới</h3>
        <div class="col-10 pt-3">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" value="" placeholder=""/>
                <label for="floatingInput">EventID</label>
            </div>
        </div>
        <div class="col-10">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" value="" placeholder=""/>
                <label for="floatingInput">Type</label>
            </div>
        </div>
        <div class="col-10">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" value="" placeholder=""/>
                <label for="floatingInput">EventName</label>
            </div>
        </div>
        <div class="col-10">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" value="" placeholder=""/>
                <label for="floatingInput">Organizer</label>
            </div>
        </div>
        <div class="col-10">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" value="" placeholder=""/>
                <label for="floatingInput">Place</label>
            </div>
        </div>
        <div class="col-10">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" value="" placeholder=""/>
                <label for="floatingInput">ParticipantMaxNum</label>
            </div>
        </div>
        <div class="row g-2">
                <div class="col-5">
                    <div class="form-floating mb-3">
                        <legend>SDate</legend>
                        <div class="col-md">
                            <label for="exampleDate" class="form-label">Ngày</label>
                            <input type="date" class="form-control" id="exampleDate" />
                        </div>
                        <div class="col-md">
                            <label for="exampleTime" class="form-label">Giờ</label>
                            <input type="time" class="form-control" id="exampleTime" />
                        </div>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-floating mb-3">
                        <legend>EDate</legend>
                        <div class="col-md">
                            <label for="exampleDate" class="form-label">Ngày</label>
                            <input type="date" class="form-control" id="exampleDate" />
                        </div>
                        <div class="col-md">
                            <label for="exampleTime" class="form-label">Giờ</label>
                            <input type="time" class="form-control" id="exampleTime" />
                        </div>
                    </div>
                </div>
            </div>
        <div class="col-10">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" value="" placeholder=""/>
                <label for="floatingInput">CaringstaffID</label>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </div>
    </div>
    

    )
    }
export default EventForm;