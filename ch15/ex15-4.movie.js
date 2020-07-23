// 예제 코드 15.4  컴포넌트 클래스 메서드 fetchMovie()

// ...
fetchMovie(id = this.props.params.id) {
  const query = clean`{
    movie(index:${id}) {
      title,
      cover,
      year,
      starring {
        name
      }
    }
  }`

  axios.get(`/q?query=${query}`)
    .then(response => {
      this.props.fetchMovie(response)
    })
}
// ...