import React, { Component, Fragment } from "react";
import { Container, NewTweet, Destaques } from "./styles";
import { Navbar, Tweets, UI } from "../../components";
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
    for (let index = 0; index < 52; index++) {
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
            <textarea rows={3} />
            <Button primary>Tweetar</Button>
          </NewTweet>

          <Tweets data={tweets} />

          <Destaques>
            <li>Destaques</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </Destaques>
        </Container>
      </Fragment>
    );
  }
}
