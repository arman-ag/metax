import styled from 'styled-components';

const BorderBottom = styled.div`
  border-bottom: 0.1rem solid #aeaeae;
`;
const ProfileContainer = styled.div`
  padding-top: 1.13rem;
`;
const Title = styled.h1`
  font-size: 1rem;
  margin-right: 1.25rem;

  font-weight: 600;

  margin-bottom: 0.5rem;
`;
const UserImageContainer = styled.div`
  display: flex;
  margin-left: 4rem;
  align-items: flex-end;
  flex-direction: column;
  color: #a0a4a8;
  .upload-button-container {
    display: flex;
    align-items: end;
    margin-bottom: 1.31rem;
    .img-container {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      overflow: hidden;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
  label {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5rem;
    width: 6.5rem;
    height: 1.75rem;
    .icon {
      margin-left: 0.3rem;
    }
  }
`;
const ShowProfileContainer = styled.div`
  flex: 0 0 28%;
  margin: 2.06rem 6.38rem;
  padding: 0 0.25rem;
  border-bottom: 0.125rem solid #aeaeae;
  display: flex;
  justify-content: space-between;
  color: #52575c;
  span {
    margin: 0 1rem;
  }
  .title {
    font-size: 1rem;
    font-weight: 600;
    line-height: 2rem;
    color: black;
  }
`;
const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 4.5rem;
  button {
    margin: 5.75rem 5.5rem 0 0rem;
  }
`;
const EditProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .items {
    flex: 0 0 35%;
    margin: 2.06rem 6.38rem;
    padding: 0 0.25rem;
  }
  .button-container {
    margin: 3.75rem 6.5rem;
    button {
      margin-left: 1.5rem;
    }
  }
`;
const ChoseNewPasswordContainer = styled.div`
  margin: 2.06rem 4rem;
  /* padding: 0 4rem 0 35.5rem; */
  width: 20.12rem;
  button {
    margin-top: 3.75rem;
    width: 10rem;
  }
`;

export {
  BorderBottom,
  ChoseNewPasswordContainer,
  EditProfileContainer,
  ProfileContainer,
  ShowProfileContainer,
  Title,
  UserImageContainer,
  UserInfoContainer,
};
