import React from "react";
import Layout from "../basis/Layout";
import Header from "../basis/Header";

const Main = () => {
  return (
    <Layout>
      <div id="Main">
        <Header />
        <div id="profile">
          <div className="profile">
            <div className="profile_tit">FUCKINGGOOD!</div>
            <div className="profile_sec1"></div>
            <div className="profile_sec2"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
