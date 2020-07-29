module.exports =  {
  upperCase: {
    // 대문자가 최소한 한 글자 포함되어야 한다.
    message:  'Must have at least one upper-case character',
    pattern: /([A-Z]+)/
  },
  lowerCase: {
    // 소문자가 최소한 한 글자 포함되어야 한다.
    message: 'Must have at least one lower-case character',
    pattern: /([a-z]+)/
  },
  special:{
    // 특수문자가 최소한 한 글자 포함되어야 한다.
    message: 'Must have at least one special character (#$@!&%...)',
    pattern: /([\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\\|\[\]\/'\,\.\`\~]+)/
  },
  number: {
    // 숫자가 최소한 한 글자 포함되어야 한다.
    message: 'Must have at least one number',
    pattern: /([0-9]+)/
  },
  'over6': {
    // 비밀번호는 최소 여섯 글자 이상이어야 한다.
    message: 'Must be more than 6 characters',
    pattern: /(.{6,})/
  }
}