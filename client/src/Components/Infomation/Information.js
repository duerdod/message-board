import React from 'react';
import CardAnimation from '../ui/CardAnimation';

const rules = [
  '1. Dont be mean.',
  '2. No need for anger.',
  'If you feel the need for screaming,',
  'remove yourself from the unit.'
];

const Information = () => {
  const rulesFormated = [...rules].map((sentence, id) => {
    return {
      id,
      spans: sentence.replace(/\s/g, '').length,
      letters: sentence.split(' ').map((letter, id) => {
        return {
          id,
          letter
        };
      })
    };
  });

  return rulesFormated.map((sentence, i) => (
    <div
      key={i}
      style={{ gridTemplateColumns: `repeat(${sentence.spans}, 1fr)` }}
    >
      <CardAnimation
        className={'information-card'}
        items={sentence.letters}
        render={item => item.letter}
      />
    </div>
  ));
};

export default Information;
