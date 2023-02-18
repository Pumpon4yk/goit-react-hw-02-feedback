import { Component } from 'react';

import { Container } from './App.styled';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onClickBtn = e => {
        const value = e.target.value;
        this.setState(prevState => {
            return { ...prevState, [value]: prevState[value] + 1 };
        });
    };

    countTotalFeedback = () => {
        const data = this.state;
        return Object.values(data).reduce((c, v) => c + v, 0);
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        const percent = Math.round((good / total) * 100);

        return percent ? percent : 0;
    };

    render() {
        const total = this.countTotalFeedback();
        const countPercent = this.countPositiveFeedbackPercentage();
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state)

        return (
            <Container>
                <Section
                    title="Please leave feedback"
                    children={
                        <FeedbackOptions
                            options={options}
                            onLeaveFeedback={this.onClickBtn}
                        />
                    }
                />

                <Section
                    title="Statistic"
                    children={
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={countPercent}
                        />
                    }
                />
            </Container>
        );
    }
}
