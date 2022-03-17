function prenational() {
  let list = [
    {
      title: "ISRO-Young Scientist Programme (YUVIKA) 2022",
      authority: "ISRO",
    },
    {
      title: "Kotak Shiksha Nidhi",
      authority: "Kotak Education Foundation",
    },
    {
      title: "CSIR Innovation Award for School Children (CIASC) 2022",
      authority: "Council of Scientific and Industrial Research",
    },
    {
      title: "NSP pre-matric scholarship scheme",
      authority: "Central Government",
    },
    {
      title: "begum hazrat mahal national scholarship",
      authority: "ministry of minority affairs,India",
    },
    {
      title: "SOF Girl Child Scholarship",
      authority: "Science Olympiad foundation",
    },
    {
      title: "Balika Samridhi Yojana (BSY)",
      authority: "Central Government",
    },
    {
      title: "ntr vidyonnathi scheme scholarship",
      authority: "Government of Andhra Pradesh",
    },
    {
      title: "Pre-Matric Scholarship - MINORITY WELFARE DEPARTMENT",
      authority: "minority welfare department,Karnataka",
    },
    {
      title: "Telangana National Means-cum-Merit Scholarship Scheme (NMMSS)",
      authority: "Government of Telangana",
    },
    {
      title: "Notice of Pre-Matric Scholarship for Minorities for FY",
      authority: "Government of Assam",
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
              <h1>{obj.title}</h1>
              <h2>{obj.authority}</h2>
              <button className="btn btn-warning d-flex mx-auto">
                Know more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default prenational;
