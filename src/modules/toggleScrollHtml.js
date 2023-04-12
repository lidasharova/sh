//ф-ция удаления скролла
const html = document.documentElement;
function toggleScrollHtml() {
  html.classList.toggle('scroll-lock');
  html.classList.toggle('scrollable');
}

export default toggleScrollHtml;
