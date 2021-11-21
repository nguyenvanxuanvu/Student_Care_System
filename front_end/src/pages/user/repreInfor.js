import Righthome from "../home/righthome";
import "./user.css";

const repreInfo = () => {
  return (
    <div className="row w-100">
    
      <div className="col-9 instruct ps-5 pb-5">
        
        <div className="pt-5 ps-5 pe-5 pb-5">
        <h3 className="pt-3">THÔNG TIN NGƯỜI ĐẠI DIỆN CỦA SINH VIÊN</h3>
        <div class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Họ và tên:
                    <p>Nguyễn Văn Bình</p>
                </li>
                <li class="list-group-item">Số điện thoại:
                    <p>090909098</p>
                </li>
            </ul>
        </div>
        
      </div>
      </div>

      <div className="col-3">
        <Righthome />
      </div>
    </div>
   
  );
};

export default repreInfo;
