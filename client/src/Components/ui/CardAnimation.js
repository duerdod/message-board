import React from 'react';
import { useTransition, animated } from 'react-spring';
import { shouldMessageExpand } from '../../utils/utils';

const CardAnimation = ({ className = '', ...props }) => {
  const { render } = props;

  // Animations.
  // Att least something has to be passed down as items. Could be 1, 7, or [].
  const trailedMessages = useTransition(
    props.items ? props.items : [],
    item => item.id,
    {
      config: { duration: 250 },
      unique: true,
      trail: 700 / props.items.length,
      from: { opacity: 0, transform: 'translate3d(0px, -15px, 0px)' },
      enter: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
      leave: { opacity: 0, transform: 'translate3d(0px, 0px, 0px)' }
    }
  );

  return trailedMessages.map(({ item, props, key }) => (
    <animated.div
      className={`${className} ${shouldMessageExpand(item.message)}`}
      key={key}
      style={props}
    >
      {render(item)}
    </animated.div>
  ));
};

export default CardAnimation;
