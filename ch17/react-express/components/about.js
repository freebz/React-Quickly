const React = require('react')

module.exports = function About() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'a',
      {
        href: 'http://Node.University'
      },
      'Node.University'
    ),
    ' is home to top-notch Node education which brings joy to JavaScript engineers.'
  )
}