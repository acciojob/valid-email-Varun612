function validEmail(str) {
  if(typeof str !== 'string') return false
  str=str.trim()
  if(str === '') return false
  const emailRegex = /^[A-Za-z0-9]+(?:[._-][A-Za-z0-9]+)*@[A-Za-z0-9]+(?:[._-][A-Za-z0-9]+)*(?:\.[A-Za-z]{2,})+$/
  return emailRegex.test(str)
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
