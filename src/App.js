import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen1 from "./components/Screen1";
import Layout from "./Layout";
import Screen2 from "./components/Screen2";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Screen1 />} />
            <Route path="screen2" element={<Screen2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
