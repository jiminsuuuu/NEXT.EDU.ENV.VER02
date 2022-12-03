import React from "react";
import styled from "styled-components";
import items from "./items";
import { Whole, LnbWrapper } from "./designSource.";

const LAN_TYPE = "KO";

const Header_A = () => {
  return (
    <Whole>
      <section>
        {items.map((item) => {
          return (
            <div>
              {LAN_TYPE === "KO" && item.name_ko}
              {LAN_TYPE === "EN" && item.name_en}
            </div>
          );
        })}
      </section>
      <LnbWrapper>LNB</LnbWrapper>
    </Whole>
  );
};

export default Header_A;
