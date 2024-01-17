import { Button } from '@haip/design-system';
import styled from 'styled-components';
import UploadButton from '../uploadButton';

const MusicContainerStyle = styled.div`
  max-width: 3.8rem;
  margin-top: 1rem;
  margin-left: 1.5rem;
  min-height: 5.68rem;
  padding: 0.37rem 0.31rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ focus }) => (focus ? '#EFEFEF' : 'inherit')};
  margin-left: 1.5rem;
  &:active {
    background-color: #efefef;
  }
  &:focus {
    background-color: #efefef;
  }
  span {
    word-break: break-all;
    text-align: center;
  }
`;
const ActionContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 1.75rem 0 1.85rem 0;
`;
const Divider = styled.div`
  max-width: 0.0625rem;
  min-height: 2.375rem;
  background-color: #cacccf;
  margin: 0 2rem;
`;
const DeleteButton = styled(Button)`
  margin-right: 1rem;
  padding: 0.45rem !important;

  &:active {
    background-color: #efefef;
  }
`;
const RenameButton = styled(Button)`
  margin-right: 1rem;
  padding: 0.45rem !important;
  &:focus {
    background-color: #efefef;
  }
`;
const FileNameDivision = styled.input`
  outline: none;
  direction: ltr;
  width: 2.9375rem;
  z-index: 100;
  min-height: 1.125rem;
  white-space: pre-wrap;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #52575c;
  border: 0.5px solid #1284b2;
  background: rgba(72, 201, 254, 0.3);
  &:disabled {
    background-color: inherit;
    border: 0;
  }
`;
const GalleryUploadButton = styled(UploadButton)`
  padding: 0.5rem 2rem;
`;
const GalleryTabsContainer = styled.div`
  padding: 1.75rem 2.35rem 6.635rem 1.63rem;
  height: 34.06rem;
  overflow: auto;
`;
const H1 = styled.h1`
  margin: 1.81rem 1.44rem 0 0;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
`;
const ContainerSearch = styled.div`
  position: relative;
  div {
    position: absolute;
    top: 0.7rem;
    left: 2.06rem;
  }
`;
const FileNameContainer = styled.span`
  display: inline-block;
  direction: ltr;
  width: 3.1rem;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
`;
const SubmitGalleryButton = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  height: 6.62rem;
  z-index: 100;
`;
export {
  ActionContainer,
  ContainerSearch,
  DeleteButton,
  Divider,
  FileNameContainer,
  FileNameDivision,
  GalleryTabsContainer,
  GalleryUploadButton,
  H1,
  MusicContainerStyle,
  RenameButton,
  SubmitGalleryButton,
};
