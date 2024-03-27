import { Button } from '@haip/design-system';
import Link from 'next/link';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 11.125rem;
  height: 2.06rem;
  border-radius: 0.25rem;
  background-color: #f7f7f9;
  input {
    border-radius: 0 0.25rem 0.25rem 0;
    outline: none;
    height: 100%;
    padding: 0 0.87rem;
    background-color: inherit;
    flex-basis: 50%;
    flex-grow: 0;
    flex-shrink: 0;
  }
  button {
    flex-basis: 25%;
    flex-grow: 0;
    flex-shrink: 0;
    height: 100%;
    background-color: #8c43c9;
    border-radius: 0.25rem 0 0 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const UploadButtonContainer = styled.label`
font-size:
  border-radius: 1rem;
  text-align: center;
  color: #8c43c9;
  cursor: pointer;
    border: solid 0.1rem #8c43c9;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 6rem;
    height: 2rem;
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
  margin: 0.82rem 2.3rem 1.69rem 0;
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
const BreadcrumbItem = styled.span`
  color: ${({ lastName }) => lastName && '#8C43C9'};
`;
const Wrap = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;

  button {
    width: 40px;
    height: 40px;
    border: none;
    padding: 0;
  }
`;
const ResultNotReadyContainer = styled.p`
  color: #a0a4a8;
  font-size: 1.01rem;
  text-align: center;
  margin: 10% 0;
`;
const AudioPlayerBox = styled.div`
  direction: ltr;
  background-color: #e8e8e9;
  height: 4.5rem;
  width: 27.125rem;
  border-radius: 2.5rem;
`;
const PlayerContainerItems = styled.div`
  display: grid;
  height: 100%;
  grid-template-areas:
    ' playerButton audioPlayerProgressBar '
    '  playerButton remainingTime ';
  grid-template-rows: 2.1fr 0.3fr;
  grid-template-columns: 0.5fr 3fr;
`;
const AudioPlayerProgressBar = styled.div`
  grid-area: audioPlayerProgressBar;
  align-self: end;
  justify-self: start;
`;

const AudioPlayerButton = styled.div`
  grid-area: playerButton;
  display: flex;
  align-items: center;
  align-self: center;
  justify-self: center;
`;
const MusicTimeRemainingContainer = styled.div`
  grid-area: remainingTime;
  font-size: 0.7rem;
  align-self: end;
`;
const CardContainer = styled(Link)`
  display: flex;
  flex-basis: 32%;

  flex-direction: column;

  border-radius: 0.5rem;
  align-items: start;
  padding: 0.4rem 0.9rem;
  h1 {
    font-size: 0.87rem;
  }
  p {
    font-size: 0.87rem;
    color: #52575c;
  }

  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15),
    0px 1px 2px rgba(0, 0, 0, 0.3);
  height: 8.25rem;
`;
const EmptyLogoContainer = styled.div`
  width: 2rem;
  height: 2rem;
  margin-left: 0.6rem;
  background-color: #efefef;
  border-radius: 100%;
`;
const CardHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
`;

export {
  AudioPlayerBox,
  AudioPlayerButton,
  AudioPlayerProgressBar,
  BreadCrumbContainer,
  BreadcrumbItem,
  CardContainer,
  CardHeaderContainer,
  ChildDownloadButton,
  DateBox,
  EmptyLogoContainer,
  FileContainer,
  MusicTimeRemainingContainer,
  PlayerContainerItems,
  ResultNotReadyContainer,
  SearchContainer,
  StatusItemContainer,
  StatusResult,
  UploadButtonContainer,
  Wrap,
};
