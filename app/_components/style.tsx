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
const StatusItemContainer = styled.div`
  display: flex;
  border-top: solid 0.1rem #e0e0e0;
  flex-direction: column;
  padding: 1.2rem;
  h1 {
    font-size: 0.75rem;
    font-weight: 600;
  }
`;
const DateBox = styled.div`
  color: #52575c;
  font-size: 0.75rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  button {
    width: 3.68rem;
    margin-left: 0.12rem;
  }
`;
const FileContainer = styled.div`
  font-size: 0.75rem;
  color: #52575c;
  margin-top: 0.5rem;
`;
const BreadCrumbContainer = styled.div`
  display: flex;
  margin: 0.82rem 1.75rem 1.69rem 0;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  color: #52575c;
`;
const StatusResult = styled.div`
  span {
    color: ${({ status }) => status.color};
    margin-left: 0.75rem;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 600;
  }
  button {
    color: ${({ status }) => status.color};
    border-color: ${({ status }) => status.color};
  }
`;
export {
  BreadCrumbContainer,
  ChildDownloadButton,
  DateBox,
  FileContainer,
  SearchContainer,
  StatusItemContainer,
  StatusResult,
  UploadButtonContainer,
};
