import styled from 'styled-components';

const Container = styled.section`
  width: 23.31rem;
  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.5rem;
  }
  .password-description {
    margin-bottom: 1.5rem;
    color: #a0a4a8;
    font-size: 0.875rem;
  }
  .login-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #52575c;
  }
  .login-container Button span {
    font-size: 1.07rem;
    font-weight: 680;
  }
  .input-margin {
    margin-top: 1rem;
  }

  .register-button {
    margin-top: 1rem;
    width: 100%;
  }
`;
export default Container;
