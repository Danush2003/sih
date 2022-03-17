import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div className="container-fluid mb-3">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="600px"
            src="https://www.aspireabroadstudies.com/protected/images/news/1632483109gQkNiVR2FqucyfdScNsgkgpSlz1NXLmvlXVajXAlX1YWWhSxXrdGfnCHkasWAlOstjgIG5m0+RCrxFwwslCWQ5o18+QNuervXjLg39GeOpksQpqV0cL9VAML72l+VLx3P_7wuX5YT30z8W2USWFm9f5I2QEFoU134W7fg812I2pXBJvRrepUSFT_Q0Z1jLT2gfeTzVztDIMvin67v.jfif"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="600px"
            src="https://4f7fdkogwz-flywheel.netdna-ssl.com/sammamish/wp-content/uploads/sites/7/2020/05/GraduationHatsThrownIntoTheAir-1400x891-1.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="600px"
            src="https://wie.ieee.org/wp-content/uploads/2018/02/SCHOLARSHIPS.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="600px"
            src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/28/2018/02/study-abroad.png"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
      <br></br>
      <div
        className="card-deck"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        <div className="card shadow" style={{ background: "#00B4D8" }}>
          <img
            className="card-img-top h-100"
            src="https://media.istockphoto.com/photos/beginning-of-the-school-year-picture-id1332377327?b=1&k=20&m=1332377327&s=170667a&w=0&h=C3YC_aGm0nWSyjY-Ib8tRhNwGPgeYPejS08B4C2lNGI="
            alt="Card image cap"
          />
          <div className="card-body">
            <h5
              className="card-title mb-3"
              style={{ fontFamily: "serif", fontSize: "30px" }}
            >
              Pre-Metric Scholarships
            </h5>
            <button
              className="btn d-block mx-auto text-light"
              style={{ borderRadius: "10%", background: "#04293A" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/1086/1086933.png"
                style={{ width: "20px", marginRight: "2px" }}
              ></img>
              Search
            </button>
          </div>
        </div>
        <div className="card shadow" style={{ background: "#00B4D8" }}>
          <img
            className="card-img-top"
            src="https://img.freepik.com/free-photo/medium-shot-graduate-student_23-2148950577.jpg?size=626&ext=jpg&ga=GA1.2.1286316067.1637683552"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5
              className="card-title mb-3"
              style={{ fontFamily: "serif", fontSize: "30px" }}
            >
              Post-Metric Scholarships
            </h5>
            <button
              className="btn d-block mx-auto text-light"
              style={{ borderRadius: "10%", background: "#04293A" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/1086/1086933.png"
                style={{ width: "20px", marginRight: "2px" }}
              ></img>
              Search
            </button>
          </div>
        </div>
        <div className="card shadow" style={{ background: "#00B4D8" }}>
          <img
            className="card-img-top "
            src="https://img.freepik.com/free-photo/congratulatory-conferment-award-diploma-with-graduates-university_43157-2039.jpg?size=626&ext=jpg&ga=GA1.2.1286316067.1637683552"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5
              className="card-title mb-3"
              style={{ fontFamily: "serif", fontSize: "30px" }}
            >
              Masters/PG Scholarships
            </h5>
            <button
              className="btn d-block mx-auto text-light"
              style={{ borderRadius: "10%", backgroundColor: "#04293A" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/1086/1086933.png"
                style={{ width: "20px", marginRight: "2px" }}
              ></img>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
