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
    title: 'دینویزر',
    description: 'یه مشتی سرویس خراب که کار نمی ده',
    logo: null,
    address: '/audio-service/denoiser',
  },
  {
    title: 'جداسازی صدای خواننده از موسیقی',
    description: 'یه مشتی سرویس خراب که کار نمی ده',
    logo: null,
    address: 'audio-service/music-separator',
  },
  {
    title: 'تبدیل گفتار به متن',
    description: 'یه مشتی سرویس خراب که کار نمی ده',
    logo: null,
    address: '/audio-service/asr',
  },
];

const ChooseAudioService = () => {
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

export default ChooseAudioService;
