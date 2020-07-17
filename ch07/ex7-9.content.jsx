// 예제 코드 7.9  이메일 폼의 render() 메서드

render() {
  return (
    <div className="well">
      <p>{this.prompt}</p>
      <div className="form-group">
        Email: <input ref="emailAddress" className="form-control" type="text" placeholder="hi@azat.co"/>
      </div>
      <div className="form-group">
        Comments: <textarea ref="comments" className="form-control" placeholder="I like your website"/>
      </div>
      <div className="form-group">
        <a className="btn btn-primary" value="Submit" onClick={this.submit}>Submit</a>
      </div>
    </div>
  )
}