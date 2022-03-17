function preintern() {
  let list = [
    {
      title: "Eiffel Excellence Scholarship Programme",
      authority: "France",
    },
    {
      title: "Chevening Scholarships",
      authority: "UK",
    },
    {
      title: "Endeavour Postgraduate Awards",
      authority: "Australia",
    },
    {
      title: "British Council Great Scholarships",
      authority: "UK",
    },
    {
      title: "Cornell University Tata Scholarship",
      authority: "USA",
    },
    {
      title: "Ontario Trillium Scholarship",
      authority: "Canada",
    },
    {
      title: "University of Texas Scholarship for male students",
      authority: "USA",
    },
    {
      title: "Iowa State University scholarship for male students",
      authority: "USA",
    },
    {
      title: "American association of university women scholarship",
      authority: "USA",
    },
    {
      title: "Schlumberger Foundation scholarship for women",
      authority: "France",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className=" filter col-sm-3">
          <h1>Filters:</h1>
          <hr />
          <h2>Exams:</h2>
          <input className="mt-2" type="checkbox" id="sat"></input>
          <label className=" m-2" htmlFor="sat">
            SAT
          </label>
          <br />
          <input className="mt-2" type="checkbox" id="sat"></input>
          <label className=" m-2" htmlFor="sat">
            GRE
          </label>
          <br />
          <input className="mt-2" type="checkbox" id="sat"></input>
          <label className=" m-2" htmlFor="sat">
            GMAT
          </label>
          <br />
          <input className="mt-2" type="checkbox" id="sat"></input>
          <label className=" m-2" htmlFor="sat">
            IELTS
          </label>
          <br />
          <input className="mt-2" type="checkbox" id="sat"></input>
          <label className=" m-2" htmlFor="sat">
            TOEFL
          </label>
          <hr />
          <h2>Categories</h2>
          <input className="mt-2" type="checkbox" id="sat"></input>
          <label className="mt-2 m-2" htmlFor="sat">
            Academic
          </label>
          <br />
          <input className="mt-2" type="checkbox" id="sat"></input>
          <label className="mt-2 m-2" htmlFor="sat">
            Arts
          </label>
          <br />
          <input className="mt-2" type="checkbox" id="sat"></input>
          <label className="mt-2 m-2" htmlFor="sat">
            Sports
          </label>
          <br />
          <input className="mt-2" type="checkbox" id="sat"></input>
          <label className="mt-2 m-2" htmlFor="sat">
            Social services
          </label>
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
