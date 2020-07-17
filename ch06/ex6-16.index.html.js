// 예제 코드 6.16  jQuery UI 플러그인에 이벤트 리스너 설정하기

let handleChange = (e, ui)=>{
  var slideEvent = new CustomEvent('slide', {
    detail: {ui: ui, jQueryEvent: e}
  })
  window.dispatchEvent(slideEvent)
}
$( '#slider' ).slider({
  'change': handleChange,
  'slide': handleChange
})