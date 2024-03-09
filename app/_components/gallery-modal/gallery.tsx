import { BorderBottom } from '@/app/(withoutSidebar)/profile/style';
import { ContainerSearch, H1 } from '@/app/_components/gallery-modal/style';
import UserVoice from '@/app/_components/gallery-modal/userVoice';
import { Search } from '@/app/_components/search';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@haip/design-system';
import UserImage from './userImage';
const Gallery = ({ defaultTab }) => {
  return (
    <div>
      <H1>گالری</H1>
      <ContainerSearch>
        <Search />
      </ContainerSearch>
      <div style={{ height: '43.1875rem' }}>
        <Tabs dir='rtl' defaultValue={defaultTab}>
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

export default Gallery;
