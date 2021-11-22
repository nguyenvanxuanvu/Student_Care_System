import Righthome from "../home/righthome";
import InforCard from "../../components/inforCard";
import { useEffect, useState } from "react";
import "./news.css";
import news from "../../images/news.jpg";
import axios from "axios";
import Moment from "moment";
const News = () => {
  const [listNews, setlistNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/news").then(function (response) {
      setlistNews(response.data[0]);
    });
  }, []);

  return (
    <div class="row w-100">
      <div class="col-9">
        <div className="mainscroll pt-3 pb-3 ps-3 pe-3">
          <div class="pt-3 ps-5">
            {localStorage.getItem("language") && (<h3>Tin tức</h3>)}
            {!localStorage.getItem("language") && (<h3>News</h3>)}

            <div class="row pt-3 ps-2 pe-2">
              {listNews.map((comment, key) => {
                return (
                  <div class="col-lg-6  pt-5">
                    <InforCard
                      link={"/news/"}
                      img={news}
                      id={comment.ID}
                      name={comment.Title}
                      content={comment.Author}
                      date={Moment(comment.AddDay)
                        .utcOffset("+07:00")
                        .format("DD/MM/YYYY")}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div class="col-2">
        <Righthome />
      </div>
    </div>
  );
};

export default News;
