'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
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
  $('.save-div').hide();
  $('.get-div').hide();
  campfirePreset();

});
