import React, { Component, Fragment } from "react";
import { Container } from "./styles";
import { Navbar, Tweets } from "../../components";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentDidMount() {
    let items = [];
    for (let index = 0; index < 912; index++) {
      items.push(index);
    }
    this.setState({ tweets: items });

    console.log(this.state);
  }

  render() {
    const { tweets } = this.state;

    return (
      <Fragment>
        <Navbar />
        <Container>
          <Tweets data={tweets} />
        </Container>
      </Fragment>
    );
  }
}
