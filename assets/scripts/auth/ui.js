'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data);
};

const signOutSuccess = (data) => {
  delete app.user;
  console.log(data);
};

const getPresetsSuccess = (data) => {
  const showPresets = require('../templates/presets.handlebars');
  $('.presets-container').html(showPresets({
    presets: data.presets
  }));
  console.log(data);
};

const loadPresetSuccess = (data) => {
  let preset = data.preset;
  console.log(data);
  $(".rainSlider").prop('value', preset.rain);
  $(".fireSlider").prop('value', preset.fire);
  $(".thunderSlider").prop('value', preset.thunder);
  $(".cricketsSlider").prop('value', preset.crickets);
  $(".birdsSlider").prop('value', preset.birds);
  $(".coffeeSlider").prop('value', preset.coffee);
  $(".wavesSlider").prop('value', preset.waves);
  $(".bowlSlider").prop('value', preset.bowl);

  $("#rain-track").prop('volume', preset.rain);
  $("#fire-track").prop('volume', preset.fire);
  $("#thunder-track").prop('volume', preset.thunder);
  $("#crickets-track").prop('volume', preset.crickets);
  $("#birds-track").prop('volume', preset.birds);
  $("#coffee-track").prop('volume', preset.coffee);
  $("#waves-track").prop('volume', preset.waves);
  $("#bowl-track").prop('volume', preset.bowl);
};

const updatePresetSuccess = (data) => {
  const showPresets = require('../templates/presets.handlebars');
  $('.presets-container').html(showPresets({
    presets: data.presets
  }));
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  getPresetsSuccess,
  loadPresetSuccess,
  updatePresetSuccess
};
