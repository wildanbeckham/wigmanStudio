$(window).scroll(function () {
  $('nav, a, span').toggleClass('scrolled', $(this).scrollTop() > 20);
});
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('navbar').style.padding = '25px 10px';
  } else {
    document.getElementById('navbar').style.padding = '20px 10px';
  }
}
(function () {
  // Add event listener
  document.addEventListener('mousemove', parallax);
  const elem = document.querySelector('.parallax');
  // Magic happens here
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${100 - (_mouseX - _w) * 0}% ${100 - (_mouseY - _h) * 0}%`;
    let _depth2 = `${100 - (_mouseX - _w) * 0.02}% ${100 - (_mouseY - _h) * -0.01}%`;
    let _depth3 = `${100 - (_mouseX - _w) * 0.03}% ${100 - (_mouseY - _h) * 0.01}%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})();
