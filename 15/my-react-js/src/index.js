import React from "react";
import ReactDOM from "react-dom";

const signs = ["овен","терези","рак","риби","стрілець","козеріг","близнюки"];
//компонента з великої букви
const Show = () => {
  return (
    <ul>
      {
        signs.map((sign, i) => {
          return (<li key={i}>{sign}</li>); //key - унікальний індекс
        })
      }
    </ul>
    
  )
}
ReactDOM.render(<Show/>, document.querySelector("#root"))