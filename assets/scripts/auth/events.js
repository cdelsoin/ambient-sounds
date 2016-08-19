'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
// const app = require('../app');
const api = require('./api');
const ui = require('./ui');


// $(() => {
// // on ready block
//
// });

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signIn(data)
    .done(ui.signInSuccess)
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


// SAVE PRESETS


// const getName,
// const getRain = function getRain(){
//    return $(".rainSlider").prop('value');
// };
// const getFire = function getRain(){
//    return $(".rainSlider").prop('value')
// ;};
// const getThunder = function getRain(){
//   return $(".rainSlider").prop('value');
// };
// const getCrickets = function getRain(){
//   return $(".rainSlider").prop('value');
// };
// const getBirds = function getRain(){
//   return $(".rainSlider").prop('value');
// };
// const getCoffee = function getRain(){
//   return $(".rainSlider").prop('value');
// };
// const getWaves  = function getRain(){
//   return $(".rainSlider").prop('value');
// };
// const getBowl = function getRain(){
//   return $(".rainSlider").prop('value');
// };


const onSavePreset = function onSavePreset(getName, getRain, getFire, getThunder, getCrickets, getBirds, getCoffee, getWaves, getBowl) {
  getRain = $(".rainSlider").prop('value');
  getFire = $(".fireSlider").prop('value');
  getThunder = $(".thunderSlider").prop('value');
  getCrickets = $(".cricketsSlider").prop('value');
  getBirds = $(".birdsSlider").prop('value');
  getCoffee = $(".coffeeSlider").prop('value');
  getWaves  = $(".wavesSlider").prop('value');
  getBowl = $(".bowlSlider").prop('value');
  api.savePreset(getName, getRain, getFire, getThunder, getCrickets, getBirds, getCoffee, getWaves, getBowl)
    .done(ui.success)
    .fail(ui.failure);
    debugger;
};

// END SAVE PRESETS


const addHandlers = () => {
  $('.get').on('click', onGetPresets);
  $('.save').on('click', onSavePreset);
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-password-form').on('submit', onChangePassword);
  $('.sign-out-form').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};
