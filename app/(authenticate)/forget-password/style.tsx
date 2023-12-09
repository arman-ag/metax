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
    margin-bottom: 2.5rem;
    color: #52575c;
    font-size: 0.875rem;
  }
  .login-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
    color: #52575c;
  }

  .input-margin {
    margin-top: 1rem;
  }

  .register-button {
    margin: 1rem 0 2.5rem 0;
    width: 100%;
  }
  .arrow-back-container {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
  }
  .arrow-back-icon {
    width: 2rem;
    height: 2rem;
    fill: #8c43c9;
  }
`;
export default Container;
