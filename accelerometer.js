// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic accelerometer example logs a stream
of x, y, and z data from the accelerometer
*********************************************/

var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['B']);
var request = require('request');

// Initialize the accelerometer.
accel.on('ready', function () {
    // Stream accelerometer data
  accel.on('data', function (xyz) {
    console.log(
      'x:', xyz[0].toFixed(2),
      'y:', xyz[1].toFixed(2),
      'z:', xyz[2].toFixed(2));

      request.post('https://triggers.octoblu.com/flows/d583a11c-826d-468f-9d2f-37e83265e34c/triggers/44b68ea0-e7c0-11e5-9f26-a58a363cc0f4', {form:{xyz:xyz}})

  });
});

accel.on('error', function(err){
  console.log('Error:', err);
});
