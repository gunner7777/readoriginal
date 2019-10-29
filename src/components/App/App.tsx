import React from "react";
import { Header } from "../layout/Header/Header";
import { Content } from "../layout/Content/Content";
import "./App.scss";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
};
