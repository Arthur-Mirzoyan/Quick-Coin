import { ImageSourcePropType } from 'react-native';

export type OnboardingItemType = {
  img: ImageSourcePropType;
  title: string;
  description: string;
};

export const items: OnboardingItemType[] = [
  {
    img: require('@assets/img/onboarding1.png'),
    title: 'The first currency system in college',
    description: 'Register and practice subjects with us',
  },
  {
    img: require('@assets/img/onboarding2.png'),
    title: 'Increase your knowledge base',
    description:
      'By passing the tests, you will begin to remember the correct answers and increase your knowledge base.',
  },
  {
    img: require('@assets/img/onboarding3.png'),
    title: 'Get coins by answering questions',
    description: 'Spend the coins to buy gifts provided by the college',
  },
];
