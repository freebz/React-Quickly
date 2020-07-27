describe('비밀번호', function() {
  it('Generate(생성) 버튼을 누르면 변경된다', (done)=>{

    // 불러오기

    const TestUtils = require('react-dom/test-utils')
    const { createRenderer } = require('react-test-renderer/shallow')
    const React = require('react')
    const ReactDOM = require('react-dom')
    const Password = require('../jsx/password.jsx')

    const PasswordGenerate = require('../jsx/password-generate.jsx')
    const PasswordInfo = require('../jsx/password-info.jsx')
    const PasswordInput = require('../jsx/password-input.jsx')
    const PasswordVisibility = require('../jsx/password-visibility.jsx')

    const fD = ReactDOM.findDOMNode

    let password = TestUtils.renderIntoDocument(<Password
        upperCase={true}
        lowerCase={true}
        special={true}
        number={true}
        over6={true}
      />
    )

    // 렌더링 수행

    const passwordRenderer = createRenderer()
    passwordRenderer.render(<Password/>)
    let p = passwordRenderer.getRenderOutput()
    expect(p.type).toBe('div')
    expect(p.props.children.length).toBe(6)

    // 내용과 행위에 대한 어써션 수행

    let rules = TestUtils.scryRenderedDOMComponentsWithTag(password, 'li')
    expect(rules.length).toBe(5)
    expect(rules.length).toEqual(5)
    expect(fD(rules[0]).textContent).toEqual('Must have at least one upper-case character')  // 대문자가 최소 한 글자는 있어야 한다.
    expect(fD(rules[0]).textContent).toBe('Must have at least one upper-case character')

    let generateButton = TestUtils.findRenderedDOMComponentWithClass(password, 'generate-btn')
    expect(fD(rules[1]).firstChild.nodeName.toLowerCase()).toBe('#text')
    TestUtils.Simulate.click(fD(generateButton))
    expect(fD(rules[1]).firstChild.nodeName.toLowerCase()).toBe('strike')

    done()
  })
})