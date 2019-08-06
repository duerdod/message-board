import { useTransition } from 'react-spring';

const useCardAnimation = props => {
  // Animations.
  const animatedCards = useTransition(props ? props : [], item => item.id, {
    config: { duration: 250 },
    unique: true,
    trail: 300 / props.length,
    from: { opacity: 0, transform: 'translate3d(0px, -10px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }
  });
  return animatedCards;
};

export default useCardAnimation;
