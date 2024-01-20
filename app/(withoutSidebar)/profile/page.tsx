'use client';

import PencilIcon from '@/app/_assets/icon/pencel';
// import UserDefaultImage from '@/app/_assets/icon/userDefault';
import UploadButton from '@/app/_components/uploadButton';
import { storeUserImage } from '@/app/redux/features/userImage/imageSlice';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Toaster,
} from '@haip/design-system';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CreateNewPassword from './createNewPassword';
import EditProfile from './editProfile';
import { getUserDetail } from './service';
import ShowProfile from './showProfile';
import {
  BorderBottom,
  ProfileContainer,
  Title,
  UserImageContainer,
} from './style';

const Profile = () => {
  const [editProfile, setEditProfile] = useState(false);
  const [image, setImage] = useState('');
  const [entryImage, setEntryImage] = useState(null);
  const [profileInfo, setProfileInfo] = useState();
  const [loading, setLoading] = useState(true);
  const baseUrl = process.env.baseUrl;
  const dispatch = useDispatch();
  const browseFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event?.target.files[0]));
      setEntryImage(event?.target.files[0]);
    }
  };
  useEffect(() => {
    setImage('/userDefault.png');
    (async function () {
      const rawData = await getUserDetail();
      setProfileInfo(rawData);
      if (rawData?.profile_picture) {
        setImage(baseUrl + rawData?.profile_picture);
        dispatch(storeUserImage(baseUrl + rawData?.profile_picture));
      }
      setLoading(false);
    })();
  }, [editProfile]);
  {
    return !loading ? (
      <ProfileContainer>
        <Toaster dir={'rtl'} />
        <Title>حساب کاربری</Title>
        <UserImageContainer>
          <div className='upload-button-container'>
            {editProfile && (
              <UploadButton send={browseFile}>
                <PencilIcon className='icon' />
                ویرایش
              </UploadButton>
            )}

            <div className='img-container'>
              <img width='100px' alt='user showImage' src={image} />
            </div>
          </div>
          <p>{profileInfo.username}</p>
        </UserImageContainer>
        <Tabs dir='rtl' defaultValue='user-specifications'>
          <TabsList>
            <TabsTrigger halfBorder={false} value='user-specifications'>
              مشخصات شخصی
            </TabsTrigger>
            <TabsTrigger halfBorder={false} value='user-password'>
              تغییر کلمه عبور
            </TabsTrigger>
          </TabsList>
          <BorderBottom />
          <TabsContent value='user-specifications'>
            {editProfile ? (
              <EditProfile
                profileInfo={profileInfo}
                setEditProfile={setEditProfile}
                image={image}
                entryImage={entryImage}
              />
            ) : (
              <ShowProfile
                profileInfo={profileInfo}
                setEditProfile={setEditProfile}
              />
            )}
          </TabsContent>
          <TabsContent value='user-password'>
            <CreateNewPassword />
          </TabsContent>
        </Tabs>
      </ProfileContainer>
    ) : (
      <>loading....</>
    );
  }
};

export default Profile;
