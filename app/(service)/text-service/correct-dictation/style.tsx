import { Button, Textarea } from '@haip/design-system';
import styled from 'styled-components';

const CorrectDictationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TextProcessingButton = styled(Button)`
  width: 18.67rem;
  margin-top: 1rem;
  margin-bottom: 2.75rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.75rem;
`;
const CustomTextarea = styled(Textarea)`
  width: 35.0625rem;
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ShowResultBox = styled.div`
  width: 35.0625rem;
`;
export {
  CorrectDictationContainer,
  CustomTextarea,
  FlexBox,
  ShowResultBox,
  TextProcessingButton,
};
