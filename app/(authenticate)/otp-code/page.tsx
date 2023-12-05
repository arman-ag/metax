'use client';

import ArrowBackIcon from '@/app/_assets/icon/arrowBack';
import { Button, OTPInputComponent } from '@haip/design-system';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
const OtpCode = () => {
  const Container = styled.section`
    .otp-container-margin {
      margin-top: 1rem;
    }
    .otp-input-space {
      margin-left: 0.5rem;
      margin-right: 0.75rem;
    }
  `;
  const [countDown, setCountDown] = useState(120);
  const [phoneNumber, setPhoneNumber] = useState('');

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
  console.log('a');
  const form = useForm();
  return (
    <Container>
      <div className='basis-2.5/12 flex flex-col py-5 '>
        <h3 className='text-[32px] font-bold'>ورود رمز یک بار مصرف</h3>
        <div className='mt-[.5rem]'>
          <span> کد تایید به شماره</span>
          <span>{phoneNumber}</span>
          <span>ارسال شده است </span>
          <Link passHref href='/lost-password'>
            تغییر شماره همراه
          </Link>
        </div>
        <div className='mt-[2rem] text-[.75rem]'>
          <span> کد ارسال شده را وارد نمایید.</span>
          <span className='text-red-500 mr-[.5rem]'>
            <span>{Math.floor(countDown / 60)}</span>
            <span>:{countDown - Math.floor(countDown / 60) * 60}</span>
          </span>
        </div>
        <div dir='ltr'>
          <OTPInputComponent
            autoFocus
            isNumberInput
            length={6}
            containerClassName='otp-container-margin'
            inputClassName='otp-input-space '
            onChangeOTP={(otp) => console.log('Number OTP: ', otp)}
          />
        </div>
        <div className='text-[.75rem] mt-[2rem]'>
          <span>کد را دریافت نکردید؟</span>
          <Button
            onClick={resendAuthenticationCode}
            disabled={countDown > 0}
            variant='text'
          >
            ارسال مجدد
          </Button>
        </div>
        <Link
          href={'/sign-in'}
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
