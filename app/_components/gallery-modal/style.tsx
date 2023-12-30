import { Button } from '@haip/design-system';
import styled from 'styled-components';
import UploadButton from '../uploadButton';

const MusicContainerStyle = styled.div`
  max-width: 2.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ focus }) => (focus ? 'gray' : 'inherit')};
  /* min-height: 4.95rem; */
  margin-left: 1.5rem;
  &:active {
    background-color: gray;
  }
  /* &:hover {
    background-color: gray;
  } */
  &:focus {
    background-color: gray;
  }
`;
const ActionContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 1.75rem 0 1.85rem 0;
`;
const Divider = styled.div`
  max-width: 0.0625rem;
  min-height: 2.375rem;
  background-color: #cacccf;
  margin: 0 2rem;
`;
const ActionButton = styled(Button)`
  margin-right: 1.5rem;
`;
const FileNameDivision = styled.textarea`
  outline: none;
  background-color: inherit;
  white-space: pre-wrap;
  overflow-y: hidden;
  height: auto;
  resize: none;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #52575c;
`;
const GalleryUploadButton = styled(UploadButton)`
  padding: 0.5rem 2rem;
`;
const GalleryTabsContainer = styled.div`
  padding: 1.75rem 2.35rem 6.635rem 1.63rem;
  height: 30rem;
  overflow: auto;
`;
export {
  ActionButton,
  ActionContainer,
  Divider,
  FileNameDivision,
  GalleryTabsContainer,
  GalleryUploadButton,
  MusicContainerStyle,
};
