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
              <h5 class="cardtitle">Thời gian hoạt động trực tuyến</h5>

              <p class="cardoftest">
                Hệ thống đảm bảo hoạt động liên tục từ 7:00 giờ đến 21:00 giờ
                hàng ngày.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 d-flex align-items-stretch">
          <div class="card">
            <div class="card-body">
              <BsCalendarCheck class="iconabove" />
              <h5 class="cardtitle">Lịch làm việc trực tiếp tại văn phòng</h5>
              <p class="cardoftest">
                Sun - Wed : 8:00 - 17:00 <br />
                Thu - Fri : 9:00 - 17:00 <br />
                Sat - sun : 10:00 - 17:00
              </p>
              <div class="button_center">
                <NavLink
                  to={"/appointmentform"}
                  class="btn btn-primary align-items-center"
                >
                  Đặt lịch hẹn
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 d-flex align-items-stretch ">
          <div class="card">
            <div class="card-body">
              <RiFilePaperLine class="iconabove" />
              <h5 class="cardtitle">Phiếu đánh giá của sinh viên</h5>
              <p class="cardoftest">
                Chúng tôi luôn sẵn sàng lắng nghe mọi đóng góp từ các bạn ...
              </p>
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
                    alert.show('Cần đăng nhập để thực hiện đánh giá')
                    
                  
                    else{
                     
                    }
                  }}
                >
                  Đánh giá
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
