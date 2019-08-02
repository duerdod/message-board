import React from 'react';
import { useTransition, animated } from 'react-spring';

const CardAnimation = ({ ...props }) => {
  const { render, className } = props;

  // Animations.
  const trailedMessages = useTransition(
    props.items ? props.items : [],
    item => item.id,
    {
      config: { duration: 250 },
      unique: true,
      trail: 400 / props.items.length,
      from: { opacity: 0, transform: 'translate3d(0px, -15px, 0px)' },
      enter: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
      leave: { opacity: 0, transform: 'translate3d(0px, 0px, 0px)' }
    }
  );

  return trailedMessages.map(({ item, props, key }) => (
    <animated.div className={className} key={key} style={props}>
      {render(item)}
    </animated.div>
  ));
};

export default CardAnimation;
