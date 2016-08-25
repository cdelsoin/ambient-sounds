'use strict';

const app = require('../app');

const signUp = (data) => {
  return $.ajax({
    url: app.api + '/sign-up',
    method: 'POST',
    data, // this is equivalent to "data: data,"
  });
};

const signIn = (data) => {
  return $.ajax({
    url: app.api + '/sign-in',
    method: 'POST',
    data, // this is equivalent to "data: data,"
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.api + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data,// this is equivalent to "data: data,"
  });
};

const signOut = () => {
  return $.ajax({
    url: app.api + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  });
};


// GETS ALL PRESETS (NON USER SPECIFIC)
// const getPresets = function (){
//   return $.ajax({
//     url: app.api + '/presets/',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     },
//   });
// };

const getPresets = function (){
  return $.ajax({
    url: app.api + '/presets?user_presets=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
  });
};



// const savePreset = (getName, getRain, getFire, getThunder, getCrickets, getBirds, getCoffee, getWaves, getBowl) => $.ajax ({
const savePreset = function (getName, getRain, getFire, getThunder, getCrickets, getBirds, getCoffee, getWaves, getBowl){
  return $.ajax ({
    url: app.api + '/presets/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      "preset": {
        "name": getName,
        "rain": getRain,
        "fire": getFire,
        "thunder": getThunder,
        "crickets": getCrickets,
        "birds": getBirds,
        "coffee": getCoffee,
        "waves": getWaves,
        "bowl": getBowl
      }
    }
  });
};

const loadPreset = function (data){
  return $.ajax ({
    url: app.api + '/presets/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
  });
};

const deletePreset = function (data){
  return $.ajax ({
    url: app.api + '/presets/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
  });
};

const updatePreset = function (id, getRain, getFire, getThunder, getCrickets, getBirds, getCoffee, getWaves, getBowl){
  return $.ajax ({
    url: app.api + '/presets/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      "preset": {
        "rain": getRain,
        "fire": getFire,
        "thunder": getThunder,
        "crickets": getCrickets,
        "birds": getBirds,
        "coffee": getCoffee,
        "waves": getWaves,
        "bowl": getBowl
      }
    }
  });
};



module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getPresets,
  savePreset,
  loadPreset,
  deletePreset,
  updatePreset,
};
