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
  authEvents.onChangePresetName(this.id);
});



// On document ready
$(() => {
  authEvents.addHandlers();
});
