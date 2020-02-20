// JavaScript Document

function play() {
  document.querySelector(".p3").className = "slidein";
  window.requestAnimationFrame(function(slidein) {
    window.requestAnimationFrame(function(slidein) {
      document.querySelector(".p3").className = "slidein";
    });
  });
}
document.querySelector(".runButton").addEventListener("click", play, false);