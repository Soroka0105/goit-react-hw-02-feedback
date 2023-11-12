import React, { Component } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";
import { render } from "@testing-library/react";



export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
      options = {
        good: 'good',
        neutral: 'neutral',
        bad: 'bad'
      }
    
      handleGood = evt => {
        this.setState({good: this.state.good +1})
      };

      handleNeutral = evt => {
        this.setState({neutral: this.state.neutral +1})
         };

        handleBad = evt => {
            this.setState({bad: this.state.bad +1})
            };

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
    <FeedbackOptions options = {[this.handleGood, this.handleNeutral, this.handleBad]} onLeaveFeedback = {this.options} />
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