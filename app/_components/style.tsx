import { Button } from '@haip/design-system';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 21.125rem;
  height: 2.06rem;
  border-radius: 1rem;
  background-color: #f7f7f9;
  input {
    flex-basis: 100%;
    border-radius: 1rem;
    outline: none;
    height: 100%;
    padding: 0 0.87rem;
    background-color: inherit;
  }
  button {
    background-color: #8c43c9;
    border-radius: 1rem 0.125rem 0.125rem 1rem;
    width: 4.062rem;
    height: 2.0625rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const UploadButtonContainer = styled.label`
  border-radius: 1rem;
  text-align: center;
  background-color: #8c43c9;
  color: white;
  cursor: pointer;
  .child-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  input[type='file'] {
    position: absolute;
    top: -2000px;
  }
`;
const ChildDownloadButton = styled(Button)`
  padding: 0;
  width: 5.62rem;
  margin-right: 1rem;
`;
export { ChildDownloadButton, SearchContainer, UploadButtonContainer };
