import React, { Component } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";
// import { render } from "@testing-library/react";



export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
      options = Object.keys(this.state)
      



    handleFeedback = evt =>{
      const name = evt.target.id
      this.setState((prevState) => {
        return {
        [name]: prevState[name] + 1,
        };
    });
    }

            countTotalFeedback = (a, b, c) => {
                let total = a + b + c
               return total
            }
            countPositiveFeedbackPercentage = (a, b, c) => {
                let percentage = a / (a+b+c) * 100
                return percentage.toFixed()
               
            }
            
            
    render() {
return <div>
    <Section title = "Leave a feedback">
    <FeedbackOptions options = {this.options} onLeaveFeedback = {this.handleFeedback} />
    </Section>
        <Section title = 'Statistics'>
        <Statistics 
good ={this.state.good} 
neutral = {this.state.neutral} 
bad = {this.state.bad} 
total = {this.countTotalFeedback(this.state.good,this.state.neutral, this.state.bad ) } 
percentage = {this.countPositiveFeedbackPercentage(this.state.good,this.state.neutral, this.state.bad)}
notificationMessage = "There is no feedback" />
        </Section>
</div>
    }
}