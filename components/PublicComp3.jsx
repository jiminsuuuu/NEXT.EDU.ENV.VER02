import { useSSR } from "babel-plugin-styled-components/lib/utils/options";
import React, { useState } from "react";
import { useCallback } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  padding: 30px 0px;

  display: flex;
  flex-direction: ${(props) => props.reverse};
`;

const ImageBox = styled.div`
  width: 350px;
  height: 350px;
  min-width: 350px;

  position: relative;
  margin-right: 40px;
`;

const Image = styled.img`
  width: 350px;
  height: 350px;
  position: absolute;
  top: 0px;
  left: 0px;

  object-fit: cover;
`;

const PrevBtn = styled.div`
  position: absolute;
  left: 3px;
  bottom: 50%;
  z-index: 1;

  color: #fff;

  cursor: pointer;
`;

const NextBtn = styled.div`
  position: absolute;
  right: 3px;
  bottom: 50%;
  z-index: 1;

  color: #fff;

  cursor: pointer;
`;

const PublicComp3 = ({
  reverse = false,
  arr = [
    {
      imageSource:
        "https://w.namu.la/s/cee604ccf3d0b2f0c7083f220d5482f2609952cefb9dfcc5dcbe98f5f3ebd515b061da42a8aa19c578c7955c29bba02d16284bc0613c25498eaaeef39d7870a91315e9d296d9b51f77ee1a7cdbcdd513eeb087171cd88ee018b5c0d96f8d1008e52472ad7da4e3fafce94356565860c1",
      title: "Component Title -1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis molestias animi iusto ea sapiente suscipit et impedit dicta nihil qui eos, modi id voluptatum molestiae aut vel! Inventore, reprehenderit sed?",
    },
    {
      imageSource:
        "https://w.namu.la/s/9c73e41aa8a5f388d3ceb4e187628d4ad88734174fd226a8004ddd24be69a0abc100b186d731732126541e35f3196e77a6b9ce3b76b7440f6ff1e83401966f4b153df752d05ce8a3b6e1e18ff038d0f0e34ca26ae242637f7c958eed3fd42d3a5a4c413ec8c5d6fa3f50ea7599fecc21",
      title: "Component Title -1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis molestias animi iusto ea sapiente suscipit et impedit dicta nihil qui eos, modi id voluptatum molestiae aut vel! Inventore, reprehenderit sed?",
    },
    {
      imageSource:
        "https://s3.amazonaws.com/dexerto-assets-production-cbbdf288/uploads/2020/11/02095705/Sovreign.jpg?w=620",
      title: "Component Title -1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis molestias animi iusto ea sapiente suscipit et impedit dicta nihil qui eos, modi id voluptatum molestiae aut vel! Inventore, reprehenderit sed?",
    },
  ],
}) => {
  //////////////// STATE ///////////////
  const [idx, setIdx] = useState(0);
  //////////////// HOOKS ///////////////

  //////////////// EFFECT //////////////

  //////////////// HANDLER /////////////
  const prevHandler = useCallback(() => {
    setIdx((prev) => {
      if (prev === 0) {
        return arr.length - 1;
      } else {
        return prev - 1;
      }
    });
  }, [idx]);

  const nextHandler = useCallback(() => {
    setIdx((prev) => {
      if (prev === arr.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }, [idx]);
  return (
    <Box reverse={reverse ? "row-reverse" : "row"}>
      <ImageBox>
        <Image src={arr[idx].imageSource} />
        <PrevBtn onClick={nextHandler}>◁</PrevBtn>
        <NextBtn onClick={prevHandler}>▷</NextBtn>
      </ImageBox>

      <div>{arr[idx].title}</div>
      <div>{arr[idx].desc}</div>
    </Box>
  );
};

export default PublicComp3;
