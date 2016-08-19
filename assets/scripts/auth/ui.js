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
  app.user.presets = data.presets;
  console.log(data);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  getPresetsSuccess,
};
