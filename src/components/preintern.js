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
  ];
  return (
    <div className="container">
      {list.map((obj, index) => (
        <div className="card w-100 mx-auto mt-5 card-body">
          <h1>{obj.title}</h1>
          <h2>{obj.authority}</h2>
          <button className="btn btn-warning d-flex mx-auto">Know more</button>
        </div>
      ))}
    </div>
  );
}
export default preintern;
