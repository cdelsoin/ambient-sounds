'use strict';

// const sliderInput = function sliderInput() {
//   console.log($('.rainSlider').val());
//   return $('.rainSlider').val();
// };


const pauseAll = function pauseAll(){
  $('.audio-track')[0].pause();
};

const changeVol = function changeVol() {
  const sliderInput = function sliderInput() {
    console.log($('.rainSlider').val());
    return $('.rainSlider').val();
  };

  $('#rain-track').prop('volume', sliderInput);
};

$('.rainSlider').on('change', changeVol);
$('#pause').on('click', pauseAll);
$('.audio-track').prop('volume', 0.5);
