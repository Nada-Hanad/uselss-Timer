import "./App.css";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="thisS">
        <div>
          <h1>Hey you,</h1>
          <h2>
            It is {this.state.date.toLocaleTimeString()}, and you still got 3
            chapitres of Analyse without mentioning others.
          </h2>
        </div>
      </div>
    );
  }
}
// class App extends React.Component {
//   state = {
//     nom: "",
//     age: "",
//     profession: "",
//   };

//   onChng = (event, prop) => {
//     this.setState({
//       [prop]: event.target.value,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <input type="text" onChange={(e) => this.onChng(e, "nom")} />
//         <br />
//         <input type="number" onChange={(e) => this.onChng(e, "age")} />
//         <br />
//         <input type="text" onChange={(e) => this.onChng(e, "profession")} />
//         <br />
//         <h1>{this.state.nom}</h1>
//         <br />
//         <h1>{this.state.age}</h1>
//         <br />
//         <h1>{this.state.profession}</h1>
//         <br />
//         <button
//           onClick={() => {
//             alert(
//               `nom : ${this.state.nom} - age : ${this.state.age} - profession :${this.state.profession}`
//             );
//           }}
//         >
//           Submit
//         </button>
//       </div>
//     );
//   }
// }
export default App;
