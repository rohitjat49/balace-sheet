// for gmail validation
export const isValidGmail = (email) => {
  let regularExp = /^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$/;
  return regularExp.test(email);
};

// for username

export const isValidForUserName = (name) => {
  let regularExp = /^[a-zA-Z\-]+$/;
  return regularExp.test(name);
};

// for gmail mobile

export const isValidForMobileNumber = (number) => {
  let regExp = /^(0|91)?[6-9][0-9]{9}$/;
  return regExp.test(number);
};
