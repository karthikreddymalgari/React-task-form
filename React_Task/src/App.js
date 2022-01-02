import "./App.css";
import React from "react";
import Users from "./Users";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Error from "./components/Error";
import Form from "./components/Form";
import FullBlogList from "./components/FullBlogList";
import User2 from "./components/User2";
import NewEditBlog from "./components/NewBlog";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/" element={<Users />} />
          <Route path="/:id" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
