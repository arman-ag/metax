import { Button } from '@haip/design-system';
import { useEffect } from 'react';
import { getUserDetail } from './service';
import { ShowProfileContainer, UserInfoContainer } from './style';
type ShowProfileProps = {
  setEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
};
const ShowProfile = ({ setEditProfile, profileInfo }: ShowProfileProps) => {
  useEffect(() => {
    getUserDetail();
  }, []);
  console.log('profileInfoooo=======>', profileInfo);
  return (
    <UserInfoContainer>
      <ShowProfileContainer>
        <span className='title'>نام</span>
        <span>{profileInfo.first_name}</span>
      </ShowProfileContainer>
      <ShowProfileContainer>
        <span className='title'>نام خانوادگی</span>
        <span>{profileInfo.last_name}</span>
      </ShowProfileContainer>
      <ShowProfileContainer>
        <span className='title'>ایمیل</span>

        <span>{profileInfo.email}</span>
      </ShowProfileContainer>
      <ShowProfileContainer>
        <span className='title'>استان</span>

        <span>{profileInfo.province}</span>
      </ShowProfileContainer>
      <Button onClick={() => setEditProfile(true)}>ویرایش اطلاعات</Button>
    </UserInfoContainer>
  );
};

export default ShowProfile;
