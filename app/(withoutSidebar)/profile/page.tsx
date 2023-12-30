'use client';

import PencilIcon from '@/app/_assets/icon/pencel';
import UploadButton from '@/app/_components/uploadButton';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Toaster,
} from '@haip/design-system';
import { useEffect, useState } from 'react';
import CreateNewPassword from './createNewPassword';
import EditProfile from './editProfile';
import { convertImageLinkToFile, getUserDetail } from './service';
import ShowProfile from './showProfile';
import {
  BorderBottom,
  ProfileContainer,
  Title,
  UserImageContainer,
} from './style';

const Profile = () => {
  const [editProfile, setEditProfile] = useState(false);
  const [phoneNumber, setPhoneNUmber] = useState('09365725645');
  const [showImage, setShowImage] = useState(null);
  const [image, setImage] = useState(null);
  const [profileInfo, setProfileInfo] = useState();
  const [loading, setLoading] = useState(true);

  const browseFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event?.target.files[0]);
      const reader = new FileReader();
      reader.onload = (event) => {
        setShowImage(event?.target?.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  useEffect(() => {
    (async function () {
      const {
        data: [rawData],
      } = await getUserDetail();
      console.log('profileInfooo', rawData?.profile_picture);
      setProfileInfo(rawData);
      setImage(rawData?.profile_picture);
      convertImageLinkToFile(rawData?.profile_picture);
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
            <UploadButton send={browseFile}>
              <PencilIcon className='icon' />
              ویرایش
            </UploadButton>

            <div className='img-container'>
              <img
                width='100px'
                alt='user showImage'
                src={!showImage ? profileInfo.profile_picture : showImage}
              />
            </div>
          </div>
          <p>شماره همراه:{phoneNumber}</p>
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
