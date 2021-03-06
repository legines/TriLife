import React, { Component } from "react";
import WelcomeUser from "../../components/WelcomeUser";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import AboutBtn from "../../components/AboutBtn";
import AddHoursBtn from "../../components/AddHoursBtn";
import CurrentSchedBtn from "../../components/CurrentSchedBtn";
import BoxContainer from "../../components/BoxContainer";

class Home extends Component {

  render() {
    return (
      <Container fluid>
        <WelcomeUser>
          <h1>Welcome!</h1>
        </WelcomeUser>
        <BoxContainer>
          <Link to="/about"><AboutBtn /></Link>
          <Link to="/addtime"><AddHoursBtn /></Link>
          <Link to="/calendar"><CurrentSchedBtn /></Link>
        </BoxContainer>
      </Container>
    );
  }
}

export default Home;