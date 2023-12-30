'use client';
import BlackPencilIcon from '@/app/_assets/icon/blackPencil';
import CloudIcon from '@/app/_assets/icon/cloud';
import DeleteIcon from '@/app/_assets/icon/deletIcon';
import { useState } from 'react';
import MusicContainer from './musicContainer';
import { MusicIconContainer } from './rightClickStyle';
import {
  ActionButton,
  ActionContainer,
  Divider,
  GalleryTabsContainer,
  GalleryUploadButton,
} from './style';

const UserVoice = () => {
  const data = [
    { id: 1, name: 'file1' },
    { id: 2, name: 'file2' },
    { id: 3, name: 'file3' },
    { id: 4, name: 'file4' },
    { id: 5, name: 'file5' },
  ];
  const [rename, setRename] = useState(false);

  console.log('rename-==-=-=-0', rename);
  return (
    <GalleryTabsContainer
      onClick={(event) => {
        setRename(false);
      }}
    >
      <ActionContainer>
        <ActionButton variant={'text'}>
          <DeleteIcon />
        </ActionButton>
        <ActionButton
          onClick={() => {
            setRename(true);
          }}
          variant={'text'}
        >
          <BlackPencilIcon />
        </ActionButton>
        <Divider />
        <GalleryUploadButton acceptType='.wav '>
          <CloudIcon />
          آپلود فایل
        </GalleryUploadButton>
      </ActionContainer>
      <div style={{ padding: '100px' }}>
        <MusicIconContainer>
          {data.map((item) => (
            <MusicContainer
              rename={rename}
              setRename={setRename}
              fileName={item.name}
              id={item.id}
              key={item.id}
            />
          ))}
        </MusicIconContainer>
      </div>
    </GalleryTabsContainer>
  );
};

export default UserVoice;
