import Righthome from "../home/righthome";

import "./instruction.css";

const Instruction = () => {
  return (
    <div class="row w-100">
      {localStorage.getItem("language") && (<div class="col-9 instruct ps-5 pb-5">
        <div class="backgr pt-5 ps-5 pe-5 pb-5">
          <h1 style={{ color: "rgba(0, 153, 195, 1)" }}>VỀ CHÚNG TÔI</h1>
          <h3 class="pt-3">HỆ THỐNG CHĂM SÓC SINH VIÊN</h3>
          <h3> CỦA HỆ THỐNG GIÁO DỤC TRỰC TUYẾN.</h3>
          <p class="pt-3">
            Hệ thống giáo dục trực tuyến là một nền tảng cung cấp môi trường học
            tập cho sinh viên. Bên cạnh đội ngũ giảng viên hùng hậu và các bài
            giảng chất lượng, nền tảng này còn xây dựng một Hệ thống chăm sóc
            sinh viên nhằm đảo bảo đáp ứng sự hài lòng của người học.
          </p>
          <p class="pt-3">
            Hệ thống đặt đối tượng người học ở vị trí khách hàng, nhằm tập trung
            nguồn lực phục vụ cho việc chăm sóc và hỗ trợ người học, đảm bảo tạo
            điều kiện tốt nhất cho họ trong việc học tập, sinh hoạt và nghiên
            cứu.
          </p>
          <p class="pt-3">
            Hệ thống chăm sóc sinh viên là nơi cung cấp, đáp ứng mọi nhu cầu
            thông tin cho người học. Bên cạnh việc hỗ trợ trực tiếp tại văn
            phòng cũng như các nền tảng online hỗ trợ trực tuyến cho người học
            mọi lúc mọi nơi, hệ thống còn có tổng đài hotline giúp kết nối và hỗ
            trợ người học một cách thuận tiện nhất. Toàn bộ dữ liệu và thông tin
            người học được tích hợp trong hệ thống giúp việc hỗ trợ thông tin
            cho người học được nhanh chóng, chính xác và tin cậy.
          </p>
          <p class="pt-3">Chúng tôi luôn ở đây khi các bạn cần!</p>
        </div>
      </div>)}


      {!localStorage.getItem("language") && (<div class="col-9 instruct ps-5 pb-5">
        <div class="backgr pt-5 ps-5 pe-5 pb-5">
          <h1 style={{ color: "rgba(0, 153, 195, 1)" }}>ABOUT US</h1>
          <h3 class="pt-3">STUDENT CARING SYSTEM</h3>
          <h3> OF ONLINE EDUCATION SYSTEM.</h3>
          <p class="pt-3">
          An online education system is a platform that provides a learning environment
            practice for students. In addition to a strong team of lecturers and lessons
            quality teaching, this platform also builds a System of Care
            students to ensure student satisfaction.
          </p>
          <p class="pt-3">
          The system places the learner object in the customer's position, in order to focus
            resources for the care and support of learners, ensuring
            the best conditions for them to study, live and research
            rescue.
          </p>
          <p class="pt-3">
          The student care system is a place to provide and meet all needs
            information for learners. In addition to direct support at the office,
            rooms as well as online support platforms for learners
            Anytime, anywhere, the system also has a hotline to help connect and support
            help learners in the most convenient way. All data and information
            Learners are integrated in the information support system
            for learners to learn quickly, accurately and reliably.
          </p>
          <p class="pt-3">We are always here when you need us!</p>
        </div>
      </div>)}

      <div class="col-3">
        <Righthome />
      </div>
    </div>
  );
};

export default Instruction;
