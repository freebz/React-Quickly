// 예제 코드 16.1  비밀번호 생성 모듈

module.exports = () => {
  return Math.random().toString(36).slice(-8)
}