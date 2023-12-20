import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  justify-items: center;
  z-index: 20;
  top: 0;
  left: 0;
`;
const LoadingContent = styled.div`
  margin: 5rem auto 0;
  opacity: 100%;

  width: 8.8125rem;
  height: 2.5rem;
  padding: 0.5rem 1.13rem;
  background-color: #52575c;
  color: white;
  font-size: 1rem;
  border-radius: 0.5rem;
`;
const LoadingContainer = () => {
  return (
    <Container>
      <LoadingContent>در حال بارگذاری</LoadingContent>
    </Container>
  );
};

export default LoadingContainer;
