import React from "react";
import "./Abovehome.css";
import { NavLink } from "react-router-dom";
import { ImClock, BsCalendarCheck, RiFilePaperLine } from "react-icons/all";
import background from "../../images/background.png";
import { useAlert } from 'react-alert'
const Abovehome = () => {
  const alert = useAlert()
  return (
    <div
      class="bg_image"
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        height: "400px",
        color: "#f5f5f5",
      }}
    >
      <div class="pt-5"></div>
      <div class="pt-5"></div>
      <div class="pt-5"></div>
      <div class="pt-5"></div>
      <div class="row pt-5 ps-5 pe-5">
        <div class="col-lg-4 d-flex align-items-stretch">
          <div class="card">
            <div class="card-body">
              <ImClock class="iconabove" />
              {localStorage.getItem("language") && (<h5 class="cardtitle">Thời gian hoạt động trực tuyến</h5>)}
              {!localStorage.getItem("language") && (<h5 class="cardtitle">Online uptime</h5>)}
              {localStorage.getItem("language") && (<p class="cardoftest">
                Hệ thống đảm bảo hoạt động liên tục từ 7:00 giờ đến 21:00 giờ
                hàng ngày.
              </p>)}
              {!localStorage.getItem("language") && (<p class="cardoftest">
              The system ensures continuous operation from 7:00 a.m. to 9 p.m
                daily.
                </p>)}
            </div>
          </div>
        </div>
        <div class="col-lg-4 d-flex align-items-stretch">
          <div class="card">
            <div class="card-body">
              <BsCalendarCheck class="iconabove" />
              {localStorage.getItem("language") && (<h5 class="cardtitle">Lịch làm việc trực tiếp tại văn phòng</h5>)}
              {!localStorage.getItem("language") && (<h5 class="cardtitle">Work schedule directly at the office</h5>)}
              {!localStorage.getItem("language") && (<p class="cardoftest">
                Sun - Wed : 8:00 - 17:00 <br />
                Thu - Fri : 9:00 - 17:00 <br />
                Sat - sun : 10:00 - 16:00
              </p>)}
              {localStorage.getItem("language") && (<p class="cardoftest">
                Thứ 2 - Thứ 4 : 8:00 - 17:00 <br />
                Thứ 5 - Thứ 6 : 9:00 - 17:00 <br />
                Thứ 7 - Chủ Nhật : 10:00 - 16:00
              </p>)}
              <div class="button_center">
              {localStorage.getItem("type1") && localStorage.getItem("language") && ( <NavLink
                  to={"/appointmentform"}
                  class="btn btn-primary align-items-center"
                >
                  Đặt lịch hẹn
                </NavLink>)}
                {localStorage.getItem("type1") && !localStorage.getItem("language") && ( <NavLink
                  to={"/appointmentform"}
                  class="btn btn-primary align-items-center"
                >
                  Make an appointment
                </NavLink>)}
                {localStorage.getItem("type2") && localStorage.getItem("language") && ( <NavLink
                  to={"/appointmentlist1"}
                  class="btn btn-primary align-items-center"
                >
                  Xem lịch hẹn của sinh viên
                </NavLink>)}
                {localStorage.getItem("type2") && !localStorage.getItem("language") && ( <NavLink
                  to={"/appointmentlist1"}
                  class="btn btn-primary align-items-center"
                >
                  Student 's appointment
                </NavLink>)}

              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 d-flex align-items-stretch ">
          <div class="card">
            <div class="card-body">
              <RiFilePaperLine class="iconabove" />
              {localStorage.getItem("language") && (<h5 class="cardtitle">Phiếu đánh giá của sinh viên</h5>)}
              {!localStorage.getItem("language") && (<h5 class="cardtitle">Student evaluation sheet</h5>)}
              {localStorage.getItem("language") && (<p class="cardoftest">
                Chúng tôi luôn sẵn sàng lắng nghe mọi đóng góp từ các bạn ...
              </p>)}
              {!localStorage.getItem("language") && (<p class="cardoftest">
              We are always ready to listen to any contributions from you...
              </p>)}
              <div class="button_center">
                {/* {
              localStorage.getItem("userName") &&  <NavLink to={"/ratingform"} class="btn btn-primary align-items-center">
              Đánh giá
              </NavLink>
                }
                {
                  !localStorage.getItem("userName") && 
                } */}
                <div class="btn btn-primary align-items-center"
                  onClick={() => {
                    if(!localStorage.getItem("userName"))
                    {localStorage.getItem("language") && (alert.show('Cần đăng nhập để thực hiện đánh giá'))}
                    {!localStorage.getItem("language") && (alert.show('Need to login to make a review'))}
                  
                    
                  }}
                >
                
                   {localStorage.getItem("type1") && localStorage.getItem("language") && ("Đánh giá")}
                   {localStorage.getItem("type2") && localStorage.getItem("language") && ("Xem đánh giá của sinh viên")}

                    {!localStorage.getItem("language") && ("Evaluate")}
                 
                
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abovehome;
