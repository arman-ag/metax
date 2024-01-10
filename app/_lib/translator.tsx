const translatorٍErrorMessage = (error) => {
  let res = '';
  switch (error) {
    case 'the user not found, please sign up first!':
      res = 'یوزر مورد نظر پیدا نشد';
      break;
    case 'TypeError: Failed to fetch':
      res = 'اتصال اینترنت خود را برسی کنید';
      break;
    case 400:
      res = 'مشخصات را مطابق فرمت خواسته شده وارد کنید';
      break;
    case 'the sms code is not valid':
      res = 'کد ارسال شده اشتباه است';
      break;
    case 'the user exist, please try forget password':
      res = 'شماره تلفن ثبت شده است لطفا از بخش ورود استفاده کنید.';
      break;
    case 'you can request sms code every 2 minute, please wait a little bit':
      res = 'برای دریافت مجدد پیامک دو دقیقه صبر کنید';
      break;

    default:
      res = 'I have never heard of that fruit...';
      return;
  }
  return res;
};
export default translatorٍErrorMessage;
