import { Component } from "react";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  onLeaveFeedback=(option)=>{
    this.setState((prevState)=>{
      return{
        [option]:prevState[option]+1
      }
    })
  }
  countTotal=()=>{
    return this.state.good+this.state.bad+this.state.neutral
  }
  countPositive=()=>{
    return `${Math.round(this.state.good/this.countTotal()*100)||0}%`
  }
  render(){
    return(
      <>
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback}/>
        <Statistics good={this.state.good} bad={this.state.bad} neutral={this.state.neutral} total={this.countTotal()} positivePercentage={this.countPositive()}/>
      </>
    )
  }
}
