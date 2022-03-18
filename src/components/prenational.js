function prenational() {
  let list = [
    {
      title: "ISRO-Young Scientist Programme (YUVIKA) 2022",
      authority: "ISRO",
      lin: "https://www.isro.gov.in/capacity-building/yuvika-yuva-vigyani-karyakram-young-scientist-programme",
    },
    {
      title: "Kotak Shiksha Nidhi",
      authority: "Kotak Education Foundation",
      lin: "https://www.buddy4study.com/page/kotak-shiksha-nidhi",
    },
    {
      title: "CSIR Innovation Award for School Children (CIASC) 2022",
      authority: "Council of Scientific and Industrial Research",
      lin: "https://www.csir.res.in/csir-innovation-award-school-children-2022-ciasc-2022-last-date-30th-april-2022",
    },
    {
      title: "NSP pre-matric scholarship scheme",
      authority: "Central Government",
      lin: "https://www.isro.gov.in/capacity-building/yuvika-yuva-vigyani-karyakram-young-scientist-programme",
    },
    {
      title: "Begum Hazrat Mahal National Scholarship",
      authority: "Ministry of minority affairs,India",
      lin: "https://www.isro.gov.in/capacity-building/yuvika-yuva-vigyani-karyakram-young-scientist-programme",
    },
    {
      title: "SOF Girl Child Scholarship",
      authority: "Science Olympiad foundation",
      lin: "https://www.isro.gov.in/capacity-building/yuvika-yuva-vigyani-karyakram-young-scientist-programme",
    },
    {
      title: "Balika Samridhi Yojana (BSY)",
      authority: "Central Government",
      lin: "https://www.isro.gov.in/capacity-building/yuvika-yuva-vigyani-karyakram-young-scientist-programme",
    },
    {
      title: "NTR vidyonnathi scheme scholarship",
      authority: "Government of Andhra Pradesh",
      lin: "https://www.isro.gov.in/capacity-building/yuvika-yuva-vigyani-karyakram-young-scientist-programme",
    },
    {
      title: "Pre-Matric Scholarship - MINORITY WELFARE DEPARTMENT",
      authority: "Minority welfare department,Karnataka",
      lin: "https://www.isro.gov.in/capacity-building/yuvika-yuva-vigyani-karyakram-young-scientist-programme",
    },
    {
      title: "Telangana National Means-cum-Merit Scholarship Scheme (NMMSS)",
      authority: "Government of Telangana",
      lin: "https://www.isro.gov.in/capacity-building/yuvika-yuva-vigyani-karyakram-young-scientist-programme",
    },
    {
      title: "Notice of Pre-Matric Scholarship for Minorities for FY",
      authority: "Government of Assam",
      lin: "https://www.isro.gov.in/capacity-building/yuvika-yuva-vigyani-karyakram-young-scientist-programme",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className=" filter col-sm-3">
          <h1>Filters:</h1>
          <hr />

          <h2>Annual Income:</h2>
          <input
            className="mt-2"
            type="radio"
            name="income"
            id="below 2"
          ></input>
          <label className="mt-2" htmlFor="below 2">
            Less than 2 lakhs
          </label>
          <br />
          <input
            className="mt-2"
            type="radio"
            name="income"
            id="2 to 5"
          ></input>
          <label className="mt-2" htmlFor="2 to 5">
            between 2 lakhs and 5 lakhs
          </label>
          <br></br>
          <input
            className="mt-2"
            type="radio"
            name="income"
            id="greater than 5"
          ></input>
          <label className="mt-2" htmlFor="greater than 5">
            greater than 5 lakhs
          </label>
          <hr />
          <input type="checkbox" id="pd"></input>
          <label className="m-2" htmlFor="pd">
            {" "}
            Physically Disabled
          </label>
          <hr />
          <h2>Caste</h2>
          <input className="m-2" name="caste" type="radio" id="bc"></input>
          <label htmlFor="bc"> OBC</label>
          <input className="m-2" name="caste" type="radio" id="scst"></input>
          <label htmlFor="scst"> SC/ST</label>
          <input className="m-2" name="caste" type="radio" id="others"></input>
          <label htmlFor="others"> Other</label>
          <hr />
          <h2>Gender</h2>
          <input className="m-2" name="gender" type="radio" id="male"></input>
          <label htmlFor="male"> Male</label>
          <input className="m-2" name="gender" type="radio" id="female"></input>
          <label htmlFor="female"> Female</label>
          <input className="m-2" name="gender" type="radio" id="others"></input>
          <label htmlFor="others"> Others</label>
          <hr />
          <h2>Type</h2>
          <input className="m-2" type="checkbox" id="male"></input>
          <label htmlFor="male"> Government</label>
          <input className="m-2" type="checkbox" id="female"></input>
          <label htmlFor="female"> Private</label>
        </div>
        <div className="col-sm-9">
          {list.map((obj, index) => (
            <div className="card card-body mt-5 mx-auto d-block w-100">
              <h2>{obj.title}</h2>
              <h4>{obj.authority}</h4>
              <button className="btn btn-warning d-flex mx-auto">
                <a
                  style={{ textDecoration: "none" }}
                  href={obj.lin}
                  target="_blank"
                >
                  Know More
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default prenational;
