'use client';

import ArrowBackIcon from '@/app/_assets/icon/arrowBack';
import LoadingContainer from '@/app/_components/loadingContainer';
import translatorٍErrorMessage from '@/app/_lib/translator';
import {
  Button,
  OTPInputComponent,
  Toaster,
  useToast,
} from '@haip/design-system';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Container from './style';

const ForgetOtpCode = () => {
  const baseUrl = process.env.baseUrl;
  const router = useRouter();
  const { toast } = useToast();
  const [countDown, setCountDown] = useState(120);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const countdown = () => {
    if (countDown > 0) {
      setCountDown((prevTime) => --prevTime);
    }
  };
  const resendAuthenticationCode = async () => {
    const raw = await JSON.stringify({
      phone_number: phoneNumber,
    });
    try {
      const res = await fetch(`${baseUrl}/accounts/send-sms-code/`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: raw,
      });
      const response = await res.json();
      if (res.ok) {
        setCountDown(120);
      } else {
        toast({
          description: translatorٍErrorMessage(response.explanation),
        });
      }
    } catch {
      toast({
        description: translatorٍErrorMessage('TypeError: Failed to fetch'),
      });
    }
  };
  const sendData = async (otpCode: string) => {
    const jsonOtpCode = JSON.stringify({
      phone_number: phoneNumber,
      sms_code: parseInt(otpCode),
    });
    try {
      const res = await fetch(`${baseUrl}/accounts/otp-validation/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonOtpCode,
      });

      const response = await res.json();
      if (res.ok) {
        localStorage.setItem('OTPAuth', response.access);
        router.push('/choose-forget-password');
      } else {
        if (res.status === 422) {
          setError(true);
        }
        toast({
          description: translatorٍErrorMessage(response.explanation),
        });
      }
    } catch {
      toast({
        description: translatorٍErrorMessage('TypeError: Failed to fetch'),
      });
    }
    setLoading(false);
  };
  useEffect(() => {
    const counter = setInterval(countdown, 1000);
    return () => clearInterval(counter);
  });
  useEffect(() => {
    const phone = localStorage.getItem('username');
    setPhoneNumber(phone!);
  }, []);

  const sendOtp = (otpCode: string) => {
    if (otpCode.length === 5) {
      setLoading(true);
      sendData(otpCode);
    }
  };

  return (
    <Container>
      <Toaster dir={'rtl'} />
      {loading && <LoadingContainer />}
      <div>
        <h3 className='heading'>ورود رمز یک بار مصرف</h3>
        <div className='info-container'>
          <span> کد تایید به شماره</span>
          <span>{` ${phoneNumber} `}</span>
          <span>ارسال شده است. </span>
          <Link className='change-number' href='/forget-password'>
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
            length={5}
            containerClassName='mt-8'
            inputClassName={`${error && 'otp-error'}  otpInput ml-2 mr-5`}
            onChangeOTP={(otp) => sendOtp(otp)}
          />
          {error && (
            <span className='.error-container'>کد وارد شده اشتباه است</span>
          )}
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

export default ForgetOtpCode;
