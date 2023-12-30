'use client';

import UserVoice from '@/app/_components/gallery-modal/userVoice';
import { Search } from '@/app/_components/search';
import {
  Button,
  Dialog,
  DialogTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@haip/design-system';
import { BorderBottom } from '../profile/style';
import { DialogContentContainer } from './style';

const Home = () => {
  return (
    <div>
      <div>
        <div dir={'rtl'}>
          دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل در زبان فارسی ایجاد کرد،
          در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
          دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
          مورد استفاده قرار گیرد.
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open</Button>
        </DialogTrigger>

        <DialogContentContainer dir={'rtl'}>
          <div>گالری</div>
          <Search />
          <div>
            <Tabs dir='rtl' defaultValue='user-specifications'>
              <TabsList>
                <TabsTrigger halfBorder={false} value='user-image'>
                  عکس ها
                </TabsTrigger>
                <TabsTrigger halfBorder={false} value='user-film'>
                  فیلم ها
                </TabsTrigger>
                <TabsTrigger halfBorder={false} value='user-voice'>
                  صدا ها
                </TabsTrigger>
              </TabsList>
              <BorderBottom />
              <TabsContent value='user-image'></TabsContent>
              <TabsContent value='user-film'></TabsContent>
              <TabsContent value='user-voice'>
                <UserVoice />
              </TabsContent>
            </Tabs>
          </div>
          <div></div>
        </DialogContentContainer>
      </Dialog>
    </div>
  );
};

export default Home;
