'use client';
import { Divider } from '@/app/(service)/audio-service/denoiser/style';
import NextBreadcrumb from '@/app/_components/NextBreadcrumb';
import CardService from '@/app/_components/cardService';
import { Search } from '@/app/_components/search';
import {
  CardServiceContainer,
  H1,
  HeaderWrapper,
  MainWrapper,
  SearchContainer,
} from '../audio-service/style';

const serviceDescriptions = [
  {
    title: 'تشخیص چهره',
    description: 'یه مشتی سرویس خراب که کار نمی ده',
    logo: null,
    address: '/image-service/face-detection',
  },
  {
    title: 'تشخیص سن',
    description: 'یه مشتی سرویس خراب که کار نمی ده',
    logo: null,
    address: 'image-service/age-detection',
  },
  {
    title: 'تشخیص احساس',
    description: 'یه مشتی سرویس خراب که کار نمی ده',
    logo: null,
    address: '/image-service/emotion-diagnose',
  },
  {
    title: 'تشخیص جنسیت',
    description: 'یه مشتی سرویس خراب که کار نمی ده',
    logo: null,
    address: '/image-service/gender-detection',
  },
  {
    title: 'تشخیص بدن',
    description: 'یه مشتی سرویس خراب که کار نمی ده',
    logo: null,
    address: '/image-service/body-diagnose',
  },
];

const ChooseImageService = () => {
  return (
    <div>
      <HeaderWrapper>
        <H1>سرویس صوت</H1>
        <NextBreadcrumb />
        <SearchContainer>
          <Search />
        </SearchContainer>
      </HeaderWrapper>

      <Divider />
      <MainWrapper>
        <H1> دسته بندی سرویس صوت</H1>
        <CardServiceContainer>
          {serviceDescriptions.map((serviceDescription, count) => {
            return (
              <CardService
                key={count}
                serviceDescription={serviceDescription}
              />
            );
          })}
        </CardServiceContainer>
      </MainWrapper>
    </div>
  );
};

export default ChooseImageService;
