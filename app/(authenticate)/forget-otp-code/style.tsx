import styled from 'styled-components';

const Container = styled.section`
  .otp-container {
    margin: 2rem 0;
  }
  .otp-container-margin {
    margin-top: 1rem;
  }
  .otp-input-space {
    margin-left: 0.5rem;
    margin-right: 0.75rem;
  }
  .heading {
    font-size: 2rem;
    font-weight: 600;
    line-height: 3.5rem;
  }
  .info-container {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    margin: 0.5rem 0 2.5rem 0;
    color: #52575c;
  }
  .change-number {
    color: #8c43c9;
  }
  .countdown-timer-container {
    color: #52575c;
    font-size: 0.75rem;
    color: #52575c;
  }
  .countdown-timer {
    color: #09ba76 !important;
    font-size: 0.75rem;
  }
  .otp-error {
    border-color: red !important;
  }
  .error-container {
    color: red;
    margin-top: 0.5rem;
    font-size: 0.75rem;
  }
`;

export default Container;
