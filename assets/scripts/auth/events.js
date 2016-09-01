'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
// const app = require('../app');
const api = require('./api');
const ui = require('./ui');


// $(() => {
// // on ready block
//
// });


const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
  // .then(onSignIn)
  .done(ui.success)
  .fail(ui.failure);
};

const onChangePassword = function onChangePassword(event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.changePassword(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onSignOut = function onSignOut() {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const onGetPresets = function onGetPresets(event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.getPresets(data)
    .done(ui.getPresetsSuccess)
    .fail(ui.failure);
};

const onSavePreset = function onSavePreset(getRain, getFire, getThunder, getCrickets, getBirds, getCoffee, getWaves, getBowl) {
  getRain = $(".rainSlider").prop('value');
  getFire = $(".fireSlider").prop('value');
  getThunder = $(".thunderSlider").prop('value');
  getCrickets = $(".cricketsSlider").prop('value');
  getBirds = $(".birdsSlider").prop('value');
  getCoffee = $(".coffeeSlider").prop('value');
  getWaves  = $(".wavesSlider").prop('value');
  getBowl = $(".bowlSlider").prop('value');
  // let getName = getFormFields(this);
  let getName = $('.save-input').prop('value');
  event.preventDefault();
  api.savePreset(getName, getRain, getFire, getThunder, getCrickets, getBirds, getCoffee, getWaves, getBowl)
    .done(ui.success)
    .fail(ui.failure);
};

const onLoadPreset = function onLoadPreset(data) {
  console.log(data);
  event.preventDefault();
  api.loadPreset(data)
    .done(ui.loadPresetSuccess)
    .fail(ui.failure);
};

const onDeletePreset = function onDeletePreset(data) {
  // let data = $('.delete-input').prop('value');
  console.log(data);
  event.preventDefault();
  api.deletePreset(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onUpdatePreset = function onChangePresetName(id, getRain, getFire, getThunder, getCrickets, getBirds, getCoffee, getWaves, getBowl) {
  getRain = $(".rainSlider").prop('value');
  getFire = $(".fireSlider").prop('value');
  getThunder = $(".thunderSlider").prop('value');
  getCrickets = $(".cricketsSlider").prop('value');
  getBirds = $(".birdsSlider").prop('value');
  getCoffee = $(".coffeeSlider").prop('value');
  getWaves  = $(".wavesSlider").prop('value');
  getBowl = $(".bowlSlider").prop('value');
  api.updatePreset(id, getRain, getFire, getThunder, getCrickets, getBirds, getCoffee, getWaves, getBowl)
    .done(ui.success)
    .fail(ui.failure);
};

const addHandlers = () => {
  // $('.load').on('submit', onLoadPreset);

  $('.delete').on('click', onDeletePreset);
  $('.get').on('click', onGetPresets);
  $('.save').on('click', onSavePreset);
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-password-form').on('submit', onChangePassword);
  $('.sign-out-form').on('click', onSignOut);
};

module.exports = {
  addHandlers,
  onLoadPreset,
  onUpdatePreset,
  onDeletePreset,
};
