import styled from 'styled-components';

const Container = styled.section`
  width: 23.31rem;
  h1 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.5rem;
  }
  .register-container {
    margin: 1.5rem 0;
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
  .checkbox-container {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }
  .checkbox-container Label {
    margin-right: 0.5rem;
  }
  .register-button {
    margin-top: 1rem;
    width: 100%;
  }

  .forget-password-container {
    font-size: 0.75rem;
    font-weight: 600;
    color: #8c43c9;
    margin-top: 1rem;
  }
  .arrangementInfo-container {
    line-height: 1.5rem;
  }
  .arrangementInfo-container p {
    text-align: center;
    color: #585858;
    font-weight: 400;
  }
`;
export default Container;
