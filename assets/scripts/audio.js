'use strict';

const pauseAll = function pauseAll(){
  $('#rain-track').get(0).pause();
  $('#fire-track').get(0).pause();
  $('#thunder-track').get(0).pause();
  $('#crickets-track').get(0).pause();
  $('#birds-track').get(0).pause();
  $('#coffee-track').get(0).pause();
  $('#waves-track').get(0).pause();
  $('#bowl-track').get(0).pause();
};

const playAll = function playAll(){
  $('#rain-track').get(0).play();
  $('#fire-track').get(0).play();
  $('#thunder-track').get(0).play();
  $('#crickets-track').get(0).play();
  $('#birds-track').get(0).play();
  $('#coffee-track').get(0).play();
  $('#waves-track').get(0).play();
  $('#bowl-track').get(0).play();
};

//THIS ADJUSTS ONLY ONE SLIDER -- CODE NOT DRY
// const changeVol = function changeVol() {
//   const sliderInput = function sliderInput() {
//     console.log(this);
//     console.log($('.rainSlider').val());
//     return $('.rainSlider').val();
//   };
//   $('#rain-track').prop('volume', sliderInput);
// };

// THIS ADJUSTS ALL VOLUMES TO SAME VALUE
// const changeVol2 = function changeVol2(){
//   // this would work if i can select "this" audio-track
//   $('.audio-track').prop('volume', $(this).val());
//
// };


// string interpralation to select specific slider
// const changeRainVol = function changeRainVol(){
//   let foo = foo;
//   const sliderInput = function sliderInput(){
//     return $('.' + foo +'rainSlider').val();
//   };
//   $('#rain-track').prop('volume', sliderInput);
// };

const changeRainVol = function changeRainVol(){
  const sliderInput = function sliderInput(){
    return $('.rainSlider').val();
  };
  $('#rain-track').prop('volume', sliderInput);
};

const changeFireVol = function changeFireVol(){
  const sliderInput = function sliderInput(){
    return $('.fireSlider').val();
  };
  $('#fire-track').prop('volume', sliderInput);
};

const changeThunderVol = function changeThunderVol(){
  const sliderInput = function sliderInput(){
    return $('.thunderSlider').val();
  };
  $('#thunder-track').prop('volume', sliderInput);
};

const changeCricketsVol = function changeCricketsVol(){
  const sliderInput = function sliderInput(){
    return $('.natureSlider').val();
  };
  $('#nature-track').prop('volume', sliderInput);
};

const changeBirdsVol = function changeBirdsVol(){
  const sliderInput = function sliderInput(){
    return $('.birdsSlider').val();
  };
  $('#birds-track').prop('volume', sliderInput);
};

const changeCoffeeVol = function changeCoffeeVol(){
  const sliderInput = function sliderInput(){
    return $('.coffeeSlider').val();
  };
  $('#coffee-track').prop('volume', sliderInput);
};

const changeWavesVol = function changeWavesVol(){
  const sliderInput = function sliderInput(){
    return $('.wavesSlider').val();
  };
  $('#waves-track').prop('volume', sliderInput);
};

const changeBowlVol = function changeBowlVol(){
  const sliderInput = function sliderInput(){
    return $('.bowlSlider').val();
  };
  $('#bowl-track').prop('volume', sliderInput);
};




// $('.rainSlider').on('change', changeVol);
// $('.allSliders').on('change', changeVol2);
$('.rainSlider').on('input change', changeRainVol);
$('.fireSlider').on('input change', changeFireVol);
$('.thunderSlider').on('input change', changeThunderVol);
$('.natureSlider').on('input change', changeCricketsVol);
$('.birdsSlider').on('input change', changeBirdsVol);
$('.coffeeSlider').on('input change', changeCoffeeVol);
$('.wavesSlider').on('input change', changeWavesVol);
$('.bowlSlider').on('input change', changeBowlVol);
$('#pause').on('click', pauseAll);
$('#play').on('click', playAll);
$('.audio-track').prop('volume', 0.5);
