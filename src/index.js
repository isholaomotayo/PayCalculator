import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./index.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  state = {
    Performance_Review: [
      { None: 0 },
      { Average: 5000 },
      { Strong: 10000 },
      { "Very Strong": 15000 },
      { Exceptional: 20000 }
    ],
    Ownership: [
      { None: 0 },
      { Low: 5000 },
      { Medium: 10000 },
      { High: 15000 },
      { Exceptional: 20000 }
    ],
    Years_Of_Experience: this.range(0, 185000, 5000),
    Degree_Of_Responsibility: [
      { Learning: 15000 },
      { Applying: 50000 },
      { Guiding: 85000 },
      { Expert: 135000 }
    ],
    Nature_Of_Work: [
      {
        Sales: [
          { None: 0 },
          { Beginner: 10000 },
          { Intermediate: 20000 },
          { Proficient: 30000 },
          { Advanced: 40000 },
          { Expert: 50000 }
        ]
      },
      {
        Operations: [
          { None: 0 },
          { Beginner: 5000 },
          { Intermediate: 10000 },
          { Proficient: 15000 },
          { Advanced: 20000 },
          { Expert: 25000 }
        ]
      },
      {
        Finance: [
          { None: 0 },
          { Beginner: 10000 },
          { Intermediate: 15000 },
          { Proficient: 20000 },
          { Advanced: 25000 },
          { Expert: 30000 }
        ]
      },
      {
        HR_Admin: [
          { None: 0 },
          { Beginner: 10000 },
          { Intermediate: 15000 },
          { Proficient: 20000 },
          { Advanced: 25000 },
          { Expert: 30000 }
        ]
      },
      {
        ICT: [
          { None: 0 },
          { Beginner: 10000 },
          { Intermediate: 25000 },
          { Proficient: 40000 },
          { Advanced: 55000 },
          { Expert: 70000 }
        ]
      }
    ],
    Gross_Pay_Of_Subordinate: "",
    AdHoc_Task: [
      { Tactical: 30000 },
      { Operational: 50000 },
      { Strategic: 100000 }
    ],
    Bonus: "",
    TotalPR: 0,
    TotalOwnership: 0,
    YOEValue: 0,
    ADHocValue: 0,
    DoRValue: 0,
    Sales: 0,
    Finance: 0,
    HR_Admin: 0,
    ICT: 0,
    Ops: 0
  };


  handleChangeGross = (event) => this.setState({ Gross_Pay_Of_Subordinate: event.target.value })
  handleChangeBonus= (event )=>this.setState({ Bonus: event.target.value})

  range(start, stop, step) {
    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(i);
    }
    return result;
  }

  render() {
    const {
      Performance_Review,
      Ownership,
      Years_Of_Experience,
      Degree_Of_Responsibility,
      Nature_Of_Work,
      Gross_Pay_Of_Subordinate,
      AdHoc_Task,
      Bonus,
      TotalPR,
      TotalOwnership,
      YOEValue,
      ADHocValue,
      DoRValue,
      Sales,
      Finance,
      HR_Admin,
      ICT,
      Ops
    } = this.state;


    let Total = parseFloat(TotalPR) +
      parseFloat(TotalOwnership) +
      parseFloat(YOEValue) +
      parseFloat(ADHocValue) +
      parseFloat(DoRValue) +
      parseFloat(Sales) +
      parseFloat(Finance) +
      parseFloat(HR_Admin) +
      parseFloat(ICT) +
      parseFloat(Bonus*1) +
      parseFloat(Gross_Pay_Of_Subordinate*0.25) +
      parseFloat(Ops)

    return (
      <div style={styles}>
        <Hello name="Pay Calculator 📱" />
        <div className="result">
        <h1> Your Recommended Pay is </h1>
        <h2 >          
          &#8358; {Total}
        </h2>
        </div>

        <div className="metric">
          <div className="content-box">
            <div style={{ display: "inline-block", width: "100%", marginTop:"15px" }}>
            <h2> Performance Review </h2>

            {Performance_Review.map((metric, i) => (
              <div className="inputGroup" key={i}>
                <input
                  id={Object.keys(metric)}
                  name="Performance_Review"
                  type="radio"
                  value={Object.values(metric)}
                  onClick={metic => {
                    this.setState({ TotalPR: Object.values(metric) });
                  }}
                />
                <label htmlFor={Object.keys(metric)}>
                  {Object.keys(metric)}
                </label>
                
              </div>
            ))}
            
          </div>
          </div>

          <div className="content-box">
            <div style={{ display: "inline-block", width: "100%" }}>
            <h2> Ownership </h2>

            {Ownership.map((metric, i) => (
              <div className="inputGroup" key={i}>
                <input
                  id={Object.keys(metric) + "ownership"}
                  name="Ownership"
                  type="radio"
                  value={Object.values(metric)}
                  onClick={metic => {
                    this.setState({ TotalOwnership: Object.values(metric) });
                  }}
                />
                <label htmlFor={Object.keys(metric) + "ownership"}>
                  {Object.keys(metric)}
                </label>
              </div>
            ))}
          </div>
          </div >
        </div>

        <div>
          <h2> Years of experience </h2>
          <div id="yoe">
            {Years_Of_Experience.map((metric, i) => (
              <div className="inputGroup noBg" key={i}>
                <input
                  id={metric + "yoe"}
                  name="Years_Of_Experience"
                  type="radio"
                  value={metric}
                  onClick={metic => {
                    this.setState({ YOEValue: metric });
                  }}
                />
                <label htmlFor={metric + "yoe"}>{i}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="metric" style={{ marginTop: "20px" }}>
          <div className="content-box">
            <div style={{ display: "inline-block", width: "100%", marginTop: "15px" }}>
            <h2> Degree Of Responsibility </h2>

            {Degree_Of_Responsibility.map((metric, i) => (
              <div className="inputGroup" key={i}>
                <input
                  id={Object.keys(metric)}
                  name="DoR"
                  type="radio"
                  value={Object.values(metric)}
                  onClick={metic => {
                    this.setState({ DoRValue: Object.values(metric) });
                  }}
                />
                <label htmlFor={Object.keys(metric)}>
                  {Object.keys(metric)}
                </label>
              </div>
            ))}
          </div>
          </div>
         

          <div className="content-box">
            <div style={{ display: "inline-block", width: "100%" }}>
            <h2> Ad hoc Tasks </h2>

            {AdHoc_Task.map((metric, i) => (
              <div className="inputGroup" key={i}>
                <input
                  id={Object.values(metric) + "adhoc"}
                  name="ADhoc"
                  type="radio"
                  value={Object.values(metric)}
                  onClick={metic => {
                    this.setState({ ADHocValue: Object.values(metric) });
                  }}
                />
                <label htmlFor={Object.values(metric) + "adhoc"}>
                  {Object.keys(metric)}
                </label>
              </div>
            ))}
            
            </div>
          </div>
        </div>

        {/*States not yet set*/}

        <br />
        <h2> Nature of work </h2>
        <div className="metric" style={{ marginTop: "40px" }}>
          <div className="content-box">
            <div style={{ display: "inline-block", width: "100%", marginTop:"18px" }}>
              <h2> Sales </h2>
              {Nature_Of_Work[0]["Sales"].map((metric, i) => (
                <div className="inputGroup" key={i}>
                  <input
                    id={Object.values(metric) + "Sales"}
                    name="Sales"
                    type="radio"
                    value={Object.values(metric)}
                    onClick={metic => {
                      this.setState({ Sales: Object.values(metric) });
                    }}
                  />
                  <label htmlFor={Object.values(metric) + "Sales"}>
                    {Object.keys(metric)}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <br />

          <div className="content-box">
            <div style={{ display: "inline-block", width: "100%" }}>
              <h2> Operations </h2>
              {Nature_Of_Work[1]["Operations"].map((metric, i) => (
                <div className="inputGroup" key={i}>
                  <input
                    id={Object.values(metric) + "Operations"}
                    name="Operations"
                    type="radio"
                    value={Object.values(metric)}
                    onClick={metic => {
                      this.setState({ Ops: Object.values(metric) });
                    }}
                  />
                  <label htmlFor={Object.values(metric) + "Operations"}>
                    {Object.keys(metric)}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <br />

          <div className="content-box">
            <div style={{ display: "inline-block", width: "100%" }}>
              <h2> Finance </h2>
              {Nature_Of_Work[2]["Finance"].map((metric, i) => (
                <div className="inputGroup" key={i}>
                  <input
                    id={Object.values(metric) + "Finance"}
                    name="Finance"
                    type="radio"
                    value={Object.values(metric)}
                    onClick={metic => {
                      this.setState({ ADHocValue: Object.values(metric) });
                    }}
                  />
                  <label htmlFor={Object.values(metric) + "Finance"}>
                    {Object.keys(metric)}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <br />

          <div className="content-box">
            <div style={{ display: "inline-block", width: "100%" }}>
              <h2> HR/Admin </h2>
              {Nature_Of_Work[3]["HR_Admin"].map((metric, i) => (
                <div className="inputGroup" key={i}>
                  <input
                    id={Object.values(metric) + "HR_Admin"}
                    name="HR_Admin"
                    type="radio"
                    value={Object.values(metric)}
                    onClick={metic => {
                      this.setState({ HR_Admin: Object.values(metric) });
                    }}
                  />
                  <label htmlFor={Object.values(metric) + "HR_Admin"}>
                    {Object.keys(metric)}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <br />

          <div className="content-box">
            <div>
              <h2> ICT </h2>
              {Nature_Of_Work[4]["ICT"].map((metric, i) => (
                <div className="inputGroup" key={i}>
                  <input
                    id={Object.values(metric) + "ICT"}
                    name="ICT"
                    type="radio"
                    value={Object.values(metric)}
                    onClick={metic => {
                      this.setState({ ICT: Object.values(metric) });
                    }}
                  />
                  <label htmlFor={Object.values(metric) + "ICT"}>
                    {Object.keys(metric)}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <br />
        </div>

        <br />
        <div className="form-group">
          <input type="text"  value={Gross_Pay_Of_Subordinate} onChange={this.handleChangeGross}  required="required" />
          <label className="control-label" htmlFor="input">Gross Pay Of Subordinate</label><i className="bar"></i>
        </div>

        <div className="form-group" >
          <input type="text" required="required" value={Bonus} onChange={ this.handleChangeBonus} />
          <label className="control-label" htmlFor="input">Bonus</label><i className="bar"></i>
        </div>
        </div>
    );
  }
}

render(<App />, document.getElementById("root"));
