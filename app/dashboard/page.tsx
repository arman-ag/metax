'use client';

import BarAreaChart from './barChart';
import CircleChart from './circleChart';
import GradianAreaChart from './lineChart';
import {
  BannerContainer,
  BarBorderContainer,
  CircleBorderContainer,
  DashboardContainer,
  FavoriteServiceContainer,
  H1,
  HeaderContainer,
  LineBorderContainer,
} from './style';
const Home = () => {
  return (
    <DashboardContainer>
      <FavoriteServiceContainer>سرویس های مورد علاقه</FavoriteServiceContainer>
      <LineBorderContainer>
        <HeaderContainer>
          <H1>میانگین سرعت پردازش هر سرویس</H1>
          {/* <ServiceDropdown /> */}
        </HeaderContainer>
        <GradianAreaChart width={'100%'} height={'80%'} />
      </LineBorderContainer>
      <CircleBorderContainer>
        <HeaderContainer>
          <H1>وضعیت در خواست ها</H1>
          {/* <ServiceDropdown /> */}
        </HeaderContainer>
        <CircleChart width={'100%'} height={'80%'} />
      </CircleBorderContainer>
      <BarBorderContainer>
        <HeaderContainer>
          <H1> پر استفاده ترین سرویس ها</H1>
          {/* <ServiceDropdown /> */}
        </HeaderContainer>
        <BarAreaChart width={'100%'} height={'80%'} />
      </BarBorderContainer>
      <BannerContainer>banner</BannerContainer>
    </DashboardContainer>
  );
};

export default Home;
