import React, { Component } from 'react';
import "./job.css";

function JobInform(){
        return (
            <div className="page-container">
                <div className="page-content">
                    <h1>Advertising Operator</h1>
                </div>
                <div>
                  <h3>Đơn vị tuyển dụng:</h3>
                  <p>Ureka Việt Nam</p>
                </div>
                <div>
                  <h3>Yêu cầu công việc</h3>
                  <ul>
                    <li>Có tối thiểu 2 năm kinh nghiệm</li>
                    <li>Nắm rõ nghiệp vụ liên quan</li>
                  </ul>
                </div>
                <div>
                  <h3>Thông tin liên lạc</h3>
                  <ul>
                    <li><strong>Địa chỉ</strong><p>Thành phố Hồ Chí Minh</p></li>
                    <li><strong>Số điện thoại</strong><p>09845203154</p></li>

                  </ul>
                </div>
                <div>
                  <h3>Thời gian tuyển dụng</h3>
                  <p><strong>2021-09-01</strong> to <strong>2022-06-01</strong></p>
                </div>
            </div>
        );
    
}

export default JobInform;