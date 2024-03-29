'use client';
import BlackPencilIcon from '@/app/_assets/icon/blackPencil';
import CloudIcon from '@/app/_assets/icon/cloud';
import DeleteIcon from '@/app/_assets/icon/deletIcon';
import SelectAllIcon from '@/app/_assets/icon/selecAll';
import { translatorٍErrorMessage } from '@/app/_lib/translator';
import { selectedItem } from '@/app/redux/features/selectedGalleryItem/selectedSlice';
import { Button, DialogTrigger, toast } from '@haip/design-system';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ImageContainer from './imageContainer';
import { MusicIconContainer } from './rightClickStyle';
import {
  UploadImage,
  deleteImageFile,
  getGalleryImage,
  updateImage,
} from './service';
import {
  ActionContainer,
  DeleteButton,
  Divider,
  GalleryTabsContainer,
  GalleryUploadButton,
  RenameButton,
  SubmitGalleryButton,
} from './style';

const UserImage = () => {
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rename, SetRename] = useState(false);
  const [enableActionBar, setEnableActionBar] = useState({
    rename: false,
    delete: false,
  });
  const [focusItem, setFocusItem] = useState({});
  //get items in when gallery mount
  useEffect(() => {
    (async function () {
      const response = await getGalleryImage();
      if (response) {
        setLoading(false);
        setFileList([...response]);
      }
    })();
  }, []);

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
        setFocusItem(item);
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
      const formData = new FormData();
      formData.append('file_name', value);
      const res = await updateImage(id, formData);
      if (res.status === 200) {
        setLoading(true);
        const voiceFiles = await getGalleryImage();
        voiceFiles && setFileList([...voiceFiles]);
        setLoading(false);
      } else {
        toast({
          description: translatorٍErrorMessage(res?.status),
          variant: 'destructive',
        });
      }
    }
    setEnableActionBar({ rename: false, delete: false });
  };
  //delete Action
  const deleteAction = async (event) => {
    event.stopPropagation();
    const deleteItemRaw = fileList.map((item) => {
      if (item.focus === true) {
        return item.id;
      }
    });

    const deleteItem = deleteItemRaw.filter((item) => item !== undefined);
    const res = await deleteImageFile(deleteItem.toString());
    setLoading(true);
    console.log('res delete', res);
    if (res.status === 204) {
      const voiceFiles = await getGalleryImage();
      voiceFiles && setFileList([...voiceFiles]);
      setLoading(false);
    } else {
      toast({
        description: translatorٍErrorMessage(res?.status),
        variant: 'destructive',
      });
    }

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
  //upload image file
  const sendAction = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image_file', file);
    const res = await UploadImage(formData);
    setLoading(true);
    console.log('res======>', res);
    if (res.message === 'the image created') {
      const response = await getGalleryImage();
      response && setFileList([...response]);
      setLoading(false);
    } else {
      toast({
        description: translatorٍErrorMessage(res?.status),
        variant: 'destructive',
      });
    }
  };

  const actionChoseButton = () => {
    dispatch(selectedItem(focusItem));
  };

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
              acceptType='.jpg,.jpeg,.png'
            >
              <CloudIcon />
              آپلود فایل
            </GalleryUploadButton>
          }
        </ActionContainer>
        <div>
          <MusicIconContainer>
            {fileList?.map((item) => (
              <ImageContainer
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
        <SubmitGalleryButton>
          <DialogTrigger asChild>
            <Button onClick={actionChoseButton} type='button'>
              تایید
            </Button>
          </DialogTrigger>
        </SubmitGalleryButton>
      </GalleryTabsContainer>
    </div>
  );
};

export default UserImage;
