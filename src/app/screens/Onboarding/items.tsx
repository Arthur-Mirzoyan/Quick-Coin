import { ImageSourcePropType } from 'react-native';

export type OnboardingItemType = {
  img: ImageSourcePropType;
  title: string;
  description: string;
};

export const items: OnboardingItemType[] = [
  {
    img: require('@assets/img/onboarding1.png'),
    title: 'Առաջին բոնուսային համակարգը քոլեջում',
    description: 'Գրանցվեք և սովորեք մեզ հետ',
  },
  {
    img: require('@assets/img/onboarding2.png'),
    title: 'Ամրապնդեք Ձեր գիտելիքները',
    description:
      'Թեստերը հանձնելով՝ Դուք ավելի հեշտ և արդյունավետ կսովորեք, կգտնեք Ձեր թույլ կողմերն ու կաշխատեք դրանց ուժեղացման վրա',
  },
  {
    img: require('@assets/img/onboarding3.png'),
    title: 'Հավաքեք միավորներ՝ պատասխանելով հարցերին',
    description: 'Միավորները փոխանակեք քոլեջի կողմից տրված նվերներով',
  },
];
