import {
  useState
  // useEffect
} from "react";
import "./jsoc.scss";

// const demoData = [
//   {
//     name: "sudhanshu",
//     age: 25,
//     DOB: "14/09/1997"
//   },
//   {
//     name: "Harry",
//     age: 30,
//     DOB: "15/19/1992"
//   }
// ];

const Jsontocsv = () => {
  const [jsonData, setJsonData] = useState("");

  const changeJsonData = (e) => {
    console.log("e.target-->", e.target);
    setJsonData(e.target.value);
  };

  console.log("jsonData --> ", jsonData);
  //const data = JSON.stringify(jsonData);

  //console.log('data -->',data)
  if (jsonData !== "") {
    try {
      const realJSON = JSON.parse(jsonData.toString());
      console.log("realJSON -->", realJSON);
    } catch (err) {
      console.log("error --> ", err);
    }
  }

  return (
    <>
      <div className="header">
        <h2>Json To CSV Conversion</h2>
        <button className="btn">Convert</button>
        <button className="btn">Download</button>
      </div>
      <div className="jsontocsv">
        <div className="jsonbody">
          <textarea
            value={jsonData}
            onChange={changeJsonData}
            name="writejson"
            id=""
            placeholder="Write Your JSON Here..."
          ></textarea>
        </div>
        <div className="csvbody">
          <div className="title">CSV Output</div>
          <div>{/* <Table data="data" /> */}</div>
        </div>
      </div>
    </>
  );
};

export default Jsontocsv;
