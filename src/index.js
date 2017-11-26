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
    Ownership: [],
    Years_Of_Experience: [],
    Degree_Of_Responsibility: [],
    Nature_Of_Work: [
      { Sales: {} },
      { Operations: {} },
      { Finance: {} },
      { HR_Admin: {} },
      { ICT: {} }
    ],
    Gross_Pay_Of_Subordinate: [],
    AdHoc_Task: [],
    Bonus: [],
    TotalPR: 0,
    Totalvalues: [{ pf: 0 }, { ownership: 0 }]
  };

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
      Totalvalues
    } = this.state;

    return (
      <div style={styles}>
        <Hello name="Pay Calculator 📱" />
        <h1> Your Recommended Pay is &#8358; {TotalPR} </h1>
        <h2> Performane Review </h2>

        {Performance_Review.map((metric, i) => (
          <div class="inputGroup" key={i}>
            <input
              id={Object.keys(metric)}
              name="Performance_Review"
              type="radio"
              value={Object.values(metric)}
              onClick={metic => {
                this.setState({ TotalPR: Object.values(metric) });
              }}
            />
            <label htmlFor={Object.keys(metric)}>{Object.keys(metric)}</label>
          </div>
        ))}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
