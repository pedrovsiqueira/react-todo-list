import React from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <input type="checkbox" name="paragraph1" id="pg1" />
      <label htmlFor="paragraph1">This is my first paragraph checkbox</label>
      <br></br>
      <input type="checkbox" name="paragraph2" id="pg2" />
      <label htmlFor="paragraph2">This is my second paragraph checkbox</label>
      <br></br>
      <input type="checkbox" name="paragraph3" id="pg3" />
      <label htmlFor="paragraph3">This is my third paragraph checkbox</label>
      <br></br>

      <Header />
      <Footer />
    </>
  );
}

export default App;
