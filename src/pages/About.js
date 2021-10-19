import React from 'react';
import { useAtom } from 'jotai';
import { counter } from '../utils/atoms';

const About = () => {
  const [countValue, setCountValue] = useAtom(counter);

  return (
    <div>
      <h1>{countValue}</h1>
      <button
        type="button"
        onClick={() => setCountValue(countValue + 1)}
      >
        toggle theme
      </button>
    </div>
  );
};

export default About;
