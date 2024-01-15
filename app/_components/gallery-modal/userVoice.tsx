'use client';
import BlackPencilIcon from '@/app/_assets/icon/blackPencil';
import CloudIcon from '@/app/_assets/icon/cloud';
import DeleteIcon from '@/app/_assets/icon/deletIcon';
import SelectAllIcon from '@/app/_assets/icon/selecAll';
import { selectedItem } from '@/app/redux/features/selectedGalleryItem/selectedSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MusicContainer from './musicContainer';
import { MusicIconContainer } from './rightClickStyle';
import { UploadVoice, getGalleryVoice, updateVoice } from './service';
import {
  ActionContainer,
  DeleteButton,
  Divider,
  GalleryTabsContainer,
  GalleryUploadButton,
  RenameButton,
} from './style';

const UserVoice = () => {
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rename, SetRename] = useState(false);
  const [enableActionBar, setEnableActionBar] = useState({
    rename: false,
    delete: false,
  });
  //blur items action
  const blurItem = () => {
    const selectAllFile = fileList.map((item) => {
      return { ...item, focus: false };
    });
    setFileList([...selectAllFile]);
    setEnableActionBar({ rename: false, delete: false });
    SetRename(false);
  };
  //  focus item actionMusicContainer
  const diagnosisFocusItem = (event, focusItemId: number) => {
    SetRename(false);
    event.stopPropagation();
    let index = fileList.findIndex((item) => item.id === true);
    if (index !== -1) {
      fileList[index] = { ...fileList[index], focus: false };
      setFileList([...fileList]);
    }
    const focusFileList = fileList.map((item) => {
      if (item.id === focusItemId) {
        dispatch(selectedItem(item));
        return { ...item, focus: true };
      } else {
        return { ...item, focus: false };
      }
    });
    setEnableActionBar({ rename: true, delete: true });
    setFileList([...focusFileList]);
  };
  //rename Action
  const renameAction = async (event, id = null, value = '') => {
    event.stopPropagation();
    SetRename((prevItem) => {
      return !prevItem;
    });
    if (id) {
      let focusIndex = fileList.findIndex((item) => item.id === id);
      updateVoice(id, value);
      setLoading(true);
      const voiceFiles = await getGalleryVoice();
      if (voiceFiles) {
        setFileList([...voiceFiles]);
        setLoading(false);
      }
      // fileList[focusIndex] = { ...fileList[focusIndex], file_name: value };
    }
    setEnableActionBar({ rename: false, delete: false });
  };
  //delete Action
  const deleteAction = async (event) => {
    event.stopPropagation();
    const remainingFile = fileList.filter((item) => {
      return item?.focus !== true;
    });
    setFileList([...remainingFile]);
    setEnableActionBar({ rename: false, delete: false });
  };
  //select all action
  const handleSelectAll = (event) => {
    event.stopPropagation();
    const selectAllFile = fileList.map((item) => {
      return { ...item, focus: true };
    });
    setEnableActionBar({ rename: false, delete: true });
    setFileList([...selectAllFile]);
  };
  //upload voice file
  const sendAction = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('voice_file', file);
    try {
      const res = await UploadVoice(formData);
      console.log(res);
      if (res.status === 201) {
        setLoading(true);
        const response = await getGalleryVoice();
        if (response) {
          setLoading(false);
          setFileList([...response]);
        } else {
          console.log('error=>', e);
        }
      }
    } catch (e) {
      console.log('error=>', e);
    }
  };
  useEffect(() => {
    (async function () {
      const response = await getGalleryVoice();
      if (response) {
        setLoading(false);
        setFileList([...response]);
      }
      console.log('response=====>', response);
    })();
  }, []);
  console.log('focusItemId', fileList);

  return loading ? (
    <div>loading....</div>
  ) : (
    <div>
      <GalleryTabsContainer onClick={blurItem}>
        <ActionContainer>
          <button onClick={(event) => handleSelectAll(event)}>
            <SelectAllIcon />
          </button>
          <DeleteButton
            onClick={(event) => deleteAction(event)}
            disabled={!enableActionBar.delete}
            variant={'text'}
          >
            <DeleteIcon />
          </DeleteButton>
          <RenameButton
            disabled={!enableActionBar.rename}
            rename={rename}
            onClick={(e) => renameAction(e)}
            variant={'text'}
          >
            <BlackPencilIcon />
          </RenameButton>
          <Divider />

          {
            <GalleryUploadButton
              send={(event) => sendAction(event)}
              acceptType='.wav '
            >
              <CloudIcon />
              آپلود فایل
            </GalleryUploadButton>
          }
        </ActionContainer>
        <div>
          <MusicIconContainer>
            {fileList?.map((item) => (
              <MusicContainer
                deleteAction={deleteAction}
                renameAction={renameAction}
                diagnosisFocusItem={diagnosisFocusItem}
                item={item}
                key={item?.id}
                rename={rename}
              />
            ))}
          </MusicIconContainer>
        </div>
      </GalleryTabsContainer>
      {/* <Button  >ثبت</Button> */}
    </div>
  );
};

export default UserVoice;
