import DownloadFile from '@/app/_components/download';
import { Button } from '@haip/design-system';
import styled from 'styled-components';

const DenoiserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const H2 = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  align-self: flex-start;
  color: #191919;
  font-size: 0.875rem;
  margin: 2.12rem 1.31rem;
`;
const H1 = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  margin: 0.75rem 2.3rem;
`;
const AudioPlayer = styled.audio`
  width: 25.125rem;
`;
const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #e8e8e9;
`;
const AudioPlayerContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const AudioProcessingButton = styled(Button)`
  width: 18.67rem;
  margin-top: 1rem;
  margin-bottom: 2.75rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.75rem;
`;
const GalleryButton = styled(Button)`
  width: 5.65rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  padding: 0;
  margin-top: 0.87rem;
  margin-left: 0.75rem;
  span {
    margin: 0.25rem;
  }
`;
const AudioContainer = styled.div`
  display: flex;
  align-items: start;
  position: relative;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FlexAudioPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 4% 0 10% 0;
  justify-content: center;
  p {
    margin-right: 1.69rem;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
`;
const FluidGalleryButton = styled(Button)`
  width: 5.65rem;
  position: absolute;
  right: -6.5rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  padding: 0;
  margin-top: 0.87rem;
  span {
    margin: 0.25rem;
  }
`;
const FluidDownloadButton = styled(DownloadFile)`
  position: absolute;
  left: -6.4rem;
  margin: 0;
`;

export {
  AudioContainer,
  AudioPlayer,
  AudioPlayerContainer,
  AudioProcessingButton,
  DenoiserContainer,
  Divider,
  FlexAudioPlayerContainer,
  FlexContainer,
  FluidDownloadButton,
  FluidGalleryButton,
  GalleryButton,
  H1,
  H2,
};
