const translatorٍErrorMessage = (error) => {
  console.log('errrrrror', error);
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
    case '409':
      res = 'کد ارسال شده اشتباه است';
      break;
    case 409:
      res = 'شماره تلفن ثبت شده است لطفا از بخش ورود استفاده کنید.';
      break;
    case 406:
      res = 'برای دریافت مجدد پیامک دو دقیقه صبر کنید';
      break;
    case 409:
      res = 'کد وارد شده صحیح نمی باشد';
      break;
    case 401:
      res = 'بریا انجام این فعالیت نیاز به لوگین کردن دارید';
      break;
    case 422:
      res = 'لطف پسورد را مطابق الگو خواسته شده وارد کنید ';
      break;
    case 204:
      res = 'اطلاعات اپدیت شد';
      break;

    default:
      res = 'خطا ... ';
      break;
  }
  return res;
};
const breadCrumbTranslator = (text: string) => {
  let result = '';
  switch (text) {
    case 'audio-service':
      result = 'سرویس صوت';
      break;
    case 'asr':
      result = 'سرویس ASR';
      break;
    case 'denoiser':
      result = 'سرویس دینویزر';
      break;
    case 'music-separator':
      result = '  جدا سازی موسیقی و خواننده';
      break;
    case 'text-service':
      result = 'سرویس متن';
      break;
    case 'correct-dictation':
      result = ' غلط املایی';
      break;
    case 'recognize-insult':
      result = ' تشخیص توهین';
      break;
    case 'tts':
      result = 'سرویس tts';
      break;
    case 'age-detection':
      result = 'تشخیص سن';
      break;
    case 'body-detection':
      result = 'تشخیص بدن';
      break;
    case 'card-diagnose':
      result = 'تشخیص کارت بانکی';
      break;
    case 'emotion-diagnose':
      result = 'تشخیص احساسات';
      break;
    case 'face-detection':
      result = 'تشخیص صورت';
      break;
    case 'plaque-detection':
      result = 'تشخیص پلاک';
      break;
    case 'image-service':
      result = 'سرویس تصویر';
      break;
    case 'sex-detection':
      result = 'تشخیص جنسیت';
      break;
  }
  return result;
};

const translateService = (text: string) => {
  let result = {};
  switch (text) {
    case 'high denoise':
      result = { serviceName: 'دینویزر', address: '/audio-service/denoiser' };
      break;
    case 'low denoise':
      result = {
        serviceName: 'جداسازی موسیقی و خواننده',
        address: '/audio-service/music-separator',
      };
      break;
  }
  return result;
};
const translateServiceStatus = (text: string) => {
  let result = {};
  switch (text) {
    case 'success':
      result = { color: '#07955E', status: 'موفق' };
      break;
    case 'pending':
      result = { color: '#1596CB', status: 'در حال پردازش' };
      break;
    case 'failure':
      result = { color: '#CC5B4E', status: 'ناموفق' };
      break;
    case 'started':
      result = { color: '#1596CB', status: 'در حال پردازش' };
      break;
  }
  return result;
};
export {
  breadCrumbTranslator,
  translateService,
  translateServiceStatus,
  translatorٍErrorMessage,
};
