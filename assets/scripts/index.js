'use strict';

require('./example');
require('./audio');
require('./auth/events');
const authEvents = require('./auth/events.js');

$(document).on('click','.load', function(){
  authEvents.onLoadPreset(this.id);
});

$(document).on('click','.update', function(){
  let id = this.id;
  authEvents.onUpdatePreset(id);
});

$(document).on('click','.delete', function(){
  let data = this.id;
  authEvents.onDeletePreset(data);
});

const campfirePreset = function(){
  $("#rain-track").prop('volume', 0);
  $("#fire-track").prop('volume', 0.775);
  $("#thunder-track").prop('volume', 0);
  $("#crickets-track").prop('volume', 0.675);
  $("#birds-track").prop('volume', 0.5);
  $("#coffee-track").prop('volume', 0);
  $("#waves-track").prop('volume', 0);
  $("#bowl-track").prop('volume', 0);
};


// On document ready
$(() => {
  authEvents.addHandlers();
  $('.pause-img').hide();
  $('.change-pass-div').hide();
  $('.sign-out-div').hide();
  $('.save-div').hide();
  $('.get-div').hide();
  campfirePreset();
  $('#welcome-modal').modal('show');

});
