exports.stringLength = (string) => {
  if (string.length <= 10 && string.length >= 1) {
    return string.length;
  } else {
    throw 'String has to be at least 1 character and at most 10!';
  }
};

exports.reverseString = (string) => {
  return string.split('').reverse().join('');
};

exports.capitalizeString = (string) => {
  const char0 = string.split('')[0].toUpperCase();
  const strToArr = string.split('');
  strToArr[0] = char0;
  return strToArr.join('');
};
