import styled from 'styled-components';

const DenoiserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const H2 = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;
const AudioPlayer = styled.audio`
  width: full;
`;
const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #e8e8e9;
`;
const AudioPlayerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;
export { AudioPlayer, AudioPlayerContainer, DenoiserContainer, Divider, H2 };
