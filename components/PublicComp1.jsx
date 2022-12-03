import React from "react";
import styled from "styled-components";
import {
  GithubOutlined,
  AppleOutlined,
  YoutubeOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

const Wrapper = styled.section`
  width: 100%;
  margin: 30px 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  } ;
`;

const Box = styled.div`
  width: 350px;
  min-width: 350px;
  height: 250px;
  margin: 10px;

  display: flex;
  flex-direction: column;

  padding: 10px;

  border-radius: 5px;
  box-shadow: 1px 1px 2px #d8d8d8;
  background-color: #d8d8d8;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #a0a0a0;
    border-radius: 0px;
  }

  @media screen and (max-width: 1340px) {
    width: 380px;
    min-width: 300px;
    height: 200px;
  }

  @media screen and (max-width: 1200px) {
    width: 250px;
    min-width: 250px;
    height: 150px;
  }

  @media screen and (max-width: 1000px) {
    width: 350px;
    min-width: 350px;
    height: 250px;
  }
`;

const iconStyle = {
  fontSize: 26,
  color: "fff",
};

const BoxTitle = styled.article`
  font-size: 20px;
  border-bottom: 2px solid #fff;
  font-weight: bold;
  margin-top: 15px;
`;

const BoxContent = styled.article`
  font-size: 16px;
  color: #999;
  margin-top: 20px;
  padding: 10px;
`;

const BoxLink = styled.article`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  float: right;
  margin-top: 45px;
`;

// datum : iconName, title, content, link
const PublicComp1 = ({ datum = [] }) => {
  //////////////// STATE ///////////////

  //////////////// HOOKS ///////////////
  const rt = useRouter();
  //////////////// EFFECT //////////////

  //////////////// HANDLER /////////////
  const moveLink = (target) => {
    rt.push(target);
  };
  return (
    <Wrapper>
      {datum.map((v, idx) => (
        <Box>
          {idx === 0 && <AppleOutlined styled={{ ...iconStyle }} />}
          {idx === 1 && <GithubOutlined styled={{ ...iconStyle }} />}
          {idx === 2 && <YoutubeOutlined styled={{ ...iconStyle }} />}
          <BoxTitle>{v.title}</BoxTitle>
          <BoxContent>
            {v.content.length > 30
              ? v.content.substring(0, 70) + "..."
              : v.content}
          </BoxContent>
          <BoxLink onClick={() => moveLink(v.link)}>
            MORE
            <RightOutlined />
          </BoxLink>
        </Box>
      ))}
    </Wrapper>
  );
};

export default PublicComp1;
