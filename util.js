exports.stringLength = (string) => {
  if (string.length <= 10 && string.length >= 1) {
    return string.length;
  } else {
    throw 'String has to be at least 1 character and at most 10!';
  }
};
