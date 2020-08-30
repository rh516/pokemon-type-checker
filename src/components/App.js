import React, { useState } from "react";
import TypeForm from "./TypeForm";
import Results from "./Results";

function App() {
  const [submitted, setSubmit] = useState(false);
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");

  function handleSubmit(t1, t2) {
    setType1(t1);
    setType2(t2);
    setSubmit(true);
  }

  function handleGoBack() {
    setSubmit(false);
  }
  
  return (
    <div className="App">
      {submitted 
        ? <Results 
            type1Prop={type1}
            type2Prop={type2}
            onClick={handleGoBack}  
          />
        : <TypeForm onSubmit={handleSubmit}/>}
    </div>
  );
}

export default App;