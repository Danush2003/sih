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
  ];
  return (
    <div>
      {list.map((obj, index) => (
        <div className="card card-body mt-5 mx-auto d-block w-100">
          <h1>{obj.title}</h1>
          <h2>{obj.authority}</h2>
          <button className="btn btn-warning d-flex mx-auto">Know more</button>
        </div>
      ))}
    </div>
  );
}
export default prenational;
