'use strict';

const pauseAll = function pauseAll(){
  $('.audio-track').prop('volume', 0);
};

const playAll = function playAll(){
  $('.audio-track').prop('volume', 0.5);
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

const changeRainVol = function changeRainVol(){
  const sliderInput = function sliderInput(){
    return $('.rainSlider').val();
  };
  $('#rain-track').prop('volume', sliderInput);
};


// string interpralation to select specific slider
// const changeRainVol = function changeRainVol(){
//   let foo = foo;
//   const sliderInput = function sliderInput(){
//     return $('.' + foo +'rainSlider').val();
//   };
//   $('#rain-track').prop('volume', sliderInput);
// };

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

const changeNatureVol = function changeNatureVol(){
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
$('.rainSlider').on('change', changeRainVol);
$('.fireSlider').on('change', changeFireVol);
$('.thunderSlider').on('change', changeThunderVol);
$('.natureSlider').on('change', changeNatureVol);
$('.birdsSlider').on('change', changeBirdsVol);
$('.coffeeSlider').on('change', changeCoffeeVol);
$('.wavesSlider').on('change', changeWavesVol);
$('.bowlSlider').on('change', changeBowlVol);
$('#pause').on('click', pauseAll);
$('#play').on('click', playAll);
$('.audio-track').prop('volume', 0.5);
