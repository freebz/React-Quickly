// 예제 코드 13.13  props.route에서 가져온 데이터를 이용하여 글 목록 페이지 구현하기

const {Link} = require('react-router')
const React = require('react')

module.exports = function Posts(props) {
  return <div>Posts
    <ol>
      {props.route.posts.map((post, index)=>
        <li key={post.slug}>
          <Link to={`/posts/${post.slug}`} >{post.title}</Link>
        </li>
      )}
    </ol>
  </div>
}