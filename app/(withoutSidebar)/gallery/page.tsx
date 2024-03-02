'use client';

import { ContainerSearch } from '@/app/_components/gallery-modal/style';
import { Search } from '@/app/_components/search';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@haip/design-system';
import { BorderBottom } from '../profile/style';
import { MainHeadingGallery } from './style';
import UserImage from './userImage';
import UserVoice from './userVoice';

const GalleryPage = () => {
  return (
    <div style={{ padding: '.75rem 0 0 0' }}>
      <MainHeadingGallery>گالری</MainHeadingGallery>
      <ContainerSearch>
        <Search />
      </ContainerSearch>
      <div style={{ height: '43.1875rem' }}>
        <Tabs dir='rtl' defaultValue='user-voice'>
          <TabsList>
            <TabsTrigger halfBorder={false} value='user-voice'>
              صدا ها
            </TabsTrigger>
            <TabsTrigger halfBorder={false} value='user-image'>
              عکس ها
            </TabsTrigger>
            <TabsTrigger halfBorder={false} value='user-film'>
              فیلم ها
            </TabsTrigger>
          </TabsList>
          <BorderBottom />
          <TabsContent value='user-voice'>
            <UserVoice />
          </TabsContent>
          <TabsContent value='user-image'>
            <UserImage />
          </TabsContent>
          <TabsContent value='user-film'></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GalleryPage;
