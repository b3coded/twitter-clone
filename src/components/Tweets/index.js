import React, { Fragment } from "react";

import { Tweet, List } from "./styles";

const Tweets = ({ data = [] }) => (
  <List>
    {data &&
      data.map((tweet, index) => <Tweet key={`tweet-${index}`}>{tweet}</Tweet>)}
  </List>
);

export default Tweets;
