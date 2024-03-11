const baseUrl = process.env.baseUrl;

const getTokenWithUserPass = async (enteryData) => {
  const json = await JSON.stringify(enteryData);
  if (enteryData.password) {
    const res = await fetch(`${baseUrl}/metax/auth/v1/api/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,
      redirect: 'follow',
    });
  } else {
    const res = await fetch(`${baseUrl}/metax/auth/v1/otp-validation/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,
      redirect: 'follow',
    });
  }

  return res.json();
};

// const getTokenWithOtp = async (enteryData) => {
//   const json = await JSON.stringify(enteryData);
//   const res = await fetch(`${baseUrl}/metax/auth/v1/otp-validation/`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: json,
//     redirect: 'follow',
//   });
//   return res.json();
// };

export { getTokenWithUserPass };
