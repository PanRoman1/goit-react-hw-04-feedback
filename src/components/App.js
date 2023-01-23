import { useState, useMemo } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Layout } from './Layout';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const addFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };
  const totalFeedbacks = useMemo(countTotalFeedback, [good, neutral, bad]);

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / totalFeedbacks) * 100);
  };

  const positiveFeedbackPercentage = useMemo(countPositiveFeedbackPercentage, [
    good,
    totalFeedbacks,
  ]);

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedbacks === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            persentGoodFeelback={positiveFeedbackPercentage}
          />
        )}
      </Section>
    </Layout>
  );
};
