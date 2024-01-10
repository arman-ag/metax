import { BorderBottom } from '@/app/(withoutSidebar)/profile/style';
import { ContainerSearch, H1 } from '@/app/_components/gallery-modal/style';
import UserVoice from '@/app/_components/gallery-modal/userVoice';
import { Search } from '@/app/_components/search';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@haip/design-system';
const Gallery = ({ setFocusItem }) => {
  return (
    <div>
      <H1>گالری</H1>
      <ContainerSearch>
        <Search />
      </ContainerSearch>
      <div>
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
            <UserVoice setFocusItem={setFocusItem} />
          </TabsContent>
          <TabsContent value='user-image'>
            <div style={{ minHeight: '34.06rem' }} />
          </TabsContent>
          <TabsContent value='user-film'>
            <div style={{ minHeight: '34.06rem' }} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;
