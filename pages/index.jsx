import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import QuickMenu from "../components/QuickMenu";
import Fade from "react-reveal/Fade";
import PublicComp1 from "../components/PublicComp1";
import PublicComp2 from "../components/PublicComp2";
import PublicComp3 from "../components/PublicComp3";
import PublicComp4 from "../components/PublicComp4";
import Header from "../components/Header";
import Header_A from "../components/navigation/Header_A";

const datum = [
  {
    name: "INTRO",
    target: "/intro",
  },
  {
    name: "CONTACT",
    target: "/target",
  },
  {
    name: "TEAM",
    target: "/team",
  },
  {
    name: "PROJECT",
    target: "/project",
  },
];

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .react-reveal {
    width: 100%;
    padding: 0px !important;
  }
`;

const ImageSecton = styled.section`
  width: 100%;
  padding: 20px 0px;

  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 50%;
  height: 300px;

  object-fit: cover;
  box-shadow: 3px 3px 7px #999;
  transition: 0.4s;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 300px;
  }
`;

const QuickSection = styled.section`
  width: 100%;
  padding: 20px 0px;
`;

const App = () => {
  return (
    <Wrapper>
      <Header_A />
      <Fade>
        <ImageSecton>
          <Image
            src="https://w.namu.la/s/fa0effd9f907ec94eb177d9184c902fe80a4797b5cc97ad53a2174d388bd98766c97971e3f8616ca8b7be7b5de3d8b9a81c5b19c602901f35c98cd7269b1db2a0e727bc2995df401d43e54086b50731345a1d472fa2efc7980e7acccce0804b99146bb8244e059b4c7accab4fc76b407"
            alt="메인이미지1"
          />
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjZ6p1T699TlxFH_oXv7jqHSbXAOqn3bJ_A&usqp=CAU"
            alt="메인이미지2"
          />
        </ImageSecton>
      </Fade>
      <Fade bottom>
        <QuickSection>
          <QuickMenu datum={datum} />
        </QuickSection>
      </Fade>

      <div style={{ height: "200px" }}></div>
      <PublicComp4
        title="Project For Common Componenets With Us"
        desc="will make It. 'CC' always used to anywhere everywhere in my Platform"
      />

      <div style={{ height: "200px" }}></div>
      <PublicComp2
        imgSource={
          "https://blog.kakaocdn.net/dn/DYeVq/btreqJDKUVg/Uew34FI34UKPwExGU26N2k/img.jpg"
        }
        text="포세이큰 밴달"
      />

      <PublicComp4 title="You Can contact!" desc="Try it!" />

      <PublicComp1
        datum={[
          {
            title: "INTRODUCE",
            content: "Introduce Us, Come To Here!",
            link: "/intro",
          },
          {
            title: "OUR TEAM",
            content: "Team Profile And Team Description",
            link: "/team",
          },
          {
            title: "SHOW YOUR THINK",
            content: "If You Contact Us...",
            link: "/contact",
          },
        ]}
      />
      <PublicComp3
        imgSource={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjZ6p1T699TlxFH_oXv7jqHSbXAOqn3bJ_A&usqp=CAU"
        }
      />
    </Wrapper>
  );
};

export default App;
