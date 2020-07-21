// 예제 코드 13.11  router.push()를 호출하여 페이지를 전환하기

const React = require('react')

module.exports = function Contact(props) {
  setTimeout(()=>{props.router.push('about')}, 1000)
  return <div>
    <h3>Contact Us</h3>
    <input type="text" placeholder="your email" className="form-control" />
    <textarea type="text" placeholder="your message" className="form-control" />
    <button className="btn btn-primary">send</button>
  </div>
}