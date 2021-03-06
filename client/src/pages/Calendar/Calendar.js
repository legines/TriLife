import React, { Component } from "react";
import WelcomeUser from "../../components/WelcomeUser";
import { Container } from "../../components/Grid";
import CalendarContainer from "../../components/CalendarContainer";
import { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, FreeHours } from "../../components/WeeklyCalendar";

class Calendar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modalState: false,
    };
    
    this.toggleModal = this.toggleModal.bind(this);
  } 

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  }

  render() {
    const hours = this.props.location.state;
    // const synopsis = hours.synopsis;
    // const esteem = hours.esteem;
    // const selfA = hours.selfA;
    // const love = hours.love;
    // console.log(hours);

    return (
      <Container fluid>
        <WelcomeUser>
          <h1 className="title">Plan your <span className="hours_calendar">time!</span></h1>
        </WelcomeUser>
        <FreeHours hours={hours} toggle={this.toggleModal} state={this.state.modalState}/>
        <CalendarContainer>
          <Sunday />
          <Monday />
          <Tuesday />
          <Wednesday />
          <Thursday />
          <Friday />
          <Saturday />
        </CalendarContainer>
      </Container>
    );
  }
}

export default Calendar;