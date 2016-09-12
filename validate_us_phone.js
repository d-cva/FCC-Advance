
function telephoneCheck(str) {
  // Good luck!
  var regx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regx.test(str);
}



console.log(telephoneCheck("55-555-5555"));
