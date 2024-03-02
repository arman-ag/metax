import { Button } from '@haip/design-system';
import styled from 'styled-components';

const FlexImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  button {
    width: 18.5rem;
    margin: 1.12rem 0 1.5rem 0;
  }
`;
const ImageContainerUploader = styled.div`
  position: relative;
`;
const FluidImageGalleryButton = styled(Button)`
  width: 5.65rem;
  position: absolute;
  right: 10.5rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  padding: 0;
  span {
    margin: 0.25rem;
  }
`;
const ChoseImageGalleryFileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.2rem 0 4.18rem 0;
`;
export {
  ChoseImageGalleryFileContainer,
  FlexImageContainer,
  FluidImageGalleryButton,
  ImageContainerUploader,
};
