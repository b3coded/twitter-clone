import React from "react";
import { FaHeart, FaRetweet, FaCommentAlt } from "react-icons/fa";
import {
  Tweet,
  List,
  ProfilePic,
  Content,
  Name,
  UserName,
  Controls,
  Control,
  Text
} from "./styles";

import { SectionTitle } from "../UI";

const Tweets = ({ data = [], title = "Tweets" }) => {
  const imgUrl =
    "https://pbs.twimg.com/profile_images/1150931839470788610/ISEaV5B3_bigger.jpg";
  const name = "User Name";
  const username = "@user";
  const text =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi ipsum consectetur molestiae velit? Vero odit veritatis, accusantium quidem illo cum itaque rem dolores nobis? Nemo, magni nesciunt? Fugit, quas eum.";
  return (
    <List>
      <SectionTitle>{title}</SectionTitle>
      {data &&
        data.map((tweet, index) => (
          <Tweet key={`tweet-${index}`}>
            <ProfilePic src={imgUrl} />
            <Content>
              <div>
                <Name>{name}</Name>
                <UserName>{username}</UserName>
              </div>
              <div>
                <Text>{text}</Text>
              </div>

              <Controls>
                <Control>
                  <FaCommentAlt />
                </Control>
                <Control>
                  <FaRetweet size={20} />
                </Control>
                <Control>
                  <FaHeart />
                </Control>
              </Controls>
            </Content>
          </Tweet>
        ))}
    </List>
  );
};

export default Tweets;
