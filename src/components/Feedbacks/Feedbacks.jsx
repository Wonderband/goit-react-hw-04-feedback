import React, { useState } from 'react';
import { ShowResults } from '../ShowResults/ShowResults';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';

export const Feedbacks = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const incrementCounter = ev => {
    setState({ ...state, [ev.target.name]: state[ev.target.name] + 1 });
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={incrementCounter}
        ></FeedbackOptions>
      </Section>
      <Section title={'statistics'.toUpperCase()}>
        <ShowResults state={state} />
      </Section>
    </div>
  );
};
