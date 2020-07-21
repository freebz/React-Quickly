// 예제 코드 13.7  React를 명시적으로 정의하기

const React = require('react')

module.exports = function About() {
  return <div>
    <a href="http://Node.University" target="_blank">Node.University</a> 
      is home to top-notch Node education which brings joy to JavaScript engineers.
  </div>
}