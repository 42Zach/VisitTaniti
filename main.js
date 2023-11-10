// Responsive 3-line
$(document).ready(function(){
    $(".toggle-btn").click(function(){
        $("ul").toggleClass("show");
    });
});

// home main-heading anim.

let mh = {};
mh.opacityIn = [0, 1];
mh.scaleIn = [0.2, 1];
mh.scaleOut = 3;
mh.durationIn = 500;
mh.durationOut = 500;
mh.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.mh .let1',
    opacity: mh.opacityIn,
    scale: mh.scaleIn,
    duration: mh.durationIn
  }).add({
    targets: '.mh .let1',
    opacity: 0,
    scale: mh.scaleOut,
    duration: mh.durationOut,
    easing: "easeInExpo",
    delay: mh.delay
  }).add({
    targets: '.mh .let2',
    opacity: mh.opacityIn,
    scale: mh.scaleIn,
    duration: mh.durationIn
  }).add({
    targets: '.mh .let2',
    opacity: 0,
    scale: mh.scaleOut,
    duration: mh.durationOut,
    easing: "easeInExpo",
    delay: mh.delay
  }).add({
    targets: '.mh .let3',
    opacity: mh.opacityIn,
    scale: mh.scaleIn,
    duration: mh.durationIn
  }).add({
    targets: '.mh .let3',
    opacity: 0,
    scale: mh.scaleOut,
    duration: mh.durationOut,
    easing: "easeInExpo",
    delay: mh.delay
  }).add({
    targets: '.mh .let4',
    opacity: mh.opacityIn,
    scale: mh.scaleIn,
    duration: mh.durationIn
  }).add({
    targets: '.mh .let4',
    opacity: 0,
    scale: mh.scaleOut,
    duration: mh.durationOut,
    easing: "easeInExpo",
    delay: mh.delay
  }).add({
    targets: '.mh',
    opacity: 0,
    duration: 500,
    delay: 500
  });