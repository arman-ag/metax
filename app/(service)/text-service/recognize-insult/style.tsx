import styled from 'styled-components';

const RecognizeInsultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InsultResultBox = styled.div`
  height: 4.1rem;
  width: 20.375rem;
  color: ${({ sensation }) =>
    sensation === 'Neutral' ? '#306A04' : '#EC4A5E'};
  fill: ${({ sensation }) => (sensation === 'Neutral' ? '#306A04' : '#EC4A5E')};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  border: 0.01rem solid #a0a4a8;

  div {
    display: flex;
    align-items: center;
    span {
      margin-right: 1.5rem;
    }
  }
`;
export { InsultResultBox, RecognizeInsultContainer };
