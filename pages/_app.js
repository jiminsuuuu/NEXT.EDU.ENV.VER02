import React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Whole = styled.section`
  width:100%;
  padding : 0px 10%;

  @media screen and (max-width: 500px) {
    padding: 0px;
  }
  `;

const AppShell = ({ Component }) => {
  return (
    <>
      <Header />

      <Whole>
        <Component />
      </Whole>

      <Footer />
    </>
  );
};

export default AppShell;