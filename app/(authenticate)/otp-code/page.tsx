'use client';

import ArrowBackIcon from '@/app/_assets/icon/arrowBack';
import { Button, OTPInputComponent } from '@haip/design-system';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from './style';

const OtpCode = () => {
  const [countDown, setCountDown] = useState(120);
  const [phoneNumber, setPhoneNumber] = useState('09365725645');

  const countdown = () => {
    if (countDown > 0) {
      setCountDown((prevTime) => --prevTime);
    }
  };
  const resendAuthenticationCode = async () => {
    //  try {
    //    const mobile = await localStorage.getItem('username');
    //    const res = await service.post(
    //      {
    //        mobile,
    //        codeType: 'SMS',
    //      },
    //      '/auth/forgetPassword/validationCode'
    //    );
    //  } catch (e) {
    //    console.log(e.message);
    //  }
    setCountDown(120);
  };

  useEffect(() => {
    //  setPhoneNumber(localStorage.getItem('username'));
    const counter = setInterval(countdown, 1000);
    return () => clearInterval(counter);
  });
  const form = useForm();
  return (
    <Container>
      <div>
        <h3 className='heading'>ورود رمز یک بار مصرف</h3>
        <div className='info-container'>
          <span> کد تایید به شماره</span>
          <span>{` ${phoneNumber} `}</span>
          <span>ارسال شده است. </span>
          <Link className='change-number' href='/sign-up'>
            تغییر شماره همراه
          </Link>
        </div>
        <div>
          <span className='countdown-timer-container'>
            {' '}
            کد ارسال شده را وارد نمایید.
          </span>
          <span className='countdown-timer'>
            <span>{Math.floor(countDown / 60)}</span>
            <span>:{countDown - Math.floor(countDown / 60) * 60}</span>
          </span>
        </div>
        <div className='otp-container ' dir='ltr'>
          <OTPInputComponent
            autoFocus
            isNumberInput
            length={6}
            containerClassName='mt-8'
            inputClassName='otpInput ml-2 mr-5'
            onChangeOTP={(otp) => console.log('Number OTP: ', otp)}
          />
        </div>
        <div style={{ marginBottom: '.5rem', fontSize: '.75rem' }}>
          <span>کد را دریافت نکردید؟ </span>
          <Button
            onClick={resendAuthenticationCode}
            disabled={countDown > 0}
            variant='text'
          >
            <span style={{ fontSize: '.75rem' }}>ارسال مجدد</span>
          </Button>
        </div>
        <Link
          href={'/login'}
          className='flex items-center mt-[1.2rem] text-[.75rem]'
        >
          <span>بازگشت به صفحه ورود</span>
          <ArrowBackIcon />
        </Link>
      </div>
    </Container>
  );
};

export default OtpCode;
