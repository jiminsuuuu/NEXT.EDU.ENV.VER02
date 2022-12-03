import React from "react";
import { useCallback } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const MyFooter = styled.footer`
  width: 100%;
  height: 300px;
  margin-top: 50px;

  background-color: rgb(30, 30, 30);
  color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    height: 500px;
  }
`;

const Footerbox = styled.div`
  min-width: 350px;
`;

const LinkText = styled.span`
  font-size: 16px;
  color: #666666;
  margin: 0px 15px;
  cursor: pointer;

  transition: 0.5s;

  &:hover {
    color: #fff;
  }
`;

const Footer = () => {
  //////////////// STATE ///////////////

  //////////////// HOOKS ///////////////
  const router = useRouter();

  //////////////// EFFECT //////////////

  //////////////// HANDLER /////////////
  const moveLink = useCallback((target) => {
    router.push(target);
  });

  return (
    <MyFooter>
      <Footerbox>
        <div>사업자번호 : 123123123</div>
        <div>상호명 : 뭐시기</div>
        <div>상호명 : 뭐시기</div>
        <div>상호명 : 뭐시기</div>
        <div>상호명 : 뭐시기</div>
        <div>상호명 : 뭐시기</div>
      </Footerbox>
      <Footerbox>
        <LinkText onClick={() => moveLink("/")}>Home</LinkText>
        <LinkText onClick={() => moveLink("/intro")}>Intro</LinkText>
        <LinkText onClick={() => moveLink("/project")}>Project</LinkText>
        <LinkText onClick={() => moveLink("/contact")}>Contact</LinkText>
        <LinkText onClick={() => moveLink("/team")}>Team</LinkText>
      </Footerbox>
      <Footerbox>
        <div></div>
        <div></div>
      </Footerbox>
    </MyFooter>
  );
};

export default Footer;
