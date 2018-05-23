const validators = {};

validators.email = text => {
console.log('validating email');
  const emailRegExp = /[\w-]+@([\w-]+\.)+[\w-]+/ ;
  if (!emailRegExp.test(text))
    return ' does not appear valid'

  return false;
}

validators.phone = text => {
console.log('validating phone');
  const entireNumberRegExp = /[^0-9^ ^x^+]/ ;
  const numberWithoutPlusRegExp = /[^0-9^ ^x]/ ;
  const XsRegExp = new RegExp ('[x]','gi');
  if (text.length <4)
    return ' too short';
  if (text.length >17)
    return ' too long';
  if (text.match (entireNumberRegExp))
    return ' contains non-numeric characters';
  if (text.slice(1).match (numberWithoutPlusRegExp))
    return ' contains non-numeric characters';
  let matchedXs = text.match (XsRegExp) ;
  if (matchedXs && matchedXs.length >1)
    return ' contains non-numeric characters';

  return false;
}

validators.username = text => {
console.log('validating username');
  const containsNonAlphanumPlusRegExp = /[^0-9^a-z-_#]/gi ;
  if (text.length < 3)
    return ' must be at least 3 alphanumeric characters (and _-#)';
  let fails = text.match (containsNonAlphanumPlusRegExp)
  if (fails)
    return ' cannot contain illegal characters '+fails.join(', ');

  return false;
}

validators.password = (text) => {
console.log('validating password');
  const containsLettersRegExp = /[a-z]/i ;
  const containsNonAlphanumericRegExp = /[^0-9^a-z]/ ;
  if (text.length < 8)
    return ' must be at least 8 characters'
  if (!containsNonAlphanumericRegExp.test(text) || !containsLettersRegExp.test(text))
    return ' must contain non-alphanumeric characters, and letters';

  return false;
}

export default validators;
