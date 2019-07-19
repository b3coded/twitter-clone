import React, { Component, Fragment } from "react";
import { Container, NewTweet } from "./styles";
import { Navbar, Tweets, UI, Destaques } from "../../components";
import { SectionTitle } from "../../components/UI";
const { Button, Divider } = UI;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentDidMount() {
    let items = [];
    for (let index = 1; index < 52; index++) {
      items.push(index);
    }
    this.setState({ tweets: items });
  }

  render() {
    const { tweets } = this.state;

    return (
      <Fragment>
        <Navbar />
        <Container>
          <NewTweet>
            <SectionTitle>Novo Tweet</SectionTitle>
            <textarea rows={3} placeholder="O que está acontecendo?" />
            <Button primary>Tweetar</Button>
          </NewTweet>

          <Tweets data={tweets} />

          <Destaques data={tweets} />
        </Container>
      </Fragment>
    );
  }
}
