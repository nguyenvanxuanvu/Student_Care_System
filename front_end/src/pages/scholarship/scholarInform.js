import React, { Component } from 'react';
import '../Inform.css';

function ScholarInform(){
        return (
            <div className="page-container">
                <div className="page-content">
                    <h1>Học bổng doanh nghiệp Fujikura</h1>
                </div>
                <div>
                  <h3>Đối tượng:</h3>
                  <p>Sinh viên khối ngành kỹ thuật</p>
                </div>
                <div>
                  <h3>Trị giá</h3>
                    <p>10 000 000VND</p>
                </div>
                <div>
                  <h3>Thời gian dự tuyển</h3>
                  <p><strong>2021-09-01</strong> to <strong>2022-06-01</strong></p>
                </div>

            </div>
        );
    
}

export default ScholarInform;