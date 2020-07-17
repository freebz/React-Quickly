// 예제 코드 7.2  체크박스 정의하기

<input type="checkbox"
  name="checkboxGroup"
  value='node'
  checked={this.state.checkboxGroup['node']}
  onChange={this.handleCheckbox}/>
<input type="checkbox"
  name="checkboxGroup"
  value='react'
  checked={this.state.checkboxGroup['react']}
  onChange={this.handleCheckbox}/>
<input type="checkbox"
  name="checkboxGroup"
  value='express'
  checked={this.state.checkboxGroup.express}
  onChange={this.handleCheckbox}/>
<input type="checkbox"
  name="checkboxGroup"
  value='mongodb'
  checked={this.state.checkboxGroup['mongodb']}
  onChange={this.handleCheckbox}/>